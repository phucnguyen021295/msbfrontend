import React, {lazy} from 'react';
import {Layout, Affix, Spin, ConfigProvider} from 'antd';

import HeaderApp from './layout/Header';
import ContentApp from './layout/Content';
import FooterApp from './layout/Footer';
import themeConfig from "./base/Color/theme";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
    height: 72,
    backgroundColor: '#fff',
    padding: '8px 40px'
};

const contentStyle: React.CSSProperties = {
    minHeight: 'calc(100vh - 128px)',
};

const footerStyle: React.CSSProperties = {
    height: 56,
    display: "flex",
    justifyContent: 'center',
    padding: '12px 40px'
};

// Chia layout cho web làm 3 phần Header, Content, Footer với Header và Footer gần như không thay đổi, chỉ thay đổi phần Content
const App = () => (
    <ConfigProvider theme={themeConfig}>
        <Layout>
            {/* Fix Header luôn nằm trên top */}
            <Affix offsetTop={0}>
                <Header style={headerStyle}><HeaderApp /></Header>
            </Affix>
            <Content style={contentStyle}>
                <ContentApp />
            </Content>
            <Footer style={footerStyle}><FooterApp /></Footer>
        </Layout>
    </ConfigProvider>
);

export default App;