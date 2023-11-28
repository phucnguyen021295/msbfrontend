import React from 'react';
import {Card} from 'antd';

// Styles
import './styles/index.less';

function AccountManagement() {
    return (
        <Card className={'product-info'} title="Thông tin sản phẩm" bordered={false}>
            <div className={'product-info-body'} />
        </Card>
    );
}

export default AccountManagement;
