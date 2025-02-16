import { useEffect, useState, useContext } from "react";
import { Context } from "./context/Context";
import { generate } from "random-words";

export function TextShow() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("Context undefined in TextShow");

  const { gen, keyVault, setKeyVault, setWordCheck, setGen } = ctx;
  const [words, setWords] = useState<string[]>([]);
  const [WordIndex, setWordIndex] = useState<number>(0);
  const [LetterIndex, setLetterIndex] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [timeTaken, setTimeTaken] = useState<number>(0);

  useEffect(() => {
    if (gen) {
      setWords(
        generate({ exactly: 23, minLength: 5, maxLength: 5 }) as string[]
      );
      setWordIndex(0);
      setLetterIndex(0);
      setWordCheck(false);
      setWrongCount(0);
      setTimerStarted(false);
      setTimeTaken(0);
    } else {
      setWords([]);
    }
  }, [gen]);

  useEffect(() => {
    if (!gen || words.length === 0) return;

    if (!timerStarted && keyVault && WordIndex < 23) {
      setTimerStarted(true);
    }

    if (WordIndex < 23) {
      const word: string = words[WordIndex];
      const expectedLetter: string = word[LetterIndex];

      if (keyVault === expectedLetter) {
        setLetterIndex((prev) => prev + 1);
        setKeyVault("");

        if (LetterIndex + 1 >= word.length) {
          setWordCheck(true);
          setWordIndex((prev) => prev + 1);
          setLetterIndex(0);
        }
      } else if (keyVault !== expectedLetter && keyVault) {
        setWrongCount((prev) => prev + 1);
      }
    }
  }, [keyVault, WordIndex, LetterIndex, gen]);

  useEffect(() => {
    if (gen && timerStarted) {
      const interval = setInterval(() => {
        setTimeTaken((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerStarted, gen]);

  useEffect(() => {
    if (WordIndex >= 23) {
      setGen(false);
      setTimerStarted(false);
    }
  }, [WordIndex]);

  return (
    <>
      {" "}
      <div className="  flex justify-center items-center">
        <div
          className={`transition-all absolute top-88 duration-900 ease-in-out transform py-2 text-center p-4 bg-white/20 
           flex gap-3 flex-wrap text-white/40 text-xl font-bold backdrop-blur-md rounded-lg overflow-hidden
              max-w-[660px] max-h-[124px]
               ${gen ? "opacity-100 scale-100" : "opacity-0 scale-20"}`}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex}>
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={`${
                    wordIndex === WordIndex && letterIndex === LetterIndex
                      ? "text-white border-b-2 scale-120 border-b-white/60 transition-all duration-200"
                      : ""
                  } `}
                >
                  {letter}
                </span>
              ))}{" "}
            </span>
          ))}
        </div>
       
      </div>
      <div
          className={`transition-all absolute mt-7 top-82  duration-1000 ease-in-out transform py-2 text-center p-4 bg-white/20 
           flex  flex-nowrap text-white/80 text-xl font-bold backdrop-blur-md rounded-lg overflow-hidden
              max-w-[660px] 
               ${gen ? "translate-x-100 rotate-[90deg] gap-11 w-[293px] h-[50px]" : "translate-x-0 gap-3 max-h-[124px] w-fit"}`}
        >
          <p
            className={`whitespace-nowrap ${
              gen ? "pt-1 rotate-[-90deg] flex w-[25px] items-center border-white/50  flex-col" : ""
            }`}
          >
            <span>{gen ? "M" : "mistakes:"}</span> <span></span>{" "}
            <span>{wrongCount}</span>
          </p>
          <p
            className={`whitespace-nowrap ${
              gen ? "pt-1 rotate-[-90deg] flex border-t-3 w-[25px] items-center border-white/50 flex-col" : ""
            }`}
          >
            <span>{gen ? "W" : "WPM:"}</span> <span></span>{" "}
            <span>{timeTaken ? Math.floor((23 * 60) / timeTaken) : 0}</span>
          </p>
          <p
            className={`whitespace-nowrap ${
              gen ? "pt-1 rotate-[-90deg] flex border-t-3 w-[25px] items-center border-white/50 flex-col" : ""
            }`}
          >
            <span>{gen ? "T" : "Time-Taken:"}</span> <span></span> <span>{gen ? timeTaken : timeTaken +'s'}</span>
          </p>
          <p
            className={`whitespace-nowrap ${
              gen ? "pt-1 rotate-[-90deg] flex border-t-3 w-[25px] items-center border-white/50 flex-col" : ""
            }`}
          >
            <span>{gen ? "A" : "Accuracy:"}</span> <span></span>{" "}
            <span>{gen ?  Math.floor(((15.5 - (wrongCount/10)) / 15.5) * 10) : (((155 - wrongCount) / 155) * 100).toFixed(2) + '%'}</span>
          </p>
        </div>
    </>
  );
}
