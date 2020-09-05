import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Aside from './components/aside/aside.component';
import HomePage from './pages/home-page/home-page.component';
import BookPage from './pages/book-page/book-page.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Aside>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/book' component={BookPage}/>
          </Switch>
        </Aside>
      </>
    );
  }
}

export default App;
