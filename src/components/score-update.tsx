import { updateScore } from "@/actions/action";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import positiveMsg from "@/lib/messages";

export default function ScoreUpdate({
  id,
  score,
}: {
  id: string;
  score: number;
}) {
  const [showPositive, setShowPositive] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  const handlePositiveUpdate = () => {
    updateScore(id, score + 1);
    setUpdateMessage(positiveMsg[Math.ceil(Math.random() * positiveMsg.length - 1)])
    setShowPositive(true);
    setTimeout(() => {
      setShowPositive(false);
    }, 2000)
  };

  return (
    <div className="relative flex gap-x-2 text-2xl">
      <AnimatePresence mode="popLayout">
        {showPositive === true && (
          <motion.p
            className="absolute z-50 text-green-600 font-bold text-base w-fit"
            initial={{
              opacity: 0,
              y: 0,
              x: 0,
            }}
            animate={{
              opacity: 1,
              y: -32,
              x: -32
            }}
            exit={{
              opacity: 0,
              y: 0,
              x: 0,
            }}
          >
            {updateMessage}
          </motion.p>
        )}
      </AnimatePresence>
      <button
        onClick={handlePositiveUpdate}
        className="hover:scale-110 transition"
      >
        <BsHandThumbsUp className="text-green-600" />
      </button>
      <p className="absolute -top-8 -right-8 text-red-600">test</p>
      <button
        onClick={() => updateScore(id, score - 1)}
        className="hover:scale-110 transition"
      >
        <BsHandThumbsDown className="text-red-600" />
      </button>
    </div>
  );
}
