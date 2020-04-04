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
                          : <h2>Your location is {this.props.weather.city_name}</h2>
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
