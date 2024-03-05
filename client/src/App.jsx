import { useRoutes } from "react-router-dom";
import MainContainer from "./components/layout/MainContainer";
import Home from "./pages/Home";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import SavedBuilt from "./pages/SavedBuilt";
import ErrorPage from "./pages/utils/ErrorPage";
import CoursesTaken from "./pages/CoursesTaken";
import { Toaster } from "react-hot-toast";
import Chat from "./pages/Chat";




function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/user", element: <User /> },
    { path: "/saved", element: <SavedBuilt /> },
    { path: "/courses-taken", element: <CoursesTaken /> },
    { path: "/chat", element: <Chat /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <div className="flex flex-col h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <MainContainer>{routes}</MainContainer>
    </div>
  );
}

export default App;
