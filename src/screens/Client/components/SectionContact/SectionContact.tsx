/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { HomeAppContext } from '@/contexts/homeAppContext';
import { SkeletonBase } from '@/components/atoms/SkeletonBase/SkeletonBase';
import styles from './SectionContact.module.css';

export const SectionContact: React.FC = () => {
  const { loading } = useContext(HomeAppContext);

  return (
    <section id="contact" className={styles['container']}>
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
            Contato
          </h1>
          <div className={styles['content-about']}>
            <div className={styles['content-logo']}>
              <img
                data-aos="fade-up"
                data-aos-delay="400"
                width={300}
                height={350}
                className={styles['thumb-logo']}
                alt="image-menu"
                src={'/assets/images/logo.png'}
              />
            </div>
            <div className="flex flex-col">
              <div className={styles['content-infos']}>
                <div>
                  <h3 className="text-md md:text-xl font-bold text-white">Locallização</h3>
                  <p className="text-[14px] md:text-lg text-white">Av São Mateus, 100, centro</p>
                </div>
                <div>
                  <h3 className="text-md md:text-xl font-bold text-white">E-mail</h3>
                  <p className="text-[14px] md:text-lg text-white">contato@email.com</p>
                </div>
                <div>
                  <h3 className="text-md md:text-xl font-bold text-white">Telefone</h3>
                  <p className="text-[14px] md:text-lg text-white">(27) 99912-1233</p>
                </div>
              </div>
              <div className={styles['content-infos'] + " mt-12"}>
                <div className="w-[60px] h=[80px] flex flex-row justify-center rounded-full shadow-md bg-green-800 hover:bg-green-900 p-2 transition-all duration-200 hover:scale-105 cursor-pointer">
                  <FaYoutube size={35} color={'#fff'} />
                </div>
                <div className="w-[60px] h=[80px] flex flex-row justify-center rounded-full shadow-md bg-green-800 hover:bg-green-900 p-2 transition-all duration-200 hover:scale-105 cursor-pointer">
                  <FaInstagram size={35} color={'#fff'} />
                </div>
                <div className="w-[60px] h=[80px] flex flex-row justify-center rounded-full shadow-md bg-green-800 hover:bg-green-900 p-2 transition-all duration-200 hover:scale-105 cursor-pointer">
                  <FaFacebook size={35} color={'#fff'} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
