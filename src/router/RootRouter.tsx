import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { VisualizePage, ChallengePage, ConnectionPage } from "../pages";
import LoginPage from "../pages/Login";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<VisualizePage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/connection" element={<ConnectionPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
