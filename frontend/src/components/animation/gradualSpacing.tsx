"use client";

import { useRef, useState, useEffect } from "react";
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
  duration = 0.25,
  delayMultiple = 0.15,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div className={className} ref={ref}>
      <AnimatePresence>
        {hasAnimated && text.split(" ").map((word, i) => (
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
