import AppRouter from "./router/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './components/Header/ResponsiveAppBar'
import routes from "./router/routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar pages={routes.filter(route => !route.isProtected).map(route => route.name)} />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
