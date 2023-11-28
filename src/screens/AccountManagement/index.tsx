import React from 'react';
import {Breadcrumb, Layout, Card, Row, Col} from 'antd';

// Components
import MenuAccount from '../../components/MenuAccount';

// Styles
import './styles/index.less';
import IconBase from "../../base/Components/IconBase";

const {  Content, Sider } = Layout;

function AccountManagement() {
    return (
        <Layout className={'management'}>
            <Layout className={'management-container'}>
                <Breadcrumb className={'management-breadcrumb'} separator={<IconBase name={'right'} />}>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Quản lý tài khoản</Breadcrumb.Item>
                </Breadcrumb>
                <Layout>
                    <Sider width={333} className={'management-slider'}>
                        <MenuAccount />
                    </Sider>
                    <Content style={{ width: '100%', paddingLeft: 24 }}>
                        <Card className={'management-info'} title="Thông tin chung" bordered={false}>
                            <Row style={{paddingBottom: 16}}>
                                <Col span={5}>
                                    <div className={'management-info-title'}>Họ và tên</div>
                                </Col>
                                <Col span={19}>
                                    <div className={'management-info-name'}>Trần Văn A</div>
                                </Col>
                            </Row>
                            <Row style={{paddingBottom: 16}}>
                                <Col className="gutter-row" span={5}>
                                    <div className={'management-info-title'}>Số CMND/CCCD</div>
                                </Col>
                                <Col className="gutter-row" span={19}>
                                    <div className={'management-info-name'}>022090001234</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="gutter-row" span={5}>
                                    <div className={'management-info-title'}>Số điện thoại</div>
                                </Col>
                                <Col className="gutter-row" span={19}>
                                    <div className={'management-info-name'}>0912763488</div>
                                </Col>
                            </Row>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default AccountManagement;
