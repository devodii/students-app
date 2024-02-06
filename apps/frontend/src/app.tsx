import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/index"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
