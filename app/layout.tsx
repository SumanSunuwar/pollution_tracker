import * as React from 'react';
import { AppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MasksIcon from '@mui/icons-material/Masks';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import type { Navigation } from '@toolpad/core/AppProvider';

import theme from '../theme';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'pollution',
    title: 'Pollution Overview',
    icon: <MasksIcon />,
  },
  {
    segment: 'weather',
    title: 'Weather Overview',
    icon: <CloudQueueIcon />,
  },
];

const BRANDING = {
  title: 'Pollution Tracker',
};



export default function RootLayout(props: { children: React.ReactNode }) {
  

  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
        
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <AppProvider
              navigation={NAVIGATION}
              branding={BRANDING}
              
              theme={theme}
            >
              {props.children}
            </AppProvider>
          </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}
