import React, {Component} from 'react' 
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class MyHeader extends Component {
    render () {
        return (
                <div>
                  <Layout>
                    <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Header</Menu.Item> 
                  </Menu>
                    </Header>
                  </Layout>
                </div>
        )
    }
}

export default MyHeader;
