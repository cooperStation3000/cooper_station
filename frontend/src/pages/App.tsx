import { Layout, Menu } from 'antd';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { PageRoute, routeTreeToMenu } from '../router';
import mainStyle from '../style/main.module.less';
import { useHistory } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const menuSelect = (clickInfo: any) => {
    history.push(clickInfo.key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className={mainStyle.logo}>
          <img src={logo} alt="logo"/>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['/app/DashBord']}
          mode="inline"
          items={routeTreeToMenu()}
          onClick={menuSelect}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background"/>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <PageRoute/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Cooper Station ©2022 Created by wyswill</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
