
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { AuthProvider } from '../contexts/auth';
//import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { Betfair } from '../pages/Dashboard/Betfair';
import { Betano } from '../pages/Dashboard/Betano';
import SignIn from '../pages/Login';
import SignUp from '../pages/Register';
import { UserProfile } from '../pages/Profile/UserProfile';
import { UserSubscription } from '../pages/Profile/UserSubscription';
import ForgotPassword from '../pages/Login/forgotPassword';
import { UserConfirmation } from '../pages/Profile/UserConfirmation';
import { SuccessPage } from '../pages/Register/success';
import { useAuth } from '../contexts/useAuth';
import { LoadingSpinner } from '../components/LoadingSpinner';


export const AppRouter = () => {
  const Private = ({ children }) => {
    const { autenticado, loading } = useAuth()

    if (loading) {
      return (
        <div className='w-max h-max m-auto mt-64 items-center'>
          <LoadingSpinner />

        </div>
      )
    }

    if (!autenticado) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Autenticado = ({ children }) => {
    const token = localStorage.getItem('token');
    if (token) {
      return <Navigate to="dashboard" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            exact
            element={

              <SignIn />


            }
          />
          {/*<Route
            path="/login"
            exact
            element={
              <Autenticado>
                <SignIn />
              </Autenticado>

            }
          />*/}
          <Route
            path="/register"
            element={
              <Autenticado>
                <SignUp />
              </Autenticado>
            }
          />
          <Route
            path="/forgot"
            element={
              <Autenticado>
                <ForgotPassword />
              </Autenticado>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
          <Route
            path="/betfair"
            element={
              <Private>
                <Betfair />
              </Private>
            }
          />
          <Route
            path="/betano"
            element={
              <Private>
                <Betano />
              </Private>
            }
          />
          <Route
            path="/subscription"
            element={
              <Private>
                <UserSubscription />
              </Private>
            }
          />
          <Route
            path="/profile"
            element={
              <Private>
                <UserProfile />
              </Private>
            }
          />
          <Route
            path="/confirmation/:token"
            element={

              <UserConfirmation />

            }
          />

          <Route
            path="/success/:email"
            element={

              <SuccessPage />

            }
          />

        </Routes>
      </AuthProvider>
    </Router>
  );
};
