import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
type Props = {}

const Carousel = (props: Props) => {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <div className="p-4">
                    <p>Welcome to</p>
                    <p className="text-[40px] font-semibold">UniCinema</p>
                </div>
                <Swiper
                    className="h-[500px] rounded-sm"
                    autoplay
                    loop
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <img
                            className="w-full h-full object-cover object-center"
                            src="http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-full object-cover object-center"
                            src="https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-full object-cover object-center"
                            src="https://teaser-trailer.com/wp-content/uploads/Polar-new-banner.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-full object-cover object-center"
                            src="https://samfillingham.com/wp-content/uploads/2020/05/2200-1000px-banner-Muna-1310x595.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Carousel
