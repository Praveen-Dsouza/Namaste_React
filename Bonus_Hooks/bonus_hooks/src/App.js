import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Demo from "./components/Demo";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Demo/>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
