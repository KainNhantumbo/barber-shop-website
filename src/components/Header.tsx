import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { metadata } from '@/shared/data';
import logoImage from '@/assets/icon.png';
import { RiArrowRightLine, RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { m as motion, AnimatePresence } from 'framer-motion';
import { useHideHeader } from '@/hooks/useHideHeader';
import { useInnerWindowSize } from '@/hooks/useInnerWindowSize';

const navigation = ['services', 'locations', 'galery', 'shop', 'about'];

export default function Header() {
  const { isHeader, toggleHeader } = useHideHeader(768);
  const { width: windowWidth } = useInnerWindowSize();

  return (
    <header
      className={
        'w-full z-50 h-[52px] fixed top-0 left-0  bg-background border-solid border-b-[2px] border-primary_c md:px-4 font-medium text-[.95rem]'
      }>
      <div className='w-full mx-auto xl:max-w-[1200px]'>
        <AnimatePresence>
          {isHeader ? (
            <motion.nav
              role='main'
              initial={{ translateX: -windowWidth }}
              animate={{ translateX: 0 }}
              transition={{ duration: 0.25 }}
              exit={{
                translateX: -windowWidth,
                transition: { duration: 0.25 }
              }}
              style={{ display: isHeader ? 'flex' : 'none' }}
              className='w-[100vw] h-[100vh] md:w-fit md:mx-auto md:h-[50px] md:px-8 lg:px-24 relative flex flex-col md:flex-row items-center md:justify-center gap-3  bg-background pt-14  md:p-0 md:static text-2xl md:text-lg md:border-solid md:border-r-[2px] md:border-primary_c md:border-l-[2px]'>
              {navigation.map((item, i) => (
                <Link
                  to={'/'}
                  key={i}
                  onClick={toggleHeader}
                  className='w-full md:w-fit transition-colors rounded-sm hover:bg-primary_c md:hover:bg-background hover:text-white md:hover:text-primary_c flex md:block items-center gap-4 justify-between flex-row-reverse px-7 md:px-0'>
                  <RiArrowRightLine className='md:hidden' />
                  <span className=''>{item}</span>
                </Link>
              ))}

              <Link
                to={'/'}
                onClick={toggleHeader}
                className='md:hidden w-fit transition-colors  bg-black  active:bg-primary_c px-4 py-2 mt-4 text-white self-center place-self-center'>
                <span className=''>Contact Us</span>
              </Link>
            </motion.nav>
          ) : null}
        </AnimatePresence>

        <div className='absolute top-2 left-5 lg:left-[calc(50%_-_480px)]  w-fit flex  items-center gap-1'>
          <img
            src={logoImage}
            alt='logo image'
            className='w-full h-full max-w-[30px] max-h-[30px] relative -top-[1px]'
          />
          <Link to={'/'} className='base-link'>
            <span className='font-semibold font-serif text-2xl text-primary_c'>
              {metadata.appName}
            </span>
          </Link>
        </div>

        <div className='hidden md:flex absolute top-2 sm:right-[calc(50%_-_380px)] lg:right-[calc(50%_-_480px)] w-fit flex-col md:flex-row items-center gap-2 bg-black px-2 py-1  hover:bg-primary_c text-white hover:text-white'>
          <Link to={'/'}>
            <span className='text-md font-semibold'>Contact Us</span>
          </Link>
        </div>

        <motion.button
          onClick={toggleHeader}
          whileTap={{ scale: 0.8 }}
          title={`${isHeader ? 'Close menu drawer' : 'Open menu drawer'}`}
          className={clsx(
            'base-corner-button rounded-sm fixed top-2 right-5 border-none  md:hidden',
            {
              'bg-primary_c-light dark:bg-primary_c-dark ': isHeader
            }
          )}>
          {!isHeader ? (
            <RiMenuLine
              className={
                'stroke-font-light dark:stroke-font-dark w-5 h-5 pointer-events-none'
              }
            />
          ) : (
            <RiCloseLine
              className={
                ' fill-white dark:fill-white-dark w-5 h-5 pointer-events-none'
              }
            />
          )}
        </motion.button>
      </div>
    </header>
  );
}
