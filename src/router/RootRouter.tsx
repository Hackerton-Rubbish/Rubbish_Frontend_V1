import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { VisualizePage, ChallengePage, ConnectionPage, ConnectionWritePage, ConnectionDetailPage } from "../pages";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<VisualizePage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/connection" element={<ConnectionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/connection/write" element={<ConnectionWritePage />} />
          <Route path="/connection/detail" element={< ConnectionDetailPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
