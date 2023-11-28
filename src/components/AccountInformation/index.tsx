import React from 'react';
import {Card, Row, Col} from 'antd';
import {useSelector} from "react-redux";

import {RootState} from "../../store";

// Styles
import './styles/index.less';

function AccountManagement() {
    const user = useSelector((state: RootState) => state.user)
    return (
        <Card className={'management-info'} title="Thông tin chung" bordered={false}>
            <Row style={{paddingBottom: 16}}>
                <Col span={5}>
                    <div className={'management-info-title'}>Họ và tên</div>
                </Col>
                <Col span={19}>
                    <div className={'management-info-name'}>{`${user.firstName} ${user.lastName}`}</div>
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
    );
}

export default AccountManagement;
