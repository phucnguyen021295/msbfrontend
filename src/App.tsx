import React from 'react';
import {Layout, Affix, ConfigProvider} from 'antd';

// Components
import HeaderApp from './layout/Header';
import ContentApp from './layout/Content';
import FooterApp from './layout/Footer';

// Config Themes
import themeConfig from "./base/Color/theme";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
    height: 72,
    backgroundColor: '#fff',
    display: "flex",
    justifyContent: "center"
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

// Todo Chia layout cho web làm 3 phần Header, Content, Footer với Header và Footer gần như không thay đổi, chỉ thay đổi phần Content
const App = () => (
    <ConfigProvider theme={themeConfig}>
        <Layout>
            {/* Todo: Fix Header luôn nằm trên top */}
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