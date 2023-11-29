import React from 'react';

// Components
import MenuBase, {MenuProps} from "../../base/Components/MenuBase";
import IconBase from "../../base/Components/IconBase";

// Styles
import './styles/index.less'

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
    getItem(<span>Sản phẩm<IconBase name={'down'} /></span>, 'sub1', null, [
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
    getItem(<span>So sánh<IconBase name={'down'} /></span>, 'sub2', null, [
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
    // getItem('1900 6083', '25', null),
    // getItem('1900 6083', '25', <IconBase name={'phone'} />),
];

const MenuApp: React.FC = () => {

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <MenuBase
            style={menuStyle}
            onClick={onClick}
            mode={'horizontal'}
            inlineIndent={8}
            items={items}
            expandIcon={(expand) => {
                const {isSubMenu, isOpen} = expand;
                return isSubMenu && isOpen ? (
                    <IconBase name={'down'}/>
                ) : (
                    <IconBase name={'right'}/>
                )
            }}
        />
    );
};

const menuStyle: React.CSSProperties = {
    width: '100%',
    height: 56,
    lineHeight: '56px',
    borderBottom: 0,
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'end',
};

export default MenuApp;