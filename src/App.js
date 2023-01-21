import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./components/Error";
import Exercise from "./pages/Exercise";
import Q1 from "./Exercises/Q1";
import Q2 from "./Exercises/Q2";
import Time from "./Exercises/Time";

const exercises = [
  {
    title: 'Multiply',
    description: 'Javascript program to show multiplication',
    component: <Q1/>
  },
  {
    title: 'Temperature',
    description: 'Convert temperature from celcius to fahrenheit',
    component: <Q2/>
  },
  {
    title: 'Time',
    description: 'JavaScript program to display the current time',
    component: <Time/>
  },
]

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
      },
      {
        path: '/exercise',
        element: <Exercise exe={exercises} />,
      },
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
