import { AppRouter } from "./routes";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const App = () =>{
  return (
    <>
      <ToastContainer autoClose={3000} />
      <AppRouter />
    </>
  );
}

