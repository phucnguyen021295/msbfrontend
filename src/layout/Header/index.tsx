import React, {useState} from 'react';
import { useSelector } from 'react-redux'

// Components
import MenuApp from '../../components/Menu';
import UserProfileDropdown from '../../components/UserProfileDropdown';
import ButtonBase from '../../base/Components/ButtonBase';

import './styles/index.less';
import Logo from './styles/images/Logo.png';
import {RootState} from "../../store";
import FormLogin from "../../components/FormLogin";
import {Link} from "react-router-dom";
import IconBase from "../../base/Components/IconBase";

const HeaderApp: React.FC = () => {
    const token = useSelector((state: RootState) => state.user.token)
    const [isModalOpen, setModalOpen] = useState(false);

    const onLogin = (e) => {
        setModalOpen(true);
    };

    const handleLogout = () => {
        // Xử lý logic đăng xuất ở đây
        console.log('User logged out');
    };

    return (
        <div className={'header-app'}>
            <Link to={'/'} className={'header-app-logo'}>
                <img src={Logo} width={100} height={24} alt={'Logo MSB'} />
            </Link>
            <div className={'header-app-menu'}>
                <MenuApp />
                {
                    !token && (
                        <ButtonBase rootClassName={'header-app-menu-btn-login'} onClick={onLogin}>
                            Đăng nhập
                        </ButtonBase>
                    )

                }
                <ButtonBase icon={<IconBase name={"phone"} />} rootClassName={'header-app-menu-btn-login'}>
                    1900 6083
                </ButtonBase>
                <ButtonBase rootClassName={'header-app-menu-btn-request'} type={"primary"} ghost>
                    Yêu cầu tư vấn
                </ButtonBase>
                {
                    token && (
                        <UserProfileDropdown
                            fullName="John Doe"
                            avatarUrl="https://example.com/avatar.jpg"
                            onLogout={handleLogout}
                        />
                    )
                }
            </div>
            <FormLogin isModalOpen={isModalOpen} onModalCancel={() => setModalOpen(false)} />
        </div>
    )
}

export default HeaderApp;
