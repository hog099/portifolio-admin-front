import { HeaderClient } from '../components/HeaderClient/HeaderClient';
import { MiddleMenuClient } from '../components/MiddleMenuClient/MiddleMenuClient';
import { CarrouselHeader } from '../components/CarrouselHeader/CarrouselHeader';
import { SectionAbout } from '../components/SectionAbout/SectionAbout';
import { ScheduleEvent } from '../components/ScheduleEvent/ScheduleEvent';
import { SectionNews } from '../components/SectionNews/SectionNews';
import { SectionMenuProd } from '../components/SectionMenuProd/SectionMenuProd';
import { SectionSponsors } from '../components/SectionSponsors/SectionSponsors';
import { SectionInLive } from '../components/SectionInLive/SectionInLive';
import { SectionSubscription } from '../components/SectionSubscription/SectionSubscription';
import { SectionContact } from '../components/SectionContact/SectionContact';

export const HomeApp: React.FC = () => {

  return (
    <div className="w-screen h-screen">
      <HeaderClient />

      <CarrouselHeader />

      <MiddleMenuClient />

      <SectionAbout />

      <ScheduleEvent />

      <SectionNews />

      <SectionMenuProd />

      <SectionSponsors />

      <SectionInLive />

      <SectionSubscription />

      <SectionContact />
    </div>
  );
};
