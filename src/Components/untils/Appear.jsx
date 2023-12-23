import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function Appear({ children }) {
  const targerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targerRef,
    offset: ["end end", "start end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [1, 1, 1, 1]);
  return (
    <div ref={targerRef}>
      <motion.div style={{ opacity }}>{children}</motion.div>
    </div>
  );
}

export default Appear;
