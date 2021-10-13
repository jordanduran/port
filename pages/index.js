import Head from 'next/head';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import BlogSection from '../components/BlogSection';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Jordan Duran | Full-stack Developer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='max-w-8xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='hero-section max-w-6xl py-8 mx-auto'>
          <Hero />
        </div>
        <div className='project-section max-w-6xl py-8 mx-auto'>
          <ProjectsSection />
        </div>
        <div className='project-section max-w-6xl py-8 mx-auto'>
          <BlogSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
