import React from 'react';
import './App.css';
import { Layout } from 'antd';
import MyHeader from './components/header/header';
import MyFooter from './components/footer/footer';
import MyContent from './components/content/content';
import { connect } from 'react-redux';
import { getWeather } from './redux/weatherReducer';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Layout>
          <MyHeader/>
          <MyContent weather={this.props.weather} getWeather={this.props.getWeather}/>
          <MyFooter/>
        </Layout>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  weather: state.weather.weather
})

export default connect(mapStateToProps, {getWeather})(App);
