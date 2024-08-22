import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/app-layout';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';
import JobListing from './pages/JobListing';
import JobPage from './pages/Jobs';
import PostJobs from './pages/PostJobs';
import SavedJobs from './pages/SavedJobs';
import MyJobs from './pages/MyJobs';
import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <OnBoarding />
      },
      {
        path: '/jobs',
        element: <JobListing />
      },
      {
        path: '/job/:id',
        element: <JobPage />
      },
      {
        path: '/post-job',
        element: <PostJobs />
      },
      {
        path: '/saved-job',
        element: <SavedJobs />
      },
      {
        path: '/my-jobs',
        element: <MyJobs />
      },
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App
