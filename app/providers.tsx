'use client';

import { createInstance } from '@featurevisor/sdk';
import { FeaturevisorProvider } from '@featurevisor/react';

const ff = createInstance({
  datafileUrl: process.env.LIVE_FLAGS_URL,
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
