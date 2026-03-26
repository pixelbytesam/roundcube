import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroHeading = () => {
  const headings = [
    "Launch faster with modern software.",
    "We build products users love ❤️",
    "Built for scale and smart growth.",
    "We build your business identity.",
    "Web mobile and software solutions.",
    "Your business needs modern solutions.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000); // ⏱ 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.06] tracking-tight">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(6px)" }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,   // 🔥 lower = more bounce
            mass: 0.8,
          }}
          className="block"
        >
          {headings[index]}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
};

export default HeroHeading;