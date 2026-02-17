"use client";

import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
      <button
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 p-3 
             bg-purple-600 text-white 
             rounded-full shadow-lg 
             hover:bg-purple-700 
             transition-all duration-300 z-50"
  aria-label="Scroll to top"
>
  <FaArrowUp size={20} />
</button>

      )}
    </>
  );
}
