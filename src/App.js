import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
