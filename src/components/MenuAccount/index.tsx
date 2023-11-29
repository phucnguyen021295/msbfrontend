import React from 'react';
import { AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

// Components
import MenuBase, {MenuProps} from "../../base/Components/MenuBase";

// Styles
import './styles/index.less';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import IconBase from "../../base/Components/IconBase";
import {logout} from "../../reducers/user";
import {Link, useNavigate} from "react-router-dom";

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
    getItem(<Link to={'/management'} >Thông tin tài khoản</Link>, 'sub1', <IconBase name={'user'} viewBox={'0 0 24 24'} size={'huge'} />),
    getItem(<Link to={'/management/product-info'} >Thông tin sản phẩm</Link>, 'sub2', <IconBase name={'fileText'} viewBox={'0 0 24 24'} size={'huge'} />),
    getItem('Đăng xuất', 'sub3', <IconBase name={'logout'} viewBox={'0 0 24 24'} size={'huge'} />),
];

const MenuAccount: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user)

    const onClick: MenuProps['onClick'] = (e) => {
        if(e.key === 'sub3') {
            navigate('/')
            dispatch(logout())
        }
    };

    return (
        <div className={"menu-account"}>
            <div className={"menu-account-fullName"}>
                <span>{`${user.firstName} ${user.lastName}`}</span>
            </div>
            <MenuBase
                className={"menu-account-list"}
                style={menuStyle}
                onClick={onClick}
                defaultSelectedKeys={['sub1']}
                mode={'vertical'}
                inlineIndent={8}
                items={items}
            />
        </div>
    );
};

const menuStyle: React.CSSProperties = {
    width: 331,
};

export default React.memo(MenuAccount);