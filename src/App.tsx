import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App" style={{ height: "100%", width: "100%" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
