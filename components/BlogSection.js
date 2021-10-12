import Image from 'next/image';
import reactFetchingDataPic from '../assets/reactFetchingDataPic.jpeg';

const posts = [
  {
    title: 'How to Fetch Data in React',
    href: 'https://hashnode.com/post/how-to-fetch-data-in-react-ckunkpilo0tjsebs19acl2g35',
    category: {
      name: 'Article',
      href: 'https://hashnode.com/post/how-to-fetch-data-in-react-ckunkpilo0tjsebs19acl2g35',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2021-10-12',
    imageUrl: reactFetchingDataPic,
    readingTime: '4 min',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: 'https://hashnode.com/@jordanduran',
    category: { name: 'Article', href: 'https://hashnode.com/@jordanduran' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: 'https://hashnode.com/@jordanduran',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: 'https://hashnode.com/@jordanduran',
    category: { name: 'Article', href: 'https://hashnode.com/@jordanduran' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: 'https://hashnode.com/@jordanduran',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

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
                src={reactFetchingDataPic}
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
                src={reactFetchingDataPic}
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

          {/* Start of Blog Post 3 */}
          <div className='blog-card flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <Image
                className='h-48 w-full object-cover'
                src={reactFetchingDataPic}
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
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
