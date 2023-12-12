import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Memo from "./components/Memo";
import Ref from "./components/Ref";
import Home from "./components/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/demo',
    element: (
      <>
        <Memo />
        <Ref />
      </>
    ),
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
