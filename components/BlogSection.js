import Image from 'next/image';
import reactPicOne from '../assets/reactPicOne.jpeg';
import jsPicOne from '../assets/jsPicOne.jpg';
import gitPicOne from '../assets/gitPicOne.jpeg';

const BlogSection = () => {
  return (
    <div className='mb-8' id={'blog-section'}>
      <div className='bg-white h-1/3 sm:h-2/3' />

      <div className='relative max-w-7xl mx-auto'>
        <div className=''>
          <h2 className='lg:text-2xl tracking-tight font-extrabold text-gray-900 text-2xl'>
            Recent Blog Posts
          </h2>
        </div>
        <div className='mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {/* Start of Blog Post 1 */}

          <div className='blog-card flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <Image
                className='h-48 w-full object-cover'
                src={reactPicOne}
                target='_blank'
                rel='noreferrer'
                alt='React logo'
              />
            </div>
            <div className='card-content flex-1 bg-white p-6 flex flex-col justify-between'>
              <div className='flex-1'>
                <p className='text-sm font-medium text-blue-700'>
                  <a
                    href='https://hashnode.com/post/how-to-fetch-data-in-react-ckunkpilo0tjsebs19acl2g35'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:underline'
                  >
                    Article
                  </a>
                </p>
                <a
                  href='https://hashnode.com/post/how-to-fetch-data-in-react-ckunkpilo0tjsebs19acl2g35'
                  target='_blank'
                  rel='noreferrer'
                  className='block mt-2'
                >
                  <p className='text-xl font-semibold text-gray-900'>
                    How to Fetch Data in React
                  </p>
                  <p className='card-description mt-3 text-base text-gray-500'>
                    There are many ways to fetch data from an external API in
                    React. But which one should you be reaching for to create
                    your applications in 2021?
                  </p>
                </a>
                <a
                  href='https://hashnode.com/post/how-to-fetch-data-in-react-ckunkpilo0tjsebs19acl2g35'
                  target='_blank'
                  rel='noreferrer'
                  className='block mt-2'
                >
                  <p className='card-description mt-3 text-base text-blue-700 hover:text-blue-900'>
                    Read more...
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* End of Blog Post */}

          {/* Start of Blog Post 2 */}
          <div className='blog-card flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <Image
                className='h-48 w-full object-cover'
                src={jsPicOne}
                target='_blank'
                rel='noreferrer'
                alt='React logo'
              />
            </div>
            <div className='card-content flex-1 bg-white p-6 flex flex-col justify-between'>
              <div className='flex-1'>
                <p className='text-sm font-medium text-blue-700'>
                  <a
                    href='https://hashnode.com/post/the-most-important-array-methods-in-javascript-explained-ckuofrpoj11fdebs1c9wm6iur'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:underline'
                  >
                    Article
                  </a>
                </p>
                <a
                  href='https://hashnode.com/post/the-most-important-array-methods-in-javascript-explained-ckuofrpoj11fdebs1c9wm6iur'
                  target='_blank'
                  rel='noreferrer'
                  className='block mt-2'
                >
                  <p className='text-xl font-semibold text-gray-900'>
                    The Most Important Array Methods in JavaScript Explained
                  </p>
                  <p className='card-description mt-3 text-base text-gray-500'>
                    If you&apos;re a JavaScript developer and want to improve
                    your coding, then you should be familiar with the most
                    commonly used ES5 and ES6+ array methods.
                  </p>
                </a>
                <a
                  href='https://hashnode.com/post/the-most-important-array-methods-in-javascript-explained-ckuofrpoj11fdebs1c9wm6iur'
                  target='_blank'
                  rel='noreferrer'
                  className='block mt-2'
                >
                  <p className='card-description mt-3 text-base text-blue-700 hover:text-blue-900'>
                    Read more...
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* End of Blog Post */}

          {/* Start of Blog Post 3 */}
          <div className='blog-card flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <Image
                className='h-48 w-full object-cover'
                src={gitPicOne}
                target='_blank'
                rel='noreferrer'
                alt='React logo'
              />
            </div>
            <div className='card-content flex-1 bg-white p-6 flex flex-col justify-between'>
              <div className='flex-1'>
                <p className='text-sm font-medium text-blue-700'>
                  <a
                    href='https://hashnode.com/post/how-to-fetch-data-in-react-ckunkpilo0tjsebs19acl2g35'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:underline'
                  >
                    Article
                  </a>
                </p>
                <a
                  href='https://hashnode.com/post/how-to-fetch-data-in-react-ckunkpilo0tjsebs19acl2g35'
                  target='_blank'
                  rel='noreferrer'
                  className='block mt-2'
                >
                  <p className='text-xl font-semibold text-gray-900'>
                    Git CLI Cheatsheet
                  </p>
                  <p className='card-description mt-3 text-base text-gray-500'>
                    I was tired of looking up some of my most used git commands
                    so I thought I&apos;d put them all in one place! This Git
                    cheat sheet saves you time when you just can&apos;t remember
                    what a command is or don&apos;t want to use git help in the
                    command line.
                  </p>
                </a>
                <a
                  href='https://hashnode.com/post/how-to-fetch-data-in-react-ckunkpilo0tjsebs19acl2g35'
                  target='_blank'
                  rel='noreferrer'
                  className='block mt-2'
                >
                  <p className='card-description mt-3 text-base text-blue-700 hover:text-blue-900'>
                    Read more...
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* End of Blog Post */}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
