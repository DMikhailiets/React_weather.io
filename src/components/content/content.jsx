import React, {Component} from 'react' 
import { Layout } from 'antd';
import "antd/dist/antd.css";
import style from './content.module.css'
import WeatherInfo from './weather_info/weather_info';
import ChooseLocationFormRedux from './choose_location/choose_location';


const { Content } = Layout;

class MyContent extends Component {
 
  showLocation = (value) => {
    this.props.setLocation()
  }
  componentDidMount() {
    // this.props.getWeather()
  }
  render () {
    console.log(this.props)
        return (
                <div>
                  <Layout>
                    <Content className={style.content}>
                      <div className="site-layout-content">
                       <div>
                         {(!this.props.weather)
                          ? <ChooseLocationFormRedux onSubmit={this.showLocation}/>
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
