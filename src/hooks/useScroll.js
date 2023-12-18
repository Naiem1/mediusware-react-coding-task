import { useEffect, useRef } from 'react';

const useScroll = (needToCall, setPage, isLoading, hasMore, searchTerm) => {
  const lastElementRef = useRef(null);
  const observer = useRef(null);
  useEffect(() => {
    if (isLoading) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (needToCall && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        }
      },
      { threshold: 1 }
    );

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isLoading, hasMore, needToCall, searchTerm]);
  return {
    lastElementRef,
  };
};

export default useScroll;

/* import { useEffect, useRef } from 'react';

const useScroll = (
  needToCall,
  setPage,
  isLoading,
  hasMore,
  setHasMore,
  setIsLoading,
  setContacts,
  searchTerm
) => {
  const lastElementRef = useRef(null);
  const observer = useRef(null);
  useEffect(() => {
    if (isLoading) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (needToCall && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        }
      },
      { threshold: 1 }
    );

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }

      // return () => {
      //   setIsLoading(false);
      //   setContacts([]);
      //   setHasMore(false);
      //   // setPage(1);
      // };
    };
  }, [isLoading, hasMore, needToCall, searchTerm]);
  return {
    lastElementRef,
  };
};

export default useScroll;

 */
