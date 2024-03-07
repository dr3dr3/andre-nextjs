import HeroJustText from '@/components/ui/hero-just-text';
import GitHubProfile from '@/components/functional/github-profile';

export default async function Home() {
  const test = process.env.TEST || ''
  return (
    <>
      <HeroJustText title="DevOps Demo" subtitle="Learn by Doing" blurb={test} />
      <GitHubProfile />
      
    </>
  );
}
