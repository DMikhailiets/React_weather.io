import React, {Component} from 'react' 
import { Layout } from 'antd';
import "antd/dist/antd.css";
import style from './content.module.css'
import WeatherInfo from './weather_info/weather_info';
import ChooseLocationFormRedux from './choose_location/choose_location';


const { Content } = Layout;

class MyContent extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
     if(this.props.location !== prevProps.location && this.props.location !== null ){
      this.props.getWeather(this.props.location)
     }
  }

  render () {
        return (
            <div>
              <Layout>
                <Content className={style.content}>
                  <div className="site-layout-content">
                    <div>
                      {(!this.props.location || !this.props.weather)
                      ? <ChooseLocationFormRedux location={this.props.weather} onSubmit={this.props.setLocation}/>
                      : <WeatherInfo {...this.props}/>
                      }
                    </div>
                  </div>
                </Content>
              </Layout>
            </div>
        )
    }
}



export default MyContent;
