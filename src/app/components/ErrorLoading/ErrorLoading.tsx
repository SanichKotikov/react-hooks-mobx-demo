import React, { useState, useCallback } from 'react';

interface IProps {
  onReload: () => Promise<void>;
}

export default React.memo<IProps>(
  function ErrorLoading({ onReload }) {
    const [loading, update] = useState(false);

    const handle = useCallback(() => {
      update(true);
      onReload().catch(() => update(false));
    }, [onReload]);

    return (
      <div>
        <span>Something went wrong, </span>
        <button disabled={loading} onClick={handle}>
          reload
        </button>
      </div>
    );
  }
);
