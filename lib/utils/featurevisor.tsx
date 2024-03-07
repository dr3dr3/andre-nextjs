import { createInstance, FeaturevisorInstance } from '@featurevisor/sdk';

const DATAFILE_URL = 'https://flags.andredreyer.com/datafiles/live/datafile-tag-all.json';

//let instance: FeaturevisorInstance;

export async function getInstance(): Promise<FeaturevisorInstance> { 
  // if (instance) {
  //   return instance;
  // };

  const f = createInstance({
    datafileUrl: DATAFILE_URL,
    // stickyFeatures: {
    //   exampleDarkLaunch: {
    //       enabled: true
    //   }
    // },
    onReady: () => console.log('Featurevisor SDK is ready (used in builds)'),
  });

  const instance = await f.onReady();

  return instance;
}
