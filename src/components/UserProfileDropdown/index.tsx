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

const UserProfileDropdown = ({ fullName, avatarUrl }) => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user)

    const onLogout = () => {
        dispatch(logout())
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a  rel="noopener noreferrer" href="/management">
                    Quản lý tài khoản
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a rel="noopener noreferrer" href="#" onClick={onLogout}>
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