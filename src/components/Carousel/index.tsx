import React from 'react';
import { Carousel, Button } from 'antd';

import './styles/index.less';
import Banner from './styles/images/Frame628229.png';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '540px',
    background: '#F3FBFD',
    display: 'flex',
    justifyContent: 'center'
};

const CarouselItem: React.FC = () => {
    return (
        <div style={contentStyle}>
            <div className={'carousel-body'}>
                <div className={'carousel-item'}>
                    <h2 className={'carousel-h2'}>
                        Trải nghiệm sống cực chất cho dân văn phòng
                    </h2>
                    <span className={'carousel-summary'}>
                        Lương từ 8 triệu/tháng, nhận ngay tới 200 triệu VND
                    </span>
                    <Button type={"primary"} style={{width: 185, marginTop: 32}}>
                        Khám phá ngay
                    </Button>
                </div>
                <div className={'carousel-img'}>
                    <img src={Banner} height={540} width={550} />
                </div>
            </div>
        </div>
    )
}

const App: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onChange} className={'carousel'}>
            <div>
                <CarouselItem />
            </div>
            <div>
                <CarouselItem />
            </div>
            <div>
                <CarouselItem />
            </div>
            <div>
                <CarouselItem />
            </div>
            <div>
                <CarouselItem />
            </div>
        </Carousel>
    );
};

export default App;
