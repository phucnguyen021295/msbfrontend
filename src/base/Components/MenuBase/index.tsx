import React from 'react';
import { ConfigProvider, Menu} from 'antd';
import type { MenuProps } from 'antd/es/menu';
import themeConfig from "./styles/config";

const MenuBase: React.FC = React.forwardRef((props: MenuProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    return (
        <ConfigProvider theme={themeConfig}>
            <Menu {...props} />
        </ConfigProvider>
    );
});

export {MenuProps}

export default MenuBase;