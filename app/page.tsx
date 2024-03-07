import HeroJustText from '@/components/ui/hero-just-text';
import GitHubProfile from '@/components/functional/github-profile';

export default async function Home() {
  const test = process.env.NEXT_PUBLIC_FF_BUILD || ''
  return (
    <>
      <HeroJustText title="DevOps Demo" subtitle="Learn by Doing" blurb={test} />
      <GitHubProfile />
      
    </>
  );
}
