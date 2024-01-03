/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from 'react-router-dom';
import PATHS from './paths';
import { SignIn } from '@/screens/SignIn/SignIn';
// import { AuthGuardRoutes } from '@/guards/AuthGuardRoutes';
// import { dashboardRoutes } from './routesGroup/dashboardRoutes';
// import { profileRoutes } from './routesGroup/profileRoutes';
// import { reportsRoutes } from './routesGroup/reportsRoutes';
// import { activitiesRoutes } from './routesGroup/activitiesRoutes';
// import { usersRoutes } from './routesGroup/usersRoutes';
// import { appsRoutes } from './routesGroup/appsRoutes';
import { Dashboard } from '@/screens/Dashboard/Dashboard';

// const routesPrivateMap = [
//   ...dashboardRoutes,
//   ...profileRoutes,
//   ...reportsRoutes,
//   ...activitiesRoutes,
//   ...usersRoutes,
//   ...appsRoutes,
// ];

export const RoutesApp = () => {
  return (
    <Routes>
      {/* <Route path={PATHS?.index} element={<HomeClient />} /> */}
      <Route path={PATHS?.index} element={<Dashboard />} />
      <Route path={PATHS?.auth.index} element={<SignIn />} />

      {/* {routesPrivateMap.map((route: any, index: number) => {
        const Component = route?.component;
        return (
          <Route
            key={index}
            path={route.path}
            //  element={route.component}
            element={
              <AuthGuardRoutes>
                <Component />
              </AuthGuardRoutes>
            }
          />
        );
      })} */}
      {/* <Route path="*" element={handleNotFound} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
