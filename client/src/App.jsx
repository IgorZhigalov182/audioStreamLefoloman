import '../src/styles/reset.css';
import '../src/styles/App.scss';
import Main from './pages/main/Main';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from './routes';
import withRouter from './hoc/withRouter';
import { getIsLoggedIn } from './store/users.slice';

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const elements = useRoutes(routes(isLoggedIn));

  return <div className="container">{elements}</div>;
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
