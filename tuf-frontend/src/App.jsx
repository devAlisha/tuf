import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Playground from "./components/playground/Playground.jsx";
import { useDispatch } from "react-redux";
import { fetchBanner } from "./redux/features/banner/thunk.js";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanner());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/playground"
          element={
            <Layout>
              <Playground />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
