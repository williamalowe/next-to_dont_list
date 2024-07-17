"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";
import NewTaskForm from "./new-task-form";

export default function NewTaskDrawer({ frequency }: {
  frequency: string,
}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setOpenDrawer(!openDrawer)}>
        {
          openDrawer ? <BsDash  className="text-4xl opacity-50"/> : <BsPlus  className="text-4xl opacity-50"/>
        }
      </button>
      <AnimatePresence mode="popLayout">
        {openDrawer && (
          <motion.div
            className=""
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
          >
            <NewTaskForm
              frequency={frequency}
              closeDrawer={() => setOpenDrawer(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
