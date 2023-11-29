import React from 'react';
import { Button, Result } from 'antd';
import {useNavigate} from "react-router-dom";

function NoMatch() {
    const navigate = useNavigate();
    return (
        <Result
            status="404"
            title="SOS"
            subTitle="Xin lỗi, không tồn tại đường dẫn trên"
            extra={<Button type="primary" onClick={() => navigate('/')}>Trang chủ</Button>}
        />
    );
}

export default NoMatch;
