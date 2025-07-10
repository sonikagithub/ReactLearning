import React, { memo, useRef, useEffect } from "react";
import lottie from "lottie-web"; // Make sure you install lottie-web: npm install lottie-web

const LottieAnimation = memo(({ className, path }) => {
  const containerRef = useRef();

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });

    return () => {
      animationInstance.destroy(); // Cleanup on unmount
    };
  }, [path]);

  return <div className={className} ref={containerRef} />;
});

export default LottieAnimation;
