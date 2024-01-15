
import './App.css';

import React, { Component } from 'react';
import Navbars from './components/Navbars';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pageSize = 15;

  render() {
    return (
      <>
        <Router>
          <Navbars />
          <Routes>
            <Route path="/general" element={<News pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/health" element={<News pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </>
    );
  }
}