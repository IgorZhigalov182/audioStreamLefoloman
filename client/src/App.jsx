import '../src/styles/reset.css';
import '../src/styles/App.css';
import Main from './pages/main/Main';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import withRouter from './hoc/withRouter';

function App() {
  const elements = useRoutes(routes());

  return <div className="container">{elements}</div>;
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
