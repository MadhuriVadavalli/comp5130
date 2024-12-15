import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa6";
import {Avatar} from 'flowbite-react';
import proPic from '../assets/profile.jpg';
import proPic1 from '../assets/Propic5.jpeg';
import proPic2 from '../assets/Propic1.jpeg';
import proPic3 from '../assets/Propic6.jpeg';
import proPic4 from '../assets/Propic2.jpeg';
import proPic5 from '../assets/Propic3.jpeg';
import proPic6 from '../assets/Propic4.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
       <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
       <div>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: '100%', paddingRight: '15px' }}
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>I absolutely love the selection of books available here. The interface is easy to use, and I especially enjoy the promo codes that help me save money on my purchases!</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Jane Fraser</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Great bookstore! The dashboard is very user-friendly, and the ability to upload books for sale is a fantastic feature. Highly recommend it to all book lovers!</p>
                    <Avatar img={proPic1} alt="avatar of Jese" rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Ryan L</h5>
                    <p className='text-base'>Manager at The Reading Nook</p>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>The book search functionality is very efficient, but I wish there were more payment options available. Other than that, it’s a fantastic system!
</p>
                    <Avatar img={proPic2} alt="avatar of Jese" rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Sophia M.</h5>
                    <p className='text-base'>Independent Bookseller</p>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>I love how detailed the book pages are, especially with the Goodreads links for reviews and recommendations. It makes choosing a book so much easier!

</p>
                    <Avatar img={proPic3} alt="avatar of Jese" rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'> James P.</h5>
                    <p className='text-base'>Owner of Books & Beyond</p>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>The inventory management feature is great for sellers, but I faced a slight issue with editing book details. Support was quick to help, though</p>
                    <Avatar img={proPic4} alt="avatar of Jese" rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'> Olivia K</h5>
                    <p className='text-base'>Online Bookstore Operator</p>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>This bookstore is a hidden gem. The promo codes are a lifesaver, and the selection of books is impressive. Keep up the great work!</p>
                    <Avatar img={proPic5} alt="avatar of Jese" rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Liam J.</h5>
                    <p className='text-base'>Library Administrator</p>
                </div>
            </div></SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'><div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>I appreciate the clean and modern design of the website. The dashboard makes managing my book collection a breeze. Just wish there was a wishlist feature!</p>
                    <Avatar img={proPic6} alt="avatar of Jese" rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium'>Ava C.</h5>
                    <p className='text-base'>Employee at Page Turners Bookshop</p>
                </div>
            </div></SwiperSlide>
        
      </Swiper>
       </div>
    </div>
  )
}

export default Review
