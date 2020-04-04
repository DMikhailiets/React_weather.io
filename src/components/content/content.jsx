import React, {Component} from 'react' 
import { Layout } from 'antd';
import "antd/dist/antd.css";
import style from './content.module.css'

const { Content } = Layout;

class MyContent extends Component {
  componentDidMount() {
    this.props.getWeather()
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
                          ? <h2>Wait...</h2>
                          : <div>
                              <h2>Your location is {this.props.weather.city_name}</h2>
                            <div>
                              <span>timezone {this.props.weather.timezone}</span>
                            </div>
                            <div>
                              <span> date, time {this.props.weather.ob_time}</span>
                            </div>
                            <div>
                              <span> wind speed {this.props.weather.wind_spd} m.p.s.</span>
                              <span> on {this.props.weather.wind_cdir_full}</span>
                            </div>
                            <div>
                              <span> direction {this.props.weather.wind_cdir_full}</span>
                            </div>
                            <div>
                              <span> sunset {this.props.weather.sunset}</span>
                              <span> sunrise {this.props.weather.sunrise}</span>
                            </div>
                            <div>
                              <span> temperature {this.props.weather.temp}</span>
                            </div>
                            <div>
                              <span> station {this.props.weather.station}</span>
                            </div>
                            </div>
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
