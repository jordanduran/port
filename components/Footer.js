import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const navigation = [
    {
      name: 'Email',
      href: 'mailto:jordanduranm@gmail.com',
      icon: () => <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jordan-duran-m/',
      target: '_blank',
      icon: () => <FontAwesomeIcon icon={faLinkedinIn} />,
    },

    {
      name: 'GitHub',
      href: 'https://github.com/jordanduran/',
      target: '_blank',
      icon: () => <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jordan_duran/',
      target: '_blank',
      icon: () => <FontAwesomeIcon icon={faInstagram} />,
    },
  ];

  return (
    <footer className='bg-blue-700'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target}
              className='footer-social-links text-white hover:text-gray-300 fa-lg'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-center text-base text-white'>
            &copy; Jordan Duran - 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
