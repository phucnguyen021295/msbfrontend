import React from 'react';

// Components
import MenuApp from '../../Components/Menu';
import ButtonBase from '../../Base/Components/ButtonBase';

import './styles/index.less';
import Logo from './styles/images/Logo.png';

const HeaderApp: React.FC = () => {
    return (
        <div className={'header-app'}>
            <img src={Logo} width={100} height={24} alt={'Logo MSB'} />
            <div className={'header-app-menu'}>
                <MenuApp />
                <ButtonBase type={"primary"} ghost>
                    Yêu cầu tư vấn
                </ButtonBase>
            </div>
        </div>
    )
}

export default HeaderApp;
