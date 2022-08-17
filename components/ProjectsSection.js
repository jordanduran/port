import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsSection = () => {
  return (
    <div className='project-section mt-10' id={'projects-section'}>
      <h1 className='projects-header text-4xl font-bold'>Projects</h1>
      <p className='text-base text-gray-700 mt-1 mb-6'>
        My set of skills include JavaScript, React, Next.js, CSS, and styling
        frameworks.
      </p>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2'
      >
        {/* Start of Project 1 */}
        <div className='project-one mb-10'>
          <span className='project-category text-blue-700 text-sm font-bold uppercase'>
            Web Application
          </span>
          <h2 className='project-title text-2xl font-bold mb-2'>Boards</h2>
          <p className='text-base text-gray-600 mb-3'>
            (React, CSS3, TailwindUI, Easy Peasy, Stripe, Firebase, & Vercel)
          </p>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose w-100 max-w-lg'>
            Whether you are shopping for a new skateboard complete, or need
            individual parts to upgrade your current setup, boards Skateboards
            has you covered.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Modern and fully responive multi page e-commerce layout with{' '}
            <strong>TailwindUI.</strong>
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Quick and easy state management with <strong>Easy Peasy</strong>
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Authentication, real time data, and storage provided by{' '}
            <strong>Firebase</strong>
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Top tier payment processing provided by <strong>Stripe</strong>.
          </li>
          <div className='button-controls flex justify-evenly lg:w-10/12'>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
            >
              <a
                href='https://github.com/jordanduran/boards'
                rel='noreferrer'
                target='_blank'
              >
                GitHub{' '}
                <FontAwesomeIcon className='fa-xl ml-2' icon={faGithub} />
              </a>
            </button>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none'
            >
              <a
                href='https://shopboards.vercel.app/'
                rel='noreferrer'
                target='_blank'
              >
                Live View{' '}
                <FontAwesomeIcon
                  className='fa-xl ml-2'
                  icon={faExternalLinkAlt}
                />
              </a>
            </button>
          </div>
        </div>
        {/* End of Project */}

        {/* Start of Project 2 */}
        <div className='project-one mb-10'>
          <span className='project-category text-blue-700 text-sm font-bold uppercase'>
            Web Application
          </span>
          <h2 className='project-title text-2xl font-bold mb-2'>Estately</h2>
          <p className='text-base text-gray-600 mb-3'>
            (React, CSS3, LeafletJS, Swiper, Toastify, Google Geocoding API,
            Firebase, & Vercel)
          </p>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose w-100 max-w-lg'>
            Find new beautiful homes to buy or rent with Estately, a full stack
            app marketplace for homes.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Beautiful and responsive multi page layout created with{' '}
            <strong>CSS3. </strong>Features a map with geolocation provided by{' '}
            <strong>LeafletJS</strong>.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Amazing image sliders using <strong>Swiper</strong> that are
            implemented in multiple pages.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg mb-3'>
            <strong>Firebase</strong> for authentication and to store
            application data such as listings, images, and users.
          </li>
          <div className='button-controls flex justify-evenly lg:w-10/12'>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
            >
              <a
                href='https://github.com/jordanduran/Estately'
                rel='noreferrer'
                target='_blank'
              >
                GitHub{' '}
                <FontAwesomeIcon className='fa-xl ml-2' icon={faGithub} />
              </a>
            </button>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none'
            >
              <a
                href='https://estately.vercel.app/'
                rel='noreferrer'
                target='_blank'
              >
                Live View{' '}
                <FontAwesomeIcon
                  className='fa-xl ml-2'
                  icon={faExternalLinkAlt}
                />
              </a>
            </button>
          </div>
        </div>
        {/* End of Project */}

        {/* Start of Project 3 */}
        <div className='project-one mb-10'>
          <span className='project-category text-blue-700 text-sm font-bold uppercase'>
            Web Application
          </span>
          <h2 className='project-title text-2xl font-bold mb-2'>Cryptobase</h2>
          <p className='text-base text-gray-600 mb-3'>
            (React, Redux Toolkit, Chart.js, RapidAPI, CSS3, Ant Design, &
            Netlify)
          </p>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose w-100 max-w-lg'>
            Explore the world of Cryptocurrency in this application, learn all
            there is about different cryptocurrencies.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            In depth data of all cryptocurrencies, crypto markets, exchanges,
            and news.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Beautiful and responsive multi page layout created with{' '}
            <strong>Ant Design</strong> and <strong>CSS3. </strong>Intuitive
            charts that display crypto data with <strong>Chart.js</strong>
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg mb-3'>
            <strong>Redux Toolkit</strong> for flexible state management.
          </li>
          <div className='button-controls flex justify-evenly lg:w-10/12'>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
            >
              <a
                href='https://github.com/jordanduran/cryptobase'
                rel='noreferrer'
                target='_blank'
              >
                GitHub{' '}
                <FontAwesomeIcon className='fa-xl ml-2' icon={faGithub} />
              </a>
            </button>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none'
            >
              <a
                href='https://thecryptobase.netlify.app/'
                rel='noreferrer'
                target='_blank'
              >
                Live View{' '}
                <FontAwesomeIcon
                  className='fa-xl ml-2'
                  icon={faExternalLinkAlt}
                />
              </a>
            </button>
          </div>
        </div>
        {/* End of Project */}

        {/* Start of Project 4 */}
        <div className='project-one mb-10'>
          <span className='project-category text-blue-700 text-sm font-bold uppercase'>
            Web Application
          </span>
          <h2 className='project-title text-2xl font-bold mb-2'>
            Scenic Forests
          </h2>
          <p className='text-base text-gray-600 mb-3'>
            (HTML5, CSS3, & Netlify)
          </p>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose w-100 max-w-lg'>
            Built for people who want to take a nice vacation away from the
            city.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Displays wonderful cabin homes in different areas along with high
            quality amenities.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Multi page layout with eye-catching{' '}
            <strong>CSS animation and transitions.</strong>
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg mb-3'>
            Fully responsive with amazing typography and flow.
          </li>
          <div className='button-controls flex justify-evenly lg:w-10/12'>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
            >
              <a
                href='https://github.com/jordanduran/Scenic-Forests'
                rel='noreferrer'
                target='_blank'
              >
                GitHub{' '}
                <FontAwesomeIcon className='fa-xl ml-2' icon={faGithub} />
              </a>
            </button>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none'
            >
              <a
                href='https://scenicforests.netlify.app/'
                rel='noreferrer'
                target='_blank'
              >
                Live View{' '}
                <FontAwesomeIcon
                  className='fa-xl ml-2'
                  icon={faExternalLinkAlt}
                />
              </a>
            </button>
          </div>
        </div>
        {/* End of Project */}
      </ul>
    </div>
  );
};

export default ProjectsSection;
