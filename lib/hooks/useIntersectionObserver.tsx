import {
  useEffect,
  useRef,
  useState,
  useCallback,
  FunctionComponent,
} from 'react';

type IntersectionObserverHookObserver = Element | Document | null;
type IntersectionObserverHookRef = IntersectionObserver | null;
type IntersectionObserverHookObserverCallback = IntersectionObserverCallback;

export type IntersectionObserverHookArgs = IntersectionObserverInit;
export type IntersectionObserverHookResult = {
  isVisible: boolean;
  Notifier: FunctionComponent;
};

const DEFAULT_ROOT_MARGIN = '0px 0px 0px 0px';
const DEFAULT_THRESHOLD = 0;

const style = {
  width: '100%',
  height: '1px',
  backgroundColor: 'transparent',
};
const useIntersectionObserver = (
  args?: IntersectionObserverHookArgs,
): IntersectionObserverHookResult => {
  const rootMargin = args?.rootMargin ?? DEFAULT_ROOT_MARGIN;
  const threshold = args?.threshold ?? DEFAULT_THRESHOLD;

  // This is the observer reference, we'll find if anything intersects this
  const rootRef = useRef<IntersectionObserverHookObserver>(null);
  // This is the element we'll observe, if it's showing inside the observer or not
  const observedRef = useRef<HTMLDivElement>(null);
  // This is the IntersectionObserver
  const intersectionRef = useRef<IntersectionObserverHookRef>(null);

  const [isVisible, setVisible] = useState<boolean>(true);

  // I need referential transparency on this callback, because it will be
  // recreated everytime the hook runs
  const unobserve = useCallback(() => {
    const observer = intersectionRef.current;
    observer?.disconnect();
    intersectionRef.current = null;
  }, [intersectionRef]);

  const intersectionObserverCallback =
    useCallback<IntersectionObserverHookObserverCallback>(
      (entries) => {
        if (entries[0].intersectionRatio > threshold) {
          setVisible(true);
          return;
        }
        setVisible(false);
      },
      [setVisible, threshold],
    );

  const observe = useCallback(() => {
    const node = observedRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(intersectionObserverCallback, {
      root: rootRef.current,
      rootMargin,
      threshold,
    });
    observer.observe(node);
    intersectionRef.current = observer;
  }, [
    observedRef,
    intersectionRef,
    rootMargin,
    threshold,
    rootRef,
    intersectionObserverCallback,
  ]);

  const Notifier = () => (
    <div style={style} ref={observedRef}>
      .
    </div>
  );

  // This is the cleanup code, keep it atomic here
  useEffect(
    () => () => {
      unobserve();
    },
    [unobserve, isVisible],
  );

  useEffect(() => {
    unobserve();
    observe();
  }, [unobserve, observe, isVisible]);

  return {
    isVisible,
    Notifier,
  };
};

export default useIntersectionObserver;
