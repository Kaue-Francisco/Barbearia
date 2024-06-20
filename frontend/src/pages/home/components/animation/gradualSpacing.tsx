"use client";

import { useRef } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import useIsVisible from './hooks/isVisible';

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.7,
  delayMultiple = 0.8,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div className={className} ref={ref}>
      <AnimatePresence>
        {isVisible && text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
