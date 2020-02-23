import React from 'react';
import Header from './Header.jsx';
import LabelList from './LabelList.jsx';
import '../../public/stylesheets/style.css';

import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br></br>
        <Route path='/' component={LabelList} />
      </>
    );
  }
}
export default App;
