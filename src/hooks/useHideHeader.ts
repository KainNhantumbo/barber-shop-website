import { useEffect, useState } from 'react';
import { useInnerWindowSize } from './useInnerWindowSize';

export const useHideHeader = (breakpoint: number) => {
  const windowInnerSize = useInnerWindowSize();
  const [isBreak, setIsBreak] = useState<boolean>(false);

  useEffect((): void => {
    windowInnerSize.width > breakpoint ? setIsBreak(true) : setIsBreak(false);
  }, [windowInnerSize]);

  return {
    isHeader: isBreak,
    toggleHeader: () => setIsBreak((current) => !current)
  };
};
