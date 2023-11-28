import type { ThemeConfig } from 'antd';

import Color from '../../../base/Color';

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
            itemMarginBlock: 4,
            inlineIndent: 30
        },
    },
};

export default themeConfig;
