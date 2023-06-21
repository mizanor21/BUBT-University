import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./App.css";

function App() {
  return (
    <div className="bg max-w-[2000px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
