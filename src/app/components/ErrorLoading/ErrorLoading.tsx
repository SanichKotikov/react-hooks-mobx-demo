import React, { useState, useCallback } from 'react';

interface IProps {
  onReload: () => Promise<void>;
  className?: string;
}

export default React.memo<IProps>(
  function ErrorLoading({ onReload, className }) {
    const [loading, update] = useState(false);

    const handle = useCallback(() => {
      update(true);
      onReload().catch(() => update(false));
    }, [onReload]);

    return (
      <div className={className}>
        <span>Something went wrong</span>
        &nbsp;
        <button disabled={loading} onClick={handle}>
          reload
        </button>
      </div>
    );
  }
);
