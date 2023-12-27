import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

// import * as Toast from "@radix-ui/react-toast";

function App() {
  console.log(window);

  window.console.log("Hello 1");

  console.log("Hello 2");

  return (
    <div
      className="App"
      style={{ height: "100%", width: "100%", fontFamily: "roboto" }}
    >
      {/* <Toast.Provider swipeDirection="right"> */}
      <Navbar />
      <Outlet />
      {/* <Toast.Viewport className="ToastViewport" />
      </Toast.Provider> */}
    </div>
  );
}

export default App;
