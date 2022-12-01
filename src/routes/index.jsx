import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { AuthProvider, AuthContext } from '../contexts/auth';
import { Dashboard } from '../pages/Dashboard';
import SignIn from '../pages/Login';
import SignUp from '../pages/Login/register';
import { UserProfile } from '../pages/Profile/UserProfile';
import { UserSubscription } from '../pages/Profile/UserSubscription';
// import ForgotPassword from '../pages/Login/forgotPassword';

export const AppRouter = () => {
  const Private = ({ children }) => {
    const { autenticado } = useContext(AuthContext);
    /*    if (carregando) {
                return (
    
                    <div className="carregando" align="center">
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
    
                    </div>)
            }*/

    if (!autenticado) {
      return <Navigate to="/" />;
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
              <Autenticado>
                <SignIn />
              </Autenticado>
            }
          />
          <Route
            path="/register"
            element={
              <Autenticado>
                <SignUp />
              </Autenticado>
            }
          />
          {/* <Route
            path="/forgot"
            element={
              <Autenticado>
                <ForgotPassword />
              </Autenticado>
            }
          /> */}
          <Route
            path="/dashboard"
            element={
              <Private>
                <Dashboard />
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
        </Routes>
      </AuthProvider>
    </Router>
  );
};
