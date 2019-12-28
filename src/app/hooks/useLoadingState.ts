import { useState, useMemo } from 'react';

enum fsState {
  idle,
  loading,
  success,
  failure,
}

function useLoadingState() {
  const [state, update] = useState(fsState.idle);

  const setState = useMemo(() => ({
    load() { update(fsState.loading) },
    done() { update(fsState.success) },
    error() { update(fsState.failure) },
  }), []);

  return {
    loading: state === fsState.loading,
    success: state === fsState.success,
    failure: state === fsState.failure,
    setState,
  };
}

export default useLoadingState;
