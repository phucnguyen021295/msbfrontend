import * as React from 'react';
import {Button, ConfigProvider} from 'antd';

// type
import type { ButtonProps } from 'antd';
import themeConfig from './styles/config';

const ButtonBase = React.forwardRef((props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;

    return (
        <ConfigProvider theme={themeConfig}>
            <Button ref={ref} {...rest}>
                {children}
            </Button>
        </ConfigProvider>
    );
});

ButtonBase.displayName = 'ButtonBase';
export default ButtonBase;