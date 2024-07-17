"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export default function NewTaskDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setOpenDrawer(!openDrawer)}>
        <BsPlus className="text-4xl" />
      </button>
      <AnimatePresence mode="popLayout">
        {openDrawer && (
          <motion.div
            className=""
            initial={{
              opacity: 0,
              y: -24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -24,
            }}
          >
            FORM HERE
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
