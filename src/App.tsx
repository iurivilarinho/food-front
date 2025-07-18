import { AppProvider } from "./app/providers";
import { AppRouter } from "./app/routing";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
