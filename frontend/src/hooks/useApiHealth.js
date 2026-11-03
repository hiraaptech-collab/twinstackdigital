import { useState, useEffect, useCallback } from 'react';
import { checkBackendHealth } from '../services/api';

export function useApiHealth() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [latencyMs, setLatencyMs] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);

  const fetchHealth = useCallback(async () => {
    setLoading(true);
    setError(null);

    const result = await checkBackendHealth();

    setLatencyMs(result.latencyMs);
    setLastChecked(new Date());

    if (result.ok && result.data) {
      setData(result.data);
      setError(null);
    } else {
      setData(result.data || null);
      setError(result.error || 'Failed to reach API endpoint');
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchHealth();
  }, [fetchHealth]);

  return {
    loading,
    data,
    error,
    latencyMs,
    lastChecked,
    refetch: fetchHealth,
  };
}
