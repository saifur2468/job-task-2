import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStairs } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const trendingProducts = [
  {
    id: 1,
    title: "Premium White Punjabi",
    image:
      "https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A9968-Editmyth-studio-2026-scaled.webp",
    rating: 4.9,
    category: "Punjabi",
  },
  {
    id: 2,
    title: "Royal Black Punjabi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadClbDbL4VI9LpoWumZC6_ga3eE4jVX5xYbhAMZ4I-nOMn1p03PYIVm2e&s=10",
    rating: 4.8,
    category: "Punjabi",
  },
  {
    id: 3,
    title: "Elegant Women's Kurti",
    image:
      "https://kiv.com.bd/storage/0/2024/03/12/16/44/RZah_20240312164410.jpg",
    rating: 4.9,
    category: "Kurti",
  },
  {
    id: 4,
    title: "Printed Cotton Kurti",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvt21saSWwqq-nV7bII8rzEM55lL0ztckX-yA3p_27JboRJtejxlolnkI&s=10",
    rating: 4.7,
    category: "Kurti",
  },
  {
    id: 5,
    title: "Luxury Festive Punjabi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouAIM-aCnKeOoybQHxrImjZD1LSXMAdzHG9v4CqT84A&s=10",
    rating: 4.8,
    category: "Punjabi",
  },
  {
    id: 6,
    title: "Designer Embroidered Kurti",
    image:
      "https://www.adlibbd.com/public/uploads/all/47b80425b49fc07c63c4a87d7617995f-544242.jpg",
    rating: 4.9,
    category: "Kurti",
  },
];

const TrendingGames = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-base-100">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[5px] text-sm font-bold">
            Fashion Collection
          </span>

          <h2 className="mt-3 text-5xl md:text-6xl font-black text-black">
            Trending Punjabi & Kurti
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover our premium collection of stylish Punjabi and elegant
            Kurti for every occasion.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {trendingProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group relative rounded-3xl overflow-hidden bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 flex justify-center items-center gap-2 text-black px-3 py-2 rounded-full font-bold shadow-lg">
                      <FaStar size={20}></FaStar> {product.rating}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.title}
                    </h3>

                    <p className="text-gray-200 text-sm mb-4">
                      Premium Quality • Trending Collection
                    </p>

                    <button className="btn btn-primary w-full rounded-xl">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .swiper-pagination{
            margin-top:20px;
          }

          .swiper-pagination-bullet{
            background:#9ca3af;
            opacity:1;
          }

          .swiper-pagination-bullet-active{
            background:#2563eb;
            width:22px;
            border-radius:20px;
          }

          .swiper-button-next,
          .swiper-button-prev{
            color:white;
            background:rgba(37,99,235,.9);
            width:50px;
            height:50px;
            border-radius:50%;
            transition:.3s;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover{
            transform:scale(1.1);
          }

          .swiper-button-next::after,
          .swiper-button-prev::after{
            font-size:18px;
            font-weight:bold;
          }

          @media(max-width:768px){
            .swiper-button-next,
            .swiper-button-prev{
              display:none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TrendingGames;