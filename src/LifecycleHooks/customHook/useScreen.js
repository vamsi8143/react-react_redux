import { useEffect, useState } from "react";

export default function useScreen() {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const checkScreenSize = () => {
    if (window.innerWidth < 600) return setScreenSize("Small");
    if (window.innerWidth > 599 && window.innerWidth < 992)
      return setScreenSize("Medium");
    if (window.innerWidth > 992) return setScreenSize("Large");
  };
  return screenSize;
}

// export default useScreen;
