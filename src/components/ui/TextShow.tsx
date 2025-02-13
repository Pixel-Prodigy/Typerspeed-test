import { ReactNode, useEffect, useState } from "react";
import { Context } from "./context/Context";
import { useContext } from "react";
import { generate } from "random-words";

export function TextShow() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("Context undefined in TextShow");
  const [words, setWords] = useState<string[]>([]);
const {gen , keyVault } = ctx
console.log(keyVault)

  useEffect(() => {
    if (gen) {
      setWords(
        generate({ exactly: 23, minLength: 5, maxLength: 5 }) as string[]
      );
    } else {
      setWords([]);
    }
  }, [gen]);

  return (
    <div className="absolute top-[40%] left-1/2 -translate-1/2 flex justify-center items-center">
      <div
        className={`transition-all duration-900 ease-in-out transform py-5 px-3 bg-white/20 
        flex gap-3 flex-wrap text-white text-xl font-bold backdrop-blur-md rounded-lg overflow-hidden
        max-w-[600px] max-h-[100px]
        ${gen ? "opacity-100 scale-100 " : "opacity-0 scale-20"}`}
      >
        {words.map(
          (elem: string, index: number): ReactNode => (
            <p className="m-0" key={index}>
              {elem}
            </p>
          )
        )}
      </div>
    </div>
  );
}
