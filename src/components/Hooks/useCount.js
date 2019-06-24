import { useState, useEffect } from 'react';

function useCount(toAdd = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(c => c + toAdd);

    return () => {
      setCount(0);
    };
  }, [toAdd]);

  return count;
}

export default useCount;