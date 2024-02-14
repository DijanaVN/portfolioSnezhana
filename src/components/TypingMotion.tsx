import React from "react";
import { motion } from "framer-motion";

interface PropTyping {
  text: string;
}

export const TypingAnimation = ({ text }: PropTyping) => {
  const word = text.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.01 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {word.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "1px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
