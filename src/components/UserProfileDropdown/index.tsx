import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";

// Components
import ButtonBase from "../../base/Components/ButtonBase";

// Actions
import { logout } from '../../reducers/user'

import './styles/index.less'
import {RootState} from "../../store";
import {Link, useNavigate} from "react-router-dom";

const UserProfileDropdown: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user)

    const onLogout = () => {
        navigate('/')
        dispatch(logout())
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link to={'management'}>
                    Quản lý tài khoản
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <a rel="noopener noreferrer" onClick={onLogout}>
                    Đăng xuất
                </a>
            ),
        },
    ];

    return (
        <Dropdown menu={{items}} placement="bottomRight" overlayClassName={"user-profile"}>
            <ButtonBase type={'link'} disabled rootClassName="user-profile-dropdown">
                <Avatar size={32} src={user.image} icon={<UserOutlined />} />
                <span className="user-profile-fullname">{`${user.firstName} ${user.lastName}`}</span>
            </ButtonBase>
        </Dropdown>
    );
};

export default UserProfileDropdown;