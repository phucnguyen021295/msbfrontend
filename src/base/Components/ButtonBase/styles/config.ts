import type { ThemeConfig } from 'antd';

import Color from '../../../Color';

const themeConfig: ThemeConfig = {
    token: {
        colorPrimary: Color.Branding.Primary.color_500,
        borderRadius: 8,
        controlHeight: 40,
        controlHeightLG: 48,
        controlHeightSM: 32,
        colorLink: Color.Branding.Primary.color_500,
        paddingContentHorizontal: 12,
        paddingInline: 12
    },
};

export default themeConfig;
