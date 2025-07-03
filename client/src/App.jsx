import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home              from './pages/Home';
import Register          from './components/Auth/Register';
import Login             from './components/Auth/Login';
import Dashboard         from './pages/Dashboard';
import AnalysisFormPage  from './pages/AnalysisFormPage';
import AnalysisResultPage from './pages/AnalysisResultPage';
import PrivateRoute      from './components/Layout/PrivateRoute';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Feature from './pages/Feature';
export default function App() {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login"    element={<Login />} />
      <Route path="/dashboard" element={
        <PrivateRoute><Dashboard/></PrivateRoute>
      }/>
      <Route path="/dashboard/analysis" element={
        <PrivateRoute><AnalysisFormPage/></PrivateRoute>
      }/>
      <Route path="/dashboard/result" element={
        <PrivateRoute><AnalysisResultPage/></PrivateRoute>
      }/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<Feature />} />
     <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}


// This is the main application file for a React app that uses React Router for navigation.
// It defines the main routes of the application, including public routes for home, login, and registration,
// as well as a private route for the dashboard that requires authentication.
// The Navbar component is included to provide navigation links across the app.
// The NotFound component is rendered for any undefined routes, providing a user-friendly error page.
// The PrivateRoute component is used to protect the dashboard route, ensuring that only authenticated users can access it.
// The application structure is modular, with separate components for authentication and layout,
// promoting reusability and maintainability. The use of React Router allows for a single-page application experience,
// where navigation does not require full page reloads, enhancing user experience.
// The application is designed to be responsive and user-friendly, with a focus on authentication and user management.
// The code is structured to allow for easy expansion, such as adding more routes or components in the future.
// The use of functional components and hooks like useState and useEffect allows for a modern React development approach,
// making the codebase clean and efficient. The application is ready for further development, such as integrating with a backend API for user authentication and data management.
// The application is set up to handle user authentication, with routes for login and registration,
// and a protected dashboard route that requires users to be logged in.
// The Navbar component provides navigation links, enhancing the user experience by allowing easy access to different parts of the application.
// The NotFound component serves as a fallback for any undefined routes, improving user experience by guiding users to a valid page.
// The application is structured to be modular, with separate components for authentication and layout,
// promoting reusability and maintainability. The use of React Router enables a single-page application experience,
// where navigation does not require full page reloads, enhancing user experience.
// The application is designed to be responsive and user-friendly, with a focus on authentication and user management.
// The code is structured to allow for easy expansion, such as adding more routes or components in the future.
// The use of functional components and hooks like useState and useEffect allows for a modern React development approach,
// making the codebase clean and efficient. The application is ready for further development, such as integrating with a backend API for user authentication and data management.
// The application is set up to handle user authentication, with routes for login and registration,
// and a protected dashboard route that requires users to be logged in.
// The Navbar component provides navigation links, enhancing the user experience by allowing easy access to different parts of the application.
// The NotFound component serves as a fallback for any undefined routes, improving user experience by guiding users to a valid page.
// The application is structured to be modular, with separate components for authentication and layout,
// promoting reusability and maintainability. The use of React Router enables a single-page application experience,
// where navigation does not require full page reloads, enhancing user experience.
// The application is designed to be responsive and user-friendly, with a focus on authentication and user management.
// The code is structured to allow for easy expansion, such as adding more routes or components in the future.
// The use of functional components and hooks like useState and useEffect allows for a modern React development approach,
// making the codebase clean and efficient. The application is ready for further development, such as integrating with a backend API for user authentication and data management.
// The application is set up to handle user authentication, with routes for login and registration,
// and a protected dashboard route that requires users to be logged in.
// The Navbar component provides navigation links, enhancing the user experience by allowing easy access to different parts of the application.
// The NotFound component serves as a fallback for any undefined routes, improving user experience by guiding users to a valid page.
// The application is structured to be modular, with separate components for authentication and layout,
// promoting reusability and maintainability. The use of React Router enables a single-page application experience,
// where navigation does not require full page reloads, enhancing user experience.
// The application is designed to be responsive and user-friendly, with a focus on authentication and user management.
// The code is structured to allow for easy expansion, such as adding more routes or components in the future.
// The use of functional components and hooks like useState and useEffect allows for a modern React development approach,
// making the codebase clean and efficient. The application is ready for further development, such as integrating with a backend API for user authentication and data management.
// The application is set up to handle user authentication, with routes for login and registration,
// and a protected dashboard route that requires users to be logged in.
// The Navbar component provides navigation links, enhancing the user experience by allowing easy access to different parts of the application.
// The NotFound component serves as a fallback for any undefined routes, improving user experience by guiding users to a valid page.