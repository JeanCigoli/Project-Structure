import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <Suspense fallback={}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Router;