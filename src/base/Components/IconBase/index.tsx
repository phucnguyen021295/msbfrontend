import React, { memo, lazy, Suspense } from 'react';

const Icons = {
    down: lazy(() => import('./images/Down')),
    right: lazy(() => import('./images/Right')),
    phone: lazy(() => import('./images/Phone')),
    user: lazy(() => import('./images/User')),
    fileText: lazy(() => import('./images/FileText')),
    logout: lazy(() => import('./images/Logout')),
    "arrow-right": lazy(() => import('./images/ArrowRight')),
    close: lazy(() => import('./images/Close')),
};

const SIZE = {
    small: 14,
    normal: 16,
    medium: 18,
    large: 20,
    huge: 24,
} as const;

interface Props {
    name: keyof typeof Icons;
    size?: keyof typeof SIZE;
    color?: string;
    style?: object;
    className?: string;
    viewBox?: string;
    onClick?: void;
}

function IconBase(props: Props) {
    const { name, size = 'normal', color = '#ddd', style = {}, className, viewBox = '0 0 16 16', onClick = () => null } = props;
    const Icon = Icons[name];
    // @ts-ignore
    return (
        <Suspense fallback={null}>
            <Icon width={SIZE[size]} height={SIZE[size]} color={color} style={style} className={className} viewBox={viewBox} onClick={onClick} />
        </Suspense>
    );
}

export default memo(IconBase);