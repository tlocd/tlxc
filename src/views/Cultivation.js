import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import Menu from "../component/Menu";



const { Header, Sider, Content } = Layout;




const Cultivation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Menu>

      </Menu>
    </Layout>
  );
};

export default Cultivation;
