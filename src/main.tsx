import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskDetailPage from './pages/TaskDetail.page.tsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/task-detail",
    element: <TaskDetailPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
