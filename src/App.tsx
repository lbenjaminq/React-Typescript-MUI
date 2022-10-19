import "./App.css";
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./Router";
import { NotificationProvider } from "./context/NotificationProvider";

function App() {


  return (
      <NotificationProvider>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </NotificationProvider>
  );
}

export default App;
