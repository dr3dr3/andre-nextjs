'use client';

import { createInstance } from '@featurevisor/sdk';
import { FeaturevisorProvider } from '@featurevisor/react';

const ff = createInstance({
  datafileUrl: 'https://flags.andredreyer.com/datafiles/live/datafile-tag-all.json',
  // stickyFeatures: {
  //     exampleProdTesting: {
  //         enabled: true
  //     }
  // },
  onReady: () => console.log('Featurevisor provider is ready'),
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <FeaturevisorProvider instance={ff}>{children}</FeaturevisorProvider>;
}
