import React from 'react';
import { Card, Col, Row, Space } from 'antd';

import './styles/index.less';
import ButtonBase from "../../Base/Components/ButtonBase";

const { Meta } = Card;

const Products: React.FC = () => {
    return (
        <div className={'product'}>
            <h4>Danh sách sản phẩm</h4>
            <div className={'product-container'}>
                <Space direction="vertical" size={40}>
                    <Row gutter={[24, 24]}>
                        <Col span={8}>
                            <Card
                                hoverable
                                className={'product-item'}
                                cover={
                                    <img
                                        alt="example"
                                        height={210}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    className={'product-item-meta'}
                                    title="Thẻ tín dụng"
                                    description="Đa dạng lựa chọn theo phong cách chi tiêu"
                                />
                                <ButtonBase type={'link'} size={'large'}>
                                    Khám phá ngay
                                </ButtonBase>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                className={'product-item'}
                                cover={
                                    <img
                                        alt="example"
                                        height={210}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    className={'product-item-meta'}
                                    title="Thẻ tín dụng"
                                    description="Đa dạng lựa chọn theo phong cách chi tiêu"
                                />
                                <ButtonBase type={'link'} size={'large'}>
                                    Khám phá ngay
                                </ButtonBase>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                className={'product-item'}
                                cover={
                                    <img
                                        alt="example"
                                        height={210}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    className={'product-item-meta'}
                                    title="Thẻ tín dụng"
                                    description="Đa dạng lựa chọn theo phong cách chi tiêu"
                                />
                                <ButtonBase type={'link'} size={'large'}>
                                    Khám phá ngay
                                </ButtonBase>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                        <Col span={8}>
                            <Card
                                className={'product-item'}
                                cover={
                                    <img
                                        alt="example"
                                        height={210}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    className={'product-item-meta'}
                                    title="Thẻ tín dụng"
                                    description="Đa dạng lựa chọn theo phong cách chi tiêu"
                                />
                                <ButtonBase type={'link'} size={'large'}>
                                    Khám phá ngay
                                </ButtonBase>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                className={'product-item'}
                                cover={
                                    <img
                                        alt="example"
                                        height={210}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    className={'product-item-meta'}
                                    title="Thẻ tín dụng"
                                    description="Đa dạng lựa chọn theo phong cách chi tiêu"
                                />
                                <ButtonBase type={'link'} size={'large'}>
                                    Khám phá ngay
                                </ButtonBase>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                className={'product-item'}
                                cover={
                                    <img
                                        alt="example"
                                        height={210}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                            >
                                <Meta
                                    className={'product-item-meta'}
                                    title="Thẻ tín dụng"
                                    description="Đa dạng lựa chọn theo phong cách chi tiêu"
                                />
                                <ButtonBase type={'link'} size={'large'}>
                                    Khám phá ngay
                                </ButtonBase>
                            </Card>
                        </Col>
                    </Row>
                </Space>
            </div>
        </div>
    )
}

export default Products;