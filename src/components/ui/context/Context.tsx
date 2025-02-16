import { createContext, Dispatch, SetStateAction } from "react";

interface ContextType {
  gen: boolean;
  setGen: Dispatch<SetStateAction<boolean>>;
  keyVault: string | null;
  setKeyVault: Dispatch<SetStateAction<string | null>>;
  wordCheck: boolean;
  setWordCheck: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<ContextType | undefined>(undefined);
