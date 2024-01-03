/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './CarrouselHeader.module.css';
import { HomeAppContext } from '@/contexts/homeAppContext';
import { SkeletonBase } from '@/components/atoms/SkeletonBase/SkeletonBase';
import Skeleton from 'react-loading-skeleton';

const carrouselList = [
  { src: '/assets/images/mock_banner.jpg' },
  { src: '/assets/images/mock_banner.jpg' },
  { src: '/assets/images/mock_banner.jpg' },
];

export const CarrouselHeader: React.FC = () => {
  const { loading } = useContext(HomeAppContext);

  return (
    <div className={styles['container']}>
      {loading && (
        <SkeletonBase>
          <div className={styles['loading-desk']}>
            <Skeleton
              width={'100%'}
              height={600}
              // style={{ marginRight: 0 }}
            />
          </div>
          <div className={styles['loading-mob']}>
            <Skeleton
              width={'100%'}
              height={400}
              // style={{ marginRight: 0 }}
            />
          </div>
        </SkeletonBase>
      )}
      {!loading && (
        <Swiper
          cssMode={true}
          navigation={true}
          autoplay={{ delay: 5000 }}
          pagination={false}
          mousewheel={false}
          keyboard={false}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {carrouselList?.length > 0 &&
            carrouselList?.map((item: any, key: number) => (
              <SwiperSlide key={key}>
                <img
                  className={styles['img-carrousel'] + ` object-cover`}
                  src={item?.src}
                  width={'auto'}
                  height={'auto'}
                  alt="image"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};
