import React, { Suspense } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Redirect, Route } from 'react-router-dom';
import { routes } from './routes';

export default class App extends React.Component {
  private allRoutes = routes.map((route, index) => <Route key={index} exact path={route.path} component={route.component}></Route> );
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Route exact path="/">
            <Redirect to={routes[0].path}></Redirect>
          </Route>
          <Suspense fallback={<div>Loading...</div>}>
            {this.allRoutes}
          </Suspense>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}