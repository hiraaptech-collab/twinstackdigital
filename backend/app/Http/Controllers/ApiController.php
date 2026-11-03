<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    /**
     * Send a successful JSON response.
     */
    public function success($data = null, int $code = 200, string $message = 'Success'): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    /**
     * Send a 201 Created JSON response.
     */
    public function created($data = null, string $message = 'Created successfully'): JsonResponse
    {
        return $this->success($data, 201, $message);
    }

    /**
     * Send a 204 No Content response.
     */
    public function noContent(): JsonResponse
    {
        return response()->json(null, 204);
    }

    /**
     * Send an error JSON response.
     */
    public function error(string $message = 'Error', int $code = 400, $errors = null): JsonResponse
    {
        $payload = [
            'status' => 'error',
            'message' => $message,
        ];

        if ($errors !== null) {
            $payload['errors'] = $errors;
        }

        return response()->json($payload, $code);
    }

    /**
     * Send a 404 Not Found response.
     */
    public function notFound(string $message = 'Resource not found'): JsonResponse
    {
        return $this->error($message, 404);
    }

    /**
     * Send a validation error response.
     */
    public function validationError($errors, string $message = 'Validation failed'): JsonResponse
    {
        return $this->error($message, 422, $errors);
    }
}
