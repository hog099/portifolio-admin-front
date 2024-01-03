import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';

import { HomeAppContext } from '@/contexts/homeAppContext';
import { SkeletonBase } from '@/components/atoms/SkeletonBase/SkeletonBase';

import styles from './SectionAbout.module.css';

export const SectionAbout: React.FC = () => {
  const { loading } = useContext(HomeAppContext);

  return (
    <section id="about" className={styles['container']}>
      {loading && (
        <>
          <SkeletonBase>
          <Skeleton width={200} height={30} style={{  }} />
          </SkeletonBase>
          <div style={{height: 40}} />
            <SkeletonBase>
              <Skeleton width={500} height={20} style={{  }} />
              <Skeleton width={620} height={20} style={{ marginTop: 10 }} />
              <Skeleton width={580} height={20} style={{ marginTop: 10 }} />
              <Skeleton width={570} height={20} style={{ marginTop: 10 }} />
              <Skeleton width={620} height={20} style={{ marginTop: 10 }} />
            </SkeletonBase>
        </>
      )}
      {!loading && (
        <>
          <h1 data-aos="fade-up" className="text-3xl md:text-5xl font-medium">
            A Festa
          </h1>
          <div className={styles['content-about']}>
            <p data-aos="fade-up" className="text-lg md:text-2xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quia, voluptate, magni
              voluptas quidem voluptatibus voluptates molestiae quod quos repellendus natus? Quisquam voluptatum, quia,
              voluptate, magni voluptas quidem voluptatibus voluptates molestiae quod quos repellendus natus
            </p>
          </div>
        </>
      )}
    </section>
  );
};
