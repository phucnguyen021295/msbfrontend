import React, { useState } from 'react';

import {ConfigProvider, Menu} from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import themeConfig from "./styles/config";
import IconBase from "../../Base/Components/IconBase";
import FormLogin from "../FormLogin";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Sản phẩm', 'sub1', null, [
        getItem('Thẻ tin dụng', 'sub1-1', null, [
            getItem('MSB Mastercard mDigi', '1'),
            getItem('MSB Mastercard Super Free', '2'),
            getItem('MSB Visa Online', '3'),
            getItem('MSB Visa Travel', '4'),
            getItem('MSB Visa Signature', '5'),
        ]),
        getItem('Vay', 'sub1-2', null, [
            getItem('MSB Mastercard mDigi', '6'),
            getItem('MSB Mastercard Super Free', '7'),
            getItem('MSB Visa Online', '8'),
            getItem('MSB Visa Travel', '9'),
            getItem('MSB Visa Signature', '10'),
        ]),
        getItem('Bảo hiểm', '11', null),
    ]),
    getItem('So sánh', 'sub2', null, [
        getItem('Thẻ tin dụng', 'sub2-1', null, [
            getItem('MSB Mastercard mDigi', '12'),
            getItem('MSB Mastercard Super Free', '13'),
            getItem('MSB Visa Online', '14'),
            getItem('MSB Visa Travel', '15'),
            getItem('MSB Visa Signature', '16'),
        ]),
        getItem('Vay', 'sub2-2', null, [
            getItem('MSB Mastercard mDigi', '17'),
            getItem('MSB Mastercard Super Free', '18'),
            getItem('MSB Visa Online', '19'),
            getItem('MSB Visa Travel', '20'),
            getItem('MSB Visa Signature', '21'),
        ]),
        getItem('Bảo hiểm', '22', null),
    ]),
    getItem('Câu hỏi thường gặp', '23',),
    getItem('Đăng nhập', '24'),
    getItem('1900 6083', '25', null),
    // getItem('1900 6083', '25', <IconBase name={'phone'} />),
];

const MenuApp: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        if(e.key === '24') {
            setModalOpen(true);
        }
    };

    return (
        <ConfigProvider theme={themeConfig}>
            <Menu
                style={menuStyle}
                onClick={onClick}
                mode={'horizontal'}
                items={items}
                // expandIcon={({ expanded, onExpand, record }) =>
                //     expanded ? (
                //         <MinusOutlined
                //             style={{ fontSize: '20px' }}
                //             onClick={(e) => onExpand(record, e)}
                //         />
                //     ) : (
                //         <PlusOutlined
                //             style={{ fontSize: '20px' }}
                //             onClick={(e) => onExpand(record, e)}
                //         />
                //     )}
            />
            <FormLogin isModalOpen={isModalOpen} onModalCancel={() => setModalOpen(false)} />
        </ConfigProvider>
    );
};

const menuStyle: React.CSSProperties = {
    width: '100%',
    height: 40,
    lineHeight: '40px',
    borderBottom: 0,
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'end',
    marginRight: 20
};

export default MenuApp;