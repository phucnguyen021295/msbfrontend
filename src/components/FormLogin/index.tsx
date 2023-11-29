import React, {useState} from 'react';
import {Modal, Form, Space, Button, Input} from 'antd';
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';

// Apis
import {loginApi} from '../../apis';

// Actions
import { update } from '../../reducers/user'

import './styles/index.less';

type FieldType = {
    username?: string;
    password?: string;
};

interface Props {
    isModalOpen: boolean;
    onModalCancel: () => void;
}

const FormLogin: React.FC = (props: Props) => {
    const {isModalOpen, onModalCancel, ...otherProps} = props;
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [request, setIsRequest] = useState('');


    const onLoginSuccess = (responsive) => {
        if(responsive.message) {
            onLoginFailure();
            return;
        }
        dispatch(update(responsive))
        onModalCancel();
        navigate('/management');
        setIsRequest('success')
    }

    const onLoginFailure = (error) => {
        setIsRequest('failure')
    }

    const onFinish = (values: any) => {
        setIsRequest('loading')
        console.log('values', values)
        loginApi(values.username, values.password, onLoginSuccess, onLoginFailure)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal open={isModalOpen} centered className={'form-login'} width={343} closable={false} footer={null} {...otherProps}>
            <h3>Đăng Nhập</h3>
            <Form
                name="basic"
                layout="vertical"
                style={{ maxWidth: '100%', borderRadius: '16px' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label={<span className={'form-login-label'}>Tên tài khoản</span>}
                    name="username"
                    colon={false}
                    rules={[{ required: true, message: 'Vui lòng nhập tên người dùng của bạn!' }]}
                >
                    <Input placeholder={'Nhập tên tài khoản'} />
                </Form.Item>

                <Form.Item<FieldType>
                    label={<span className={'form-login-label'}>Mật khẩu</span>}
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                >
                    <Input.Password placeholder={'Nhập mật khẩu'} />

                </Form.Item>

                {request === 'failure' && <span className={'form-login-label-error'}>Tài khoản hoặc mật khẩu không chính xác!</span>}

                <Space direction="horizontal" size={8} className={'form-login-footer'}>
                    <Button type="primary" ghost block onClick={onModalCancel}>
                        Đóng
                    </Button>
                    <Button loading={request === 'loading'} type="primary" htmlType="submit" block>
                        Đăng nhập
                    </Button>
                </Space>
            </Form>
        </Modal>
    )
}

export default FormLogin;