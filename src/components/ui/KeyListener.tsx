import { useEffect, useContext } from "react";
import { Context } from "./context/Context";

export function KeyListener() {
  const ctx = useContext(Context);

  if (!ctx) {
    throw new Error("KeyListener must be used within a ContextProvider");
  }

  const { setKeyVault, keyVault } = ctx; 

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event.key)
      setKeyVault(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyVault]);

  return null; 
};
