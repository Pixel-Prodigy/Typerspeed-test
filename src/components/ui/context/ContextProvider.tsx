import { ReactNode, useState } from "react";
import { Context } from "./Context";

export function ContextProvider({ children }: { children: ReactNode }) {
  const [gen, setGen] = useState<boolean>(false);
  const [keyVault, setKeyVault] = useState<string | null>(null);
  const [wordCheck, setWordCheck] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{ gen, setGen, keyVault, setKeyVault, wordCheck, setWordCheck }}
    >
      {children}
    </Context.Provider>
  );
}
