import React from 'react';
import { Col, Row } from 'antd';

// Components
import Document1 from './styles/images/document1.png';
import Document2 from './styles/images/document2.png';
import Group from './styles/images/Group.png';

import './styles/index.less';

const Choose: React.FC = () => {
    return (
        <div className={'choose'}>
            <div className={'choose-background'} />
            <div className={'choose-content'}>
                <div className={'choose-body'}>
                    <div className={'choose-item1'}>
                        <h4>Vì sao nên chọn chúng tôi</h4>
                    </div>
                    <Row style={{flex: 1}}>
                        <Col span={8} className={'choose-item2'}>
                            <img src={Document1} width={40} height={40} />
                            <h3>
                                100% online
                            </h3>
                            <span>Đăng ký và nộp hồ sơ trực tuyến</span>
                        </Col>
                        <Col span={8} className={'choose-item2'}>
                            <img src={Document2} width={40} height={40} />
                            <h3>
                                Phê duyệt siêu tốc
                            </h3>
                            <span>Duyệt hồ sơ nhanh trong 5 phút</span>
                        </Col>
                        <Col span={8} className={'choose-item2'}>
                            <img src={Group} width={40} height={40} />
                            <h3>
                                Sử dụng linh hoạt
                            </h3>
                            <span>Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Choose);