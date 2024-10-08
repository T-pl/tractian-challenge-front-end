import "./App.css";
import ContainerAssetsProps from "./components/ContainerAssetsProps/ContainerAssetsProps";
import ContainerTreeView from "./components/ContainerTreeView/ContainerTreeView";
import { Header } from "./components/Header/Header";
import StatusComponent from "./components/StatusComponent/StatusComponent";
import { CompanyContextProvider } from "./services/contexts/GlobalContext";

function App() {
  return (
    <CompanyContextProvider>
      <Header />
      <main className="bg-container absolute h-screen w-full ">
        <div className="bg-[#fff] relative z-[10000] w-[99%] p-4 top-2 left-2 bottom-2">
          <StatusComponent />
          <div className="flex justify-between mt-3 gap-2">
            <ContainerTreeView />
            <ContainerAssetsProps />
          </div>
        </div>
      </main>
    </CompanyContextProvider>
  );
}

export default App;
