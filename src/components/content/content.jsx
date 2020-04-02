import React, {Component} from 'react' 
import { Layout } from 'antd';
import "antd/dist/antd.css";
import style from './content.module.css'

const { Content } = Layout;

class MyContent extends Component {
  constructor() {
    super()
        this.state = {
          isLoggedIn: false
        }
    
  }  
  render () {
        return (
                <div>
                  <Layout>
                    <Content className={style.content}>
                      <div className="site-layout-content">
                       {
                         this.state.isLoggedIn 
                         ? <div>
                            <h1>You are currently logged in</h1>
                           </div>
                         : <div>
                            <h1>You are currently logged out</h1>
                           </div>
                       } 
                      </div>
                    </Content>
                  </Layout>
                </div>
        )
    }
}

export default MyContent;
