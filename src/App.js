import React, { Component } from 'react';
import './App.css';
import { Row } from 'reactstrap';
import Sidebar from './containers/Sidebar';
import ChatBox from './containers/ChatBox'


class App extends Component {
  render() {
    return (
      <>
        <Row>
          <Sidebar />
          <ChatBox />
        </Row>
      </>
    );
  }
}

export default App;
