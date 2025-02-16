import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LandingPage() {
  const [show, setShow] = useState<boolean>(true);
  const [bgBlur, setBgBlur] = useState<string>("blur-lg");

  useEffect(() => {
    setBgBlur("blur-none shadow-2xl");
  }, []);
  useEffect(() => {
    const handleKeyDown = () => {
      setShow(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const text = "Press Any Key to Start";

  return (
    <>
      {show && (
        <>
          <div
            className="z-15 backdrop-blur-2xl bg-black/40 fixed w-screen h-screen"
            onClick={() => setShow(false)}
          ></div>
          import {motion} from "framer-motion";
          <div className="z-40 text-white absolute top-[40%] left-1/2 -translate-x-1/2 text-6xl font-bold opacity-50 flex gap-2">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  borderBottomWidth: 10,
                  borderColor: "white",
                }}
                animate={{ opacity: 1, borderBottomWidth: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-white border-b-2 border-white"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div
            onClick={() => setShow(false)}
            style={{
              backgroundImage:
                'url("https://img.freepik.com/premium-photo/close-up-woman-hands-typing-laptop-keyboard-professional-online-gamer-hand-fingers-notebook-keyboard-neon-color-sitting-gaming-desk-woman-chatting-concept-image_157125-14944.jpg")',
            }}
            className={`h-[85vh] ${bgBlur} transition-all duration-700 rounded-md shadow-purple-700 pb-36 flex-col fixed w-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-cover z-20 text-white text-4xl flex items-start justify-end p-3`}
          >
            <motion.h1
              className="text-8xl mb-8 font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Velocity Speed
            </motion.h1>
            <motion.p
              className="font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Text your speed and shape the future
            </motion.p>
          </div>
        </>
      )}
    </>
  );
}
