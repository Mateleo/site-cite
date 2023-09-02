import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Quests from "./pages/Quests/Quests";
import App from "./App";
import Ranking from "./pages/Ranking/Ranking";

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <h1>Error - Please report to Admins</h1>,
    children: [
      { path: "*", element: <Navigate to="/" /> },
      { path: "/", element: <Home /> },
      { path: "/map", element: <Map /> },
      { path: "/quests", element: <Quests /> },
      { path: "/ranking", element: <Ranking /> },
    ],
  },
]);
