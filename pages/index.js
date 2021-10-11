import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';

const HomePage = () => {
  return (
    <div className='max-w-8xl px-4 py-8 sm:px-6 lg:px-8'>
      <div className='hero-section max-w-6xl py-8 mx-auto'>
        <Hero />
      </div>
      <div className='project-section max-w-6xl py-8 mx-auto'>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default HomePage;
