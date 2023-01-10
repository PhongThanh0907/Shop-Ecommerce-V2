import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";

import routes from "./routes/routes";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            {routes.map((route, index) =>
              route.index ? (
                <Route index key={index} element={route.element} />
              ) : (
                <Route path={route.path} key={index} element={route.element} />
              )
            )}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
