import type { ThemeConfig } from 'antd';

import Color from '../../../Color';

const themeConfig: ThemeConfig = {
    components: {
        Menu: {
            itemPaddingInline: 10,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverColor: Color.Branding.Primary.color_500,
            itemSelectedColor: Color.Branding.Primary.color_500,
            itemColor: Color.Neutral.color_800,
            horizontalItemSelectedColor: Color.Branding.Primary.color_500,
            dropdownWidth: 319,
            itemHeight: 56,
            itemMarginBlock: 0,
            inlineIndent: 30,
            itemMarginInline: 0,
            itemHoverBg: 'transparent',
            itemSelectedBg: Color.Branding.Primary.color_25,
            itemActiveBg: Color.Branding.Primary.color_25,
            itemBorderRadius: 0
        },
    },
};

export default themeConfig;
