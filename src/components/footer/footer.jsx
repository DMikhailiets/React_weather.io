import React, {Component} from 'react' 
import { Layout } from 'antd';
import "antd/dist/antd.css";

const { Footer } = Layout;

class MyFooter extends Component {
    render () {
        return (
                <div>
                  <Layout>
                  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                  </Layout>
                </div>
        )
    }
}

export default MyFooter;
