import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/en" replace />, // Redirect to /en by default
  },
  {
    path: '/:language',
    element: <App />
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <div>404 - Page not found</div>
      </Suspense>
    )
  },
]);

export default router;
