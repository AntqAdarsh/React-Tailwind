import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, [location]);

  return <Fragment></Fragment>;
}

export default ScrollToTop;
