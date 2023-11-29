import React from 'react';
import {
    Drawer,
    Button,
    Cascader,
    Affix,
    Form,
    Checkbox,
    Select,
    Switch,
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

function AskAdvice(props: Props) {
    const [form] = Form.useForm();
    const {onClose, open} = props

    const TITLE = () => (
        <div className={'ask-advice-title'}>
            <span>Yêu cầu tư vấn</span>
            <Button type={'text'} shape={'circle'} icon={<IconBase name={"close"} viewBox={'0 0 24 24'} size={'huge'} />} />
        </div>
    )

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    const handleKeyPress = (e) => {
        // Kiểm tra nếu ký tự đầu tiên là dấu cách
        if (e.charCode === 32 && !form.getFieldValue('fullName')) {
            e.preventDefault();
            // Hoặc có thể hiển thị một thông báo lỗi ở đây
            form.validateFields('fullName', "Không được nhập dấu cách đầu tiên")
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
            open={open}
            footer={ <Button type="primary" htmlType="submit" block onClick={onCheck}>
                Xác nhận
            </Button>}
        >
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
                            {whitespace: true, message: 'Vui lòng nhập không để trống'},
                            {max: 100, message: 'Vui lòng nhập qúa 100 kí tự'},
                            // { validator: validateFirstCharacter },
                        ]}
                >
                    <Input placeholder={"Nhập họ và tên"} onKeyPress={handleKeyPress} />
                </Form.Item>
                <Form.Item name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
                    <Input placeholder={"Nhập số điện thoại"} />
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item name={'city'} rules={[{ required: true, message: 'Vui lòng nhập thành phố!' }]}>
                            <Select placeholder={"Chọn thành phố"}>
                                <Select.Option value="01">Hà Nội</Select.Option>
                                <Select.Option value="02">Hồ Chí Minh</Select.Option>
                                <Select.Option value="03">Đà Nẵng</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name={'district'} rules={[{ required: true, message: 'Vui lòng nhập Quận/Huyện!' }]}>
                            <Select placeholder={"Chọn Quận/Huyện"}>
                                <Select.Option value="demo">Demo</Select.Option>
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
                    <Input.TextArea placeholder={"Nhập thông tin"} allowClear showCount />
                </Form.Item>
            </Form>
        </Drawer>
    );
}

export default AskAdvice;
