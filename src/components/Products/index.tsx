import React, {useEffect, useState} from 'react';
import { Card, Col, Row, Space, Button, Skeleton, Result } from 'antd';
import {useDispatch, useSelector} from "react-redux";

// Components
import IconBase from "../../base/Components/IconBase";

// Apis
import {getListProductApi} from "../../apis";

// Actions
import {update} from '../../reducers/product';

import './styles/index.less';
import {RootState} from "../../store";


const { Meta } = Card;

const Product: React.FC = () => {
    const dispatch = useDispatch()
    const product = useSelector((state: RootState) => state.product);
    const [request, setRequest] = useState(product && product.length > 0 ? 'success' : 'loading');

    const onGetListSuccess = (data) => {
        if(Array.isArray(data)) {
            dispatch(update(data));
            setRequest("success");
        } else {
            onGetListFailure();
        }
    }

    const onGetListFailure = () => {
        setRequest("failure");
    }

    const getListProduct = () => {
        getListProductApi(onGetListSuccess, onGetListFailure)
    }

    // Lầy dữ liệu lần đầu và update vào reducer
    useEffect(() => {
        getListProduct();
    }, [])

    const onRetry = () => {
        setRequest("loading");
        getListProduct()
    }

    // Trạng thái get dữ liệu
    if(request === 'loading') {
        return [1, 2, 3, 4, 5, 6].map((item) => {
            return (
                <Col span={8}>
                    <Card
                        loading={request === 'loading'}
                        hoverable
                        className={'product-item'}
                        cover={<Skeleton.Image active={true} style={{width: '100%', height: 210}} />}
                    />
                </Col>
            )
        })
    }

    // Trường hợp lấy dữ liệu lỗi
    if(request === 'failure') {
        return (
            <Result
                style={{width: '100%', justifyContent: 'center'}}
                title="Đã có lỗi xảy ra. Vui lòng thử lại"
                extra={
                    <Button type="primary" key="console" onClick={onRetry}>
                        Thử lại
                    </Button>
                }
            />
        )
    }

    // Vẽ ra danh sách sản phẩm vừa gét được từ api
    return  product.map((item) => {
        return (
            <Col span={8}>
                <Card
                    loading={request === 'loading'}
                    hoverable
                    className={'product-item'}
                    cover={
                        request === 'loading' ? <Skeleton.Image active={true} style={{width: '100%', height: 210}} /> : <img alt="example" height={210} src={item.image} />
                    }
                >
                    <Meta
                        className={'product-item-meta'}
                        title={item.name}
                        description={item.summary}
                    />
                    <Button type={'link'} size={'large'} rootClassName={'product-btn-detail'}>
                        Khám phá ngay <IconBase name={'arrow-right'} viewBox={'0 0 20 20'} size={'large'} />
                    </Button>
                </Card>
            </Col>
        )
    })

}


const Products: React.FC = () => {
    return (
        <div className={'product'}>
            <h4>Danh sách sản phẩm</h4>
            <div className={'product-container'}>
                <Space direction="vertical" size={40} style={{width: '100%'}}>
                    <Row gutter={[24, 24]}>
                        <Product />
                    </Row>
                </Space>
            </div>
        </div>
    )
}

export default React.memo(Products);