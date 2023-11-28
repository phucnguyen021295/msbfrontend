import React from 'react';

// Components
import Carousel from '../../components/Carousel';
import Choose from '../../components/Choose';
import Products from '../../components/Products';

const ContentApp: React.FC = () => {
    return (
        <>
            <Carousel />
            <Choose />
            <Products />
        </>
    )
}

export default ContentApp;