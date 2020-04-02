import React from 'react';
import './App.css';
import { Layout } from 'antd';
import MyHeader from './components/header/header';
import MyFooter from './components/footer/footer';
import MyContent from './components/content/content';

function App() {
  return (
    <div className="App">
      <Layout>
        <MyHeader/>
        <MyContent/>
        <MyFooter/>
      </Layout>
    </div>
  );
}

export default App;
