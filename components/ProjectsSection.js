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
          <h2 className='project-title text-2xl font-bold mb-2'>
            Scenic Forests
          </h2>
          <p className='text-base text-gray-600 mb-3'>
            (HTML5, CSS3, JavaScript, & Netlify)
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

        {/* Start of Project 2 */}
        <div className='project-two mb-10'>
          <span className='project-category text-blue-700 text-sm font-bold uppercase'>
            Web Application
          </span>
          <h2 className='project-title text-2xl font-bold mb-2'>Pig</h2>
          <p className='text-base text-gray-600 mb-3'>
            (HTML5, CSS3, JavaScript, & Netlify)
          </p>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose w-100 max-w-lg'>
            Two player game with a pleasing user interface.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Played with dice, each player can roll the dice as many times as
            they want.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            If a <strong>one</strong> is rolled, the score is not added to their
            total and the turn is now the opposing players.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg mb-3'>
            If they hold, the score is added to their total.{' '}
            <strong>First to 100</strong>, wins!
          </li>
          <div className='button-controls flex justify-evenly lg:w-10/12'>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
            >
              <a
                href='https://github.com/jordanduran/Pig-Game'
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
                href='https://jspigdicegame.netlify.com/'
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
        <div className='project-three mb-10'>
          <span className='project-category text-blue-700 text-sm font-bold uppercase'>
            Web Application
          </span>
          <h2 className='project-title text-2xl font-bold mb-2'>
            Quote Generator
          </h2>
          <p className='text-base text-gray-600 mb-3'>
            (HTML5, CSS3, JavaScript, & Netlify)
          </p>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose w-100 max-w-lg'>
            An application where users are greeted with a quote upon site load.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            User has the ability to tweet the current quote, or request a new
            one.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            Small hints of <strong>CSS animations.</strong>
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg mb-3'>
            Fully responsive with a great design.
          </li>
          <div className='button-controls flex justify-evenly lg:w-10/12'>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
            >
              <a
                href='https://github.com/jordanduran/Quote-Generator'
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
                href='https://thequotegenerator.netlify.app/'
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
        <div className='project-three mb-10'>
          <span className='project-category text-blue-700 text-sm font-bold uppercase'>
            Web Application
          </span>
          <h2 className='project-title text-2xl font-bold mb-2'>
            Google Keep Clone
          </h2>
          <p className='text-base text-gray-600 mb-3'>
            (HTML5, CSS3, JavaScript, & Netlify)
          </p>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose w-100 max-w-lg'>
            Google Keep is a note-taking service developed by Google.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            This is a cloned version using <strong>vanilla JavaScript.</strong>
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg'>
            The user is able to create, edit, and delete notes. The user also
            has the ability to change the notes background color.
          </li>
          <li className='project-list list-inside col-span-1 text-gray-800 leading-loose max-w-lg mb-3'>
            All notes have the capability to be saved using localStorage.
          </li>
          <div className='button-controls flex justify-evenly lg:w-10/12'>
            <button
              type='button'
              className='inline-flex items-center px-5 py-1 border border-transparent text-lg font-semibold rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
            >
              <a
                href='https://github.com/jordanduran/Google-Keep-Clone'
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
                href='https://googlekeepclone.netlify.app/'
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
