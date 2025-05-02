import { useEffect, useRef } from "react";

export const useNavigationType = () => {
  const isBackNavigation = useRef(false);

  useEffect(() => {
    const handlePopState = () => {
      isBackNavigation.current = true;
    };

    const handleBeforeUnload = () => {
      isBackNavigation.current = false;
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return isBackNavigation;
};
