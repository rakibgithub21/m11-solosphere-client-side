
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/images/carousel1.jpg'
import image2 from '../assets/images/carousel2.jpg'
import image3 from '../assets/images/carousel3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
    return (
        <div className='container mx-auto py-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={image1} text={'Get Your Web Development Projects Done in minutes'}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide text={'Get Your Graphics Desgin Projects Done in minutes'} image={image2}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide text={'Start Your Digital Marketing Campaign up and running'} image={image3}></Slide>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
