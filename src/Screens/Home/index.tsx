import React from 'react';

// Components
import Carousel from '../../Components/Carousel';
import Choose from '../../Components/Choose';
import Products from '../../Components/Products';

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