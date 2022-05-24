import { useState, useEffect } from "react";

export const useResize = (myRef) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    };

    if (!width && !height) {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef, width, height]);

  return { width, height };
};
