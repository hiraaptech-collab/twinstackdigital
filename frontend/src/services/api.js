/**
 * API Service for Twin Stack Digital
 * Centralizes all HTTP requests with environment-driven base URL and safe error handling.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/v1';

export const getApiBaseUrl = () => API_BASE_URL;

/**
 * Perform health check against backend API /api/v1/health
 * @returns {Promise<{ ok: boolean, data?: any, error?: string, latencyMs: number }>}
 */
export async function checkBackendHealth() {
  const startTime = performance.now();
  const url = `${API_BASE_URL}/health`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const latencyMs = Math.round(performance.now() - startTime);

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        data,
        error: data?.database?.message || `HTTP ${response.status}: ${response.statusText}`,
        latencyMs,
      };
    }

    return {
      ok: true,
      status: response.status,
      data,
      latencyMs,
    };
  } catch (err) {
    const latencyMs = Math.round(performance.now() - startTime);
    let errorMessage = err.message || 'Unable to connect to backend server';

    if (err.name === 'AbortError') {
      errorMessage = 'Request timed out after 6 seconds';
    } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      errorMessage = 'Connection refused. Is the Laravel server running at ' + API_BASE_URL + '?';
    }

    return {
      ok: false,
      status: 0,
      data: null,
      error: errorMessage,
      latencyMs,
    };
  }
}

/**
 * Perform a generic POST request to the API
 * @param {string} endpoint - The API endpoint (relative to base URL)
 * @param {object} body - The request body
 * @param {object} [options] - Additional options (timeout, etc.)
 * @returns {Promise<{ ok: boolean, data?: any, error?: string, status?: number }>}
 */
export async function apiPost(endpoint, body, options = {}) {
  const startTime = performance.now();
  const url = `${API_BASE_URL}${endpoint}`;
  const timeout = options.timeout || 15000;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const latencyMs = Math.round(performance.now() - startTime);

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        data,
        error: data?.message || `HTTP ${response.status}: ${response.statusText}`,
        latencyMs,
      };
    }

    return {
      ok: true,
      status: response.status,
      data,
      latencyMs,
    };
  } catch (err) {
    const latencyMs = Math.round(performance.now() - startTime);
    let errorMessage = err.message || 'Unable to connect to backend server';

    if (err.name === 'AbortError') {
      errorMessage = 'Request timed out after ' + (timeout / 1000) + ' seconds';
    } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      errorMessage = 'Connection refused. Is the Laravel server running at ' + API_BASE_URL + '?';
    }

    return {
      ok: false,
      status: 0,
      data: null,
      error: errorMessage,
      latencyMs,
    };
  }
}