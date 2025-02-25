import { useEffect, useRef } from "react";

export const useOutClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, [callback]);

  return ref;
};