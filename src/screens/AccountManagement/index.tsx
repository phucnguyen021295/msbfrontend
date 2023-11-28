import React, {Suspense} from 'react';
import {Breadcrumb, Layout} from 'antd';
import { useLocation } from 'react-router-dom';

// Components
import MenuAccount from '../../components/MenuAccount';
import AccountInformation from '../../components/AccountInformation';
import ProductInformation from '../../components/ProductInformation';

// Styles
import './styles/index.less';
import IconBase from "../../base/Components/IconBase";
import {Route, Routes} from "react-router-dom";

const {  Content, Sider } = Layout;

function AccountManagement() {
    let location = useLocation();

    return (
        <Layout className={'management'}>
            <Layout className={'management-container'}>
                <Breadcrumb className={'management-breadcrumb'} separator={<IconBase name={'right'} />}>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>{location.pathname.includes('/management/productInfo') ? 'Quản lý sản phẩm' : 'Quản lý tài khoản'}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout>
                    <Sider width={333} className={'management-slider'}>
                        <MenuAccount />
                    </Sider>
                    <Content style={{ width: '100%', paddingLeft: 24 }}>
                        <Suspense fallback={null}>
                            <Routes>
                                <Route path="/" element={<AccountInformation />} />
                                <Route path="productInfo" element={<ProductInformation />} />
                            </Routes>
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default AccountManagement;
