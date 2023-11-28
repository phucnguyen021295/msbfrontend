import * as React from 'react';
import {ConfigProvider, Input} from 'antd';

// type
import type { InputProps } from 'antd';
import themeConfig from './styles/config';

const InputBase = React.forwardRef((props: InputProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;

    return (
        <ConfigProvider theme={themeConfig}>
            <Input ref={ref} {...rest} />
        </ConfigProvider>
    );
});

const InputPasswordBase = React.forwardRef((props: InputProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;

    return (
        <ConfigProvider theme={themeConfig}>
            <Input.Password ref={ref} {...rest} />
        </ConfigProvider>
    );
});

InputBase.displayName = 'InputBase';
export {InputPasswordBase}
export default InputBase;