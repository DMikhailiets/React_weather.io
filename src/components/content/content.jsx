import React, {Component} from 'react' 
import { Layout } from 'antd';
import "antd/dist/antd.css";
import style from './content.module.css'

const { Content } = Layout;

class MyContent extends Component {
  componentDidMount() {
    this.props.getWeather()
    console.log(this.props)
  }
  render () {
        return (
                <div>
                  <Layout>
                    <Content className={style.content}>
                      <div className="site-layout-content">
                       {
                         console.log(this.props)
                       }
                      </div>
                    </Content>
                  </Layout>
                </div>
        )
    }
}



export default MyContent;
