import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import DashBord from './pages/dashBord';
import project from './pages/project';
import { T_Route } from './types';

const config: T_Route[] = [
  {
    path: '/DashBord',
    name: '首页',
    component: DashBord
  },
  {
    path: '/project',
    name: '项目',
    component: project
  }
];

export default function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/DashBord" push/>}/>
        <Route path="/app" component={App}/>
        {/* <Route path="/404" component={NotFound} />
         <Route path="/login" component={Login} />
         <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export function PageRoute() {
  return (
    <Switch>
      {config.map(r => (
        // @ts-ignore
        <Route key={r.path} exact path={'/app' + r.path} component={r.component}/>
      ))}
    </Switch>
  );
}

export function routeTreeToMenu() {
  return config.map(conf => ({
    key: '/app' + conf.path,
    icon: conf.icon,
    // children: ,
    label: conf.name
  }));
}
