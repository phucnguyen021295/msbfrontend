import React from 'react';
import { Modal, Form } from 'antd';

// Components
import ButtonBase from "../../Base/Components/ButtonBase";
import InputBase, {InputPasswordBase} from "../../Base/Components/InputBase";

// Apis
import {loginApi} from '../../Apis';

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
    const {isModalOpen, onModalCancel, ...otherProps} = props

    const onLoginSuccess = (responsive) => {
        debugger;
    }

    const onLoginFailure = (error) => {
        debugger;
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        loginApi(values.username, values.password, onLoginSuccess, onLoginFailure)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal open={isModalOpen} className={'form-login'} width={343} closable={false} footer={null} {...otherProps}>
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
                    <InputBase placeholder={'Nhập tên tài khoản'} />
                </Form.Item>

                <Form.Item<FieldType>
                    label={<span className={'form-login-label'}>Mật khẩu</span>}
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                >
                    <InputPasswordBase placeholder={'Nhập mật khẩu'} />
                </Form.Item>

                <Form.Item>
                    <ButtonBase type="primary" ghost block onClick={onModalCancel}>
                        Đóng
                    </ButtonBase>
                    <ButtonBase type="primary" htmlType="submit" block>
                        Đăng nhập
                    </ButtonBase>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default FormLogin;