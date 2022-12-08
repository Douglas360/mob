import { AppRouter } from './routes';
import { ToastContainer } from 'react-toastify';
import { BotaoFlutuante } from './components/LayoutComponents/BotaoFlutuante';

import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>

      <ToastContainer autoClose={3000} />
      <AppRouter />
      <BotaoFlutuante/>
    </>
  );
};
