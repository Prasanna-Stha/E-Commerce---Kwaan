import { ContextProvider } from "./context/Context";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
    </>
  );
}

export default App
