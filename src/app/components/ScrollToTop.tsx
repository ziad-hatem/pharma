"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-5 z-[999] right-5 bg-blue-500 text-white p-3 rounded-full ${
        isVisible ? "inline-flex" : "hidden"
      } hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300`}
      onClick={scrollToTop}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
