/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import { HomeAppContext } from '@/contexts/homeAppContext';
import { SkeletonBase } from '@/components/atoms/SkeletonBase/SkeletonBase';

import styles from './SectionMenuProd.module.css';

export const SectionMenuProd: React.FC = () => {
  const { loading } = useContext(HomeAppContext);

  return (
    <section id="menu" className={styles['container']}>
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
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl md:text-5xl font-medium text-white">
            Cardápio
          </h1>
          <div className={styles['content-about']}>
            {[...Array(4)].map((_, index) => (
              <button 
              key={index} 
              className={styles['button-thumb']}
              onClick={() => alert('Implementar visualizacao')}
              >
                <img data-aos="fade-up" data-aos-delay="400" width={200} height={300} className={styles['thumb-menu']} alt="image-menu" src={'https://picsum.photos/200/300'} />
              </button>
            ))}
          </div>

          <NavLink className="flex justify-center mt-[20px]" data-aos="fade-up" data-aos-delay="200" to="/">
            <button className="w-[200px] h-[50px] bg-white hover:bg-gray-200 text-slate-600 font-bold py-2 px-4 rounded-3xl transition-all duration-800 hover:scale-110">
              Ver Cardápio
            </button>
          </NavLink>
        </>
      )}
    </section>
  );
};
