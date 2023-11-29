import React from 'react';
import {
    Drawer,
    Button,
    Cascader,
    Affix,
    Form,
    Checkbox,
    Select,
    message,
    Radio,
    Row,
    Col,
    Input
} from 'antd';

// Components
import IconBase from "../../base/Components/IconBase";

// Styles
import './styles/index.less';

interface Props {
    open: boolean;
    onClose: () => void;
}

const REGEX_FULL_NAME_SPACE = /^[^\s]+(\s[^\s]+)+$/; // Vui lòng nhập họ và tên đầy đủ, có dấu cách ở giữa và chỉ chứa dấu nháy đơn.
const REGEX_FULL_NAME_2SPACE = /^(?!.*\s\s)[\p{L}' ]+$/u; // Cho phép nhập chữ, và dấu nháy đơn, không cho nhập 2 dấu cách liền nhau.
const REGEX_FULL_NAME_LAST_SPACE = /^(?!.*\s$)[\p{L}' ]+$/u;


function AskAdvice(props: Props) {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const {onClose, open} = props

    const TITLE = () => (
        <div className={'ask-advice-title'}>
            <span>Yêu cầu tư vấn</span>
            <Button type={'text'} shape={'circle'} onClick={onClose} icon={<IconBase name={"close"} viewBox={'0 0 24 24'} size={'huge'} />} />
        </div>
    )

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
            onClose();
            messageApi.success('Gửi yêu cầu thành công')
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Drawer
            className={'ask-advice'}
            title={TITLE()}
            width={500}
            closable={false}
            placement="right"
            onClose={onClose}
            destroyOnClose={true}
            open={open}
            footer={
                <Button type="primary" htmlType="submit" block onClick={onCheck}>
                    Xác nhận
                </Button>
            }
        >
            {contextHolder}
            <Form
                layout="vertical"
                form={form}
                initialValues={{ size: 'default' }}
                rootClassName={'ask-advice-form'}
                style={{ maxWidth: 500 }}
            >
                <div className={'ask-advice-body-title'}>Thông tin khách hàng</div>
                <Form.Item
                    name="fullName"
                    rules=
                        {[
                            {required: true, message: 'Vui lòng nhập họ tên' },
                            {max: 100, message: 'Vui lòng không nhập qúa 100 kí tự'},
                            {
                                validator: async (_, names) => {
                                    if (names && names[0] === ' ') {
                                        return Promise.reject(new Error('Kí tự đầu tiên không được để khoảng trắng'));
                                    }

                                    if(names && !REGEX_FULL_NAME_2SPACE.test(names)) {
                                        return Promise.reject(new Error('Chỉ cho phép nhập chữ, và dấu nháy đơn, không cho nhập 2 dấu cách liền nhau'));
                                    }

                                    if(names && !REGEX_FULL_NAME_LAST_SPACE.test(names)) {
                                        return Promise.reject(new Error('Vui lòng không để dấu cách ở cuối câu'));
                                    }

                                    if(names && !REGEX_FULL_NAME_SPACE.test(names.trim())) {
                                        return Promise.reject(new Error('Vui lòng nhập họ và tên đầy đủ, có dấu cách ở giữa'));
                                    }
                                },
                            },
                        ]}
                >
                    <Input placeholder={"Nhập họ và tên"} />
                </Form.Item>
                <Form.Item name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
                    <Input placeholder={"Nhập số điện thoại"} />
                </Form.Item>
                <Row>
                    <Col span={12} style={{paddingRight: 8}}>
                        <Form.Item name={'city'} rules={[{ required: true, message: 'Vui lòng nhập thành phố!' }]}>
                            <Select placeholder={"Chọn thành phố"}>
                                <Select.Option value="01">Hà Nội</Select.Option>
                                <Select.Option value="02">Hồ Chí Minh</Select.Option>
                                <Select.Option value="03">Đà Nẵng</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{paddingLeft: 8}}>
                        <Form.Item name={'district'} rules={[{ required: true, message: 'Vui lòng nhập Quận/Huyện!' }]}>
                            <Select placeholder={"Chọn Quận/Huyện"}>
                                <Select.Option value="01">Cầu Giấy</Select.Option>
                                <Select.Option value="02">Thanh Xuân</Select.Option>
                                <Select.Option value="03">Bắc Từ Liêm</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name="radio-group"
                    label="Giới tính"
                    rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
                >
                    <Radio.Group>
                        <Radio value="a">Nam</Radio>
                        <Radio value="b">Nữ</Radio>
                    </Radio.Group>
                </Form.Item>

                <div className={'ask-advice-body-title'}>Sản phẩm cần tư vấn</div>
                <Form.Item name="checkbox-group" rules={[{ required: true, message: 'Vui lòng chọn sản phẩm tư vấn' }]}>
                    <Checkbox.Group>
                        <Row>
                            <Col span={12}>
                                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                                    Thẻ tín dụng
                                </Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="B" style={{ lineHeight: '32px' }}>
                                    Mua trước trả sau
                                </Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="C" style={{ lineHeight: '32px' }}>
                                    Vay linh Hoạt
                                </Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="D" style={{ lineHeight: '32px' }}>
                                    Tài khoản M-Pro
                                </Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="E" style={{ lineHeight: '32px' }}>
                                    Tiền nhanh
                                </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item name="info" rules={[{ required: true, message: 'Vui lòng nhập thông tin mô tả' }]}>
                    <Input.TextArea style={{height: 124}} placeholder={"Nhập thông tin"} allowClear showCount />
                </Form.Item>
            </Form>
        </Drawer>
    );
}

export default AskAdvice;
