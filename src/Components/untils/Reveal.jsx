import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal({ children }) {
  const revealVarients = {
    hidden: {
      opacity: 0,
      y: 55,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
      },
    },
  };
  const visibleAnimation = useAnimation();
  const slideAnimation = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      visibleAnimation.start("visible");
      slideAnimation.start("visible");
    }
  }, [isInView, visibleAnimation, slideAnimation]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "fitContent", overflow: "hidden" }}
    >
      <motion.div
        variants={revealVarients}
        initial="hidden"
        animate={visibleAnimation}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "100%",
          },
        }}
        initial="hidden"
        animate={slideAnimation}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#16ce72",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}

export default Reveal;
