"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scrollToTop ${isVisible ? "show" : ""}`}
    >
      <Image
        src={"/assets/scrollArrow.svg"}
        alt="Scroll arrow"
        width={24}
        height={14}
      />
    </button>
  );
};

export default ScrollToTop;
