import React from 'react';

import './styles/index.less';

const FooterApp: React.FC = () => {
    return (
        <div className={'footer-app'}>
            <span className={'footer-app-license'}>Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB</span>
            <span>
                <a href={"#"} className={'footer-app-rules'}>Điều khoản dịch vụ</a>
                <a href={"#"} className={'footer-app-bank'}>Ngân hàng điện tử</a>
            </span>
        </div>
    )
}

export default FooterApp;