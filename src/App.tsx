import "./App.css";
import { FrontPage } from "./components/layout/FrontPage";
import { LandingPage } from "./components/layout/LandingPage";
import { ContextProvider } from "./components/ui/context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="mx-auto  flex">
        <LandingPage />
        <FrontPage />
      </div>
    </ContextProvider>
  );
}

export default App;
