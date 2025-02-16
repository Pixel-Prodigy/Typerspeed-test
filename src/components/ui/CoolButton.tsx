import { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import { KeyListener } from "./KeyListener";

export function CoolButton() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("CoolButton giving context error");
  const { gen, setGen } = ctx;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        event.preventDefault();
      } else if (event.key === "Enter") {
        setGen((prevGen) => !prevGen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setGen]);

  return (
    <div className="relative">
      <p className="absolute text-white bottom-1 right-40 whitespace-nowrap">
        Press Enter to..
      </p>
      <button
        onClick={() => setGen((prevGen) => !prevGen)}
        className={`relative cursor-pointer font-bold text-white w-36 h-10 group rounded-md transition-all duration-300 overflow-hidden 
          ${gen ? "bg-purple-800" : "bg-[#a326c0dc]"}`}
      >
        <p
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 
          ${gen ? "opacity-0" : "opacity-100"}`}
        >
          {gen ? "" : "Start Typing.."}
        </p>
        <span className="absolute top-0 left-0 bg-[#ffffffdc] w-0 group-hover:w-36 h-[2px] z-10 transition-all duration-900"></span>
        <span className="absolute bottom-0 right-0 bg-[#ffffffdc] w-0 group-hover:w-36 h-[2px] z-10 transition-all duration-900"></span>
        <span className="absolute bottom-0 left-0 bg-[#ffffffdc] w-[2px] h-0 group-hover:h-10 z-10 transition-all duration-900"></span>
        <span className="absolute top-0 right-0 bg-[#ffffffdc] w-[2px] h-0 group-hover:h-10 z-10 transition-all duration-900"></span>
        <div
          className={`absolute inset-0 transition-transform duration-1000 rounded-full 
          ${gen ? "scale-150 bg-[#a326c0dc]" : "scale-0 bg-purple-800"}`}
        ></div>

        <span
          className={`absolute top-1/2 right-[42%] -translate-1/2 text-[#ffffffdc] transition-all duration-900 
          ${gen ? "scale-100" : "scale-0"}`}
        >
          Stop
        </span>
        <span
          className={`absolute left-[66%] -translate-1/2 top-1/2 text-[#ffffffdc] transition-all duration-900 
          ${gen ? "scale-100" : "scale-0"}`}
        >
          Typing
        </span>
      </button>
      {gen && <KeyListener />}
    </div>
  );
}
