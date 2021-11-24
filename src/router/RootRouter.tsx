import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { VisualizePage, ChallengePage, ConnectionPage } from "../pages";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<VisualizePage />} />
          <Route path="/" element={<ChallengePage />} />
          <Route path="/" element={<ConnectionPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
