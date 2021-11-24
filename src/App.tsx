
import './App.css';
import { Logado } from './Pages/Logado';
import { Login } from './Pages/Login';
import { GlobalStyle } from "./Styles/global";

export function App() {
  return (
    <>
      {/* <Login/> */}
      <Logado/>
      <GlobalStyle/>
    </>
  );
}

