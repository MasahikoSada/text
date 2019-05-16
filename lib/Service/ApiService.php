<?php
/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Text\Service;


use OCA\Text\DocumentSaveConflictException;
use OCA\Text\VersionMismatchException;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\FileDisplayResponse;
use OCP\AppFramework\Http\NotFoundResponse;
use OCP\Files\NotFoundException;
use OCP\ICacheFactory;
use OCP\IRequest;

class ApiService {

	protected $cache;
	protected $sessionService;
	protected $documentService;

	public function __construct(string $appName, IRequest $request, ICacheFactory $cacheFactory, SessionService $sessionService, DocumentService $documentService) {
		$this->cache = $cacheFactory->createDistributed('textSession');
		$this->sessionService = $sessionService;
		$this->documentService = $documentService;
	}

	public function create($fileId = null, $file = null, $token = null): DataResponse {
		try {
			if ($token) {
				$document = $this->documentService->createDocumentByShareToken($token, $file);
			} else if ($fileId) {
				$document = $this->documentService->createDocumentByFileId($fileId);
			} else if ($file) {
				$document = $this->documentService->createDocumentByPath($file);
			} else {
				return new DataResponse('No valid file argument provided', 500);
			}
		} catch (\Exception $e) {
			return new DataResponse($e->getMessage(), 500);
		}
		$session = $this->sessionService->initSession($document->getId());
		return new DataResponse([
			'document' => $document,
			'session' => $session
		]);
	}

	public function fetch($documentId, $sessionId, $sessionToken) {
		if ($this->sessionService->isValidSession($documentId, $sessionId, $sessionToken)) {
			$this->sessionService->removeInactiveSessions($documentId);
			try {
				$file = $this->documentService->getBaseFile($documentId);
			} catch (NotFoundException $e) {
				return new NotFoundResponse();
			}
			return new FileDisplayResponse($file);
		}
		return new NotFoundResponse();
	}

	public function close($documentId, $sessionId, $sessionToken): DataResponse {
		// TODO: To implement
		return new DataResponse([]);
	}

	public function push($documentId, $sessionId, $sessionToken, $version, $steps): DataResponse {
		if ($this->sessionService->isValidSession($documentId, $sessionId, $sessionToken)) {
			try {
				$steps = $this->documentService->addStep($documentId, $sessionId, $steps, $version);
			} catch (VersionMismatchException $e) {
				return new DataResponse($e->getMessage(), $e->getStatus());
			}
			return new DataResponse($steps);
		}
		return new DataResponse([], 500);
	}

	public function sync($documentId, $sessionId, $sessionToken, $version = 0, $autosaveContent = null, bool $force = false, bool $manualSave = false, $token = null): DataResponse {
		if (!$this->sessionService->isValidSession($documentId, $sessionId, $sessionToken)) {
			return new DataResponse([], 500);
		}
		if ($version === $this->cache->get('document-version-'.$documentId)) {
			return new DataResponse(['steps' => []]);
		}
		try {
			$document = $this->documentService->autosave($documentId, $version, $autosaveContent, $force, $manualSave, $token);
		} catch (DocumentSaveConflictException $e) {
			/** @var \OC\Files\Node\File $file */
			$file = $this->documentService->getFileByShareToken($token);
			return new DataResponse([
				'outsideChange' => $file->getContent()
			], 409);
		}
		return new DataResponse([
			'steps' => $this->documentService->getSteps($documentId, $version),
			'sessions' => $this->sessionService->getActiveSessions($documentId),
			'document' => $document
		]);
	}
}