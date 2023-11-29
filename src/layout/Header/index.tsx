import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button} from "antd";

// Components
import MenuApp from '../../components/Menu';
import UserProfileDropdown from '../../components/UserProfileDropdown';
import FormLogin from "../../components/FormLogin";
import AskAdvice from "../../components/AskAdvice";
import IconBase from "../../base/Components/IconBase";

import {RootState} from "../../store";

// Styles
import './styles/index.less';
import Logo from './styles/images/Logo.png';

const HeaderApp: React.FC = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const token = useSelector((state: RootState) => state.user.token)
    const [isModalOpen, setModalOpen] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!token && location.pathname.includes('/management')) {
            navigate('/')
            setModalOpen(true);
        }
    }, [location])

    const onLogin = (e) => {
        setModalOpen(true);
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
                        <Button rootClassName={'header-app-menu-btn-login'} onClick={onLogin}>
                            Đăng nhập
                        </Button>
                    )

                }
                <Button icon={<IconBase name={"phone"} />} rootClassName={'header-app-menu-btn-login'}>
                    1900 6083
                </Button>
                <Button rootClassName={'header-app-menu-btn-request'} type={"primary"} ghost onClick={() => setOpen(true)}>
                    Yêu cầu tư vấn
                </Button>
                {
                    token && (
                        <>
                            <div className={'header-app-menu-border'} />
                            <UserProfileDropdown />
                        </>
                    )
                }
            </div>
            <FormLogin isModalOpen={isModalOpen} onModalCancel={() => setModalOpen(false)} />
            <AskAdvice open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default HeaderApp;
