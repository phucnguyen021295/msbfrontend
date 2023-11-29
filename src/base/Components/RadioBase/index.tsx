import React from 'react';
import { Radio, RadioProps} from 'antd';

// Components
import IconBase from "../IconBase";

// Styles
import './styles/index.less'

const RadioBase: React.FC = React.forwardRef((props: RadioProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {children, checked, ...otherProps} = props;
    return (
        <Radio {...otherProps}>
            {checked && <IconBase name={'radio'} viewBox={'0 0 24 24'} size={'huge'} />}
            {children}
        </Radio>
    );
});

const RadioGroupBase = Radio.Group

export {RadioGroupBase}

export default RadioBase;