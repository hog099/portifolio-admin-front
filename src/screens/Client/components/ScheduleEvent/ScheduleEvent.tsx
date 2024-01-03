/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { FiMapPin } from 'react-icons/fi';
import { HomeAppContext } from '@/contexts/homeAppContext';
import { SkeletonBase } from '@/components/atoms/SkeletonBase/SkeletonBase';

import styles from './ScheduleEvent.module.css';

const scheduleDates = [
  { text: '15 de Agosto' },
  { text: '16 de Agosto' },
  { text: '17 de Agosto' },
  { text: '18 de Agosto' },
];

const timeline = [
  {
    title: 'Baile de mascaras canevale',
    time: '10:00',
    locale: 'Praca central',
    description:
      'Lorem Ipsum a description a text a summy a simply text of Lorem Ipsum a description a text a summy a simply text of',
  },
  {
    title: 'Abertura Oficial da Festa',
    time: '11:00',
    locale: 'Praca central',
    description:
      'Lorem Ipsum a description a text a summy a simply, Lorem Ipsum a description a text a summy a simply text of, Lorem Ipsum a description a text a summy',
  },
  {
    title: 'Apresentacao cultural',
    time: '12:00',
    locale: 'Praca central',
    description:
      'Lorem Ipsum a description a text a summy a simply text of a text a summy, Lorem Ipsum a description a text a summy a simply text ofLorem Ipsum a description a text a summy a simply text ofLorem Ipsum a description a text a summy a simply text of',
  },
  {
    title: 'Eleicao rainnha e princesa da festa da capopitela',
    time: '13:00',
    locale: 'Praca central',
    description:
      'Lorem Ipsum a description a text a summy a simply a text, Lorem Ipsum a description a text a summy a simply text ofLorem Ipsum a description a text a summy a simply text of',
  },
  {
    title: 'Festival gourmet',
    time: '14:00',
    locale: 'Praca central',
    description: 'Lorem Ipsum a description a summy to supply a description long',
  },
];

export const ScheduleEvent: React.FC = () => {
  const { loading } = useContext(HomeAppContext);
  const classTextMenu = ' text-[15px] md:text-[15px] lg:text-[22px] mx-2';

  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <section id="schedule" className={styles['container']}>
      {loading && (
        <>
          <SkeletonBase>
            <Skeleton width={300} height={45} style={{}} />
          </SkeletonBase>
          <div style={{ height: 40 }} />
          <SkeletonBase>
            <Skeleton width={280} height={180} style={{marginLeft: -380}} />
            <Skeleton width={280} height={180} style={{marginLeft: 500}} />
            <Skeleton width={280} height={180} style={{marginLeft: -380}} />
            {/* <Skeleton width={620} height={20} style={{ marginTop: 10 }} /> */}
          </SkeletonBase>
        </>
      )}
      {!loading && (
        <>
          <h1 data-aos="fade-up" className="text-3xl md:text-5xl font-medium">
            Programação
          </h1>
          <div className={styles['content-about']}>
            <div className={styles['content-menu']} data-aos="fade-up">
              {scheduleDates.map((menu: any, index: number) => (
                <button
                  key={index}
                  type="button"
                  className={selectedMenu === index ? styles['button-menu-active'] : styles['button-menu']}
                  onClick={() => setSelectedMenu(index)}
                >
                  <p className={styles['text-menu'] + classTextMenu}>{menu?.text}</p>
                </button>
              ))}
            </div>
            <div className={styles['content-timeline'] + ' mt-12'}>
              {timeline.map((item: any, index: number) => (
                <div
                  key={index}
                  className={index % 2 != 0 ? styles['timeline-item-right'] : styles['timeline-item-left']}
                >
                  <div className={styles['timeline-item-line']} />
                  <div className={styles['timeline-item-circle']}>
                    <time
                      data-aos="zoom-in"
                      data-aos-delay="120"
                      className={styles['timetile-text-color'] + ' text-[12px] md:text-md'}
                    >
                      {item.time}
                    </time>
                  </div>
                  <div
                    className={styles['timeline-content-info']}
                    data-aos={index % 2 != 0 ? 'fade-left' : 'fade-right'}
                  >
                    <h3 className={styles['timetile-text-title'] + ' text-[14px] md:text-lg font-bold my-2'}>
                      {item.title}
                    </h3>
                    <span className={styles['content-time']}>
                      {/* <time className={styles['timetile-text-color'] + ' text-[12px] md:text-md'}>{item.time}</time> <span>-</span> */}
                      <FiMapPin size={12} color="#fff" />
                      <p className={styles['timetile-text-color'] + ' text-[12px] md:text-md ml-2'}>{item.locale}</p>
                    </span>
                    <p className={styles['timetile-text-description'] + ' text-[11px] md:text-sm'}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};
