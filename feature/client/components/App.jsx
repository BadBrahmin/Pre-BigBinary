import React from 'react';
import Header from './Header.jsx';
import LabelList from './LabelList.jsx';
// import '../assets/stylesheets/style.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br></br>
        <LabelList />
      </>
    );
  }
}
export default App;
