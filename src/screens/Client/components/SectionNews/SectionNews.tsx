/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';

import { HomeAppContext } from '@/contexts/homeAppContext';
import { SkeletonBase } from '@/components/atoms/SkeletonBase/SkeletonBase';

import styles from './SectionNews.module.css';
import { NavLink } from 'react-router-dom';

const dataNews = [
  {
    id: '1',
    title: 'Lorem Describe a amoun',
    summary: 'Ipasum a text a summary if a text of news in a singular text to describe a news',
    date: '17-08-2024',
  },
  {
    id: '2',
    title: 'Lorem Ipsum Describe amoun',
    summary:
      'Ipasum a text a summary if a text of news in a singular text to describe a news in a singular text to describe a news',
    date: '18-08-2024',
  },
  {
    id: '3',
    title: 'Lorem Ipsum a Amoun',
    summary: 'Ipasum a text a summary if a text of news in a singular text describe',
    date: '19-08-2024',
  },
  {
    id: '4',
    title: 'Lorem Ipsum a Title As',
    summary: 'Ipasum a text a summary if a text of news in a singular text to describe a news to describe a news',
    date: '20-08-2024',
  },
];

export const SectionNews: React.FC = () => {
  const { loading } = useContext(HomeAppContext);

  return (
    <section id="news" className={styles['container']}>
      {loading && (
        <>
          <SkeletonBase>
            <Skeleton width={250} height={45} style={{}} />
          </SkeletonBase>
          <div style={{ height: 40 }} />
          <div className='flex flex-row'>
          <SkeletonBase>
            <Skeleton width={350} height={120} style={{ marginRight: 80}} />
          </SkeletonBase>
          <SkeletonBase>
            <Skeleton width={350} height={120} style={{}} />
          </SkeletonBase>
          </div>
          <div className='flex flex-row mt-8'>
          <SkeletonBase>
            <Skeleton width={350} height={120} style={{ marginRight: 80}} />
          </SkeletonBase>
          <SkeletonBase>
            <Skeleton width={350} height={120} style={{}} />
          </SkeletonBase>
          </div>
          <div className='mt-12'>
          <SkeletonBase>
            <Skeleton width={200} height={45} style={{}} />
          </SkeletonBase>
            </div>
        </>
      )}
      {!loading && (
        <>
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl md:text-5xl font-medium">
            Notícias
          </h1>
          <div className={styles['content-about']}>
            {dataNews.map((news: any, index: number) => (
              <NavLink
                to="/"
                key={index}
                data-aos="fade-up"
                data-aos-delay="200"
                className={styles['card-news'] + ' flex flex-col w-[400px] h-[130px] md:h-[150px] m-2 md:m-4'}
              >
                <h2 className="text-lg md:text-xl font-medium">{news.title}</h2>
                <p className="text-[14px] md:text-md text-gray-600">{news.date}</p>
                <p className="text-[14px] md:text-md text-gray-600 mt-1 md:mt-2">{news.summary}</p>
              </NavLink>
            ))}
          </div>

          <NavLink className="flex justify-center mt-[20px]" data-aos="fade-up" data-aos-delay="200" to="/">
            <button className="w-[200px] h-[50px] bgc-primary hover:bg-green-800 text-white font-bold py-2 px-4 rounded-3xl transition-all">
              Ver Todas
            </button>
          </NavLink>
        </>
      )}
    </section>
  );
};
