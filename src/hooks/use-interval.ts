import { useEffect, useRef } from 'react';

const useInterval = (
  callback: () => void,
  delay: number | null = 1000,
): void => {
  const savedCallback = useRef(callback);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const tick = (): void => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);

      intervalIdRef.current = id;

      return () => clearInterval(id);
    }

    return () => clearInterval(intervalIdRef.current!);
  }, [delay]);
};

export default useInterval;
