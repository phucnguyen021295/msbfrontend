import React, {lazy, Suspense} from 'react';

// Components
import Carousel from '../../components/Carousel';
import Choose from '../../components/Choose';
const Products = lazy(() => import('../../components/Products'));

const ContentApp: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <Carousel />
            <Choose />
            <Products /> {/* Todo: Danh sách sản phẩm */}
        </Suspense>
    )
}

export default React.memo(ContentApp);