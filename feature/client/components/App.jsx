import React from 'react';
import Header from './Header.jsx';
import LabelList from './LabelList.jsx';
import AddNewLabel from './AddNewLabel.jsx';
// import '../assets/stylesheets/style.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br></br>
        {/* <AddNewLabel /> */}
        <br></br>
        <LabelList />
      </>
    );
  }
}
export default App;
