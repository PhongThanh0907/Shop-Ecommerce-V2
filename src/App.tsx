import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routes from "./routes/routes";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            {routes.map((route, index) =>
              route.index ? (
                <Route index key={index} element={route.element} />
              ) : (
                <Route index key={index} element={route.element} />
              )
            )}
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
