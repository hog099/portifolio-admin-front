/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import { HomeAppContext } from '@/contexts/homeAppContext';
import { SkeletonBase } from '@/components/atoms/SkeletonBase/SkeletonBase';

import styles from './SectionSubscription.module.css';

export const SectionSubscription: React.FC = () => {
  const { loading } = useContext(HomeAppContext);

  return (
    <section id="subscription" className={styles['container']}>
      {loading && (
        <>
          <SkeletonBase>
            <Skeleton width={250} height={45} style={{}} />
          </SkeletonBase>
          <div style={{ height: 40 }} />
          <div className="flex flex-row">
            <SkeletonBase>
              <Skeleton width={220} height={300} style={{ marginRight: 30 }} />
            </SkeletonBase>
            <SkeletonBase>
              <Skeleton width={220} height={300} style={{ marginRight: 30 }} />
            </SkeletonBase>
            <SkeletonBase>
              <Skeleton width={220} height={300} style={{ marginRight: 30 }} />
            </SkeletonBase>
            <SkeletonBase>
              <Skeleton width={220} height={300} style={{ marginRight: 30 }} />
            </SkeletonBase>
          </div>
          <div className="mt-12">
            <SkeletonBase>
              <Skeleton width={200} height={45} style={{}} />
            </SkeletonBase>
          </div>
        </>
      )}
      {!loading && (
        <>
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl md:text-5xl font-medium">
            {'Inscrições >titulo aqui<'}
          </h1>
          <div className={styles['content-about']}>
            <button className={styles['button-thumb']} onClick={() => alert('Implementar visualizacao')}>
              <img
                data-aos="fade-up"
                data-aos-delay="400"
                width={400}
                height={200}
                className={styles['thumb-art']}
                alt="image-subscription"
                src={'/assets/images/mock_subscription.jpg'}
              />
            </button>
          </div>

          <NavLink className="flex justify-center mt-[20px]" data-aos="fade-up" data-aos-delay="200" to="/">
            <button className="w-[200px] h-[50px] bgc-primary hover:bg-green-900 text-white font-bold py-2 px-4 rounded-3xl transition-all duration-800 hover:scale-110">
              Cadastre-se Aqui
            </button>
          </NavLink>
        </>
      )}
    </section>
  );
};
