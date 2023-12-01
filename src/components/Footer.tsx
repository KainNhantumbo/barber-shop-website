import {
  RiFacebookLine,
  RiLinkedinLine,
  RiTiktokLine,
  RiTwitterXLine
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/icon.png';
import { navigation, cuts, metadata } from '../shared/data';

export default function Footer() {
  return (
    <footer className='w-full bg-black-dark flex flex-col items-center justify-center p-3'>
      <section className='w-full flex flex-col gap-8 text-[#ffffffcc] font-medium max-w-[890px]'>
        <section className='w-full flex flex-row font-serif justify-between base-border py-1 sm:py-4 gap-2'>
          {cuts.map((cut, index) => (
            <p key={index} className='text-xl mobile-x:text-2xl sm:text-4xl'>
              {cut}
            </p>
          ))}
        </section>

        <section className='w-full flex flex-col md:flex-row gap-6 text-center mobile-x:text-left mobile-x:gap-4 items-center justify-around'>
          <div className='w-full max-w-[240px] border-[2px] border-solid border-[#ffffff4c] p-5 flex flex-col gap-4 rounded-sm'>
            <div className='w-full flex gap-4 mx-auto items-center border-solid border-[#ffffff4c] border-b-2 pb-5 justify-between'>
              <span className='font-bold text-2xl'>25%</span>

              <p className='text-xs normal-case'>
                Ancient form styling men hair, beard and grooming
              </p>
            </div>
            <div className='w-full flex items-center gap-2'>
              <img
                loading='lazy'
                decoding='async'
                src={logoImage}
                alt='logo image'
                className='w-full h-full max-w-[40px] max-h-[40px]'
              />
              <p className='font-bold text-primary_a font-serif text-3xl'>
                {metadata.appName}
              </p>
            </div>
          </div>
          <div className='w-full flex mobile-x:flex-wrap flex-col  mobile-x:justify-around mobile-x:flex-row justify-center mobile-x:items-center gap-4'>
            {navigation.map((column, index) => (
              <div key={index} className='flex flex-col gap-2'>
                {column.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className='px-2 transition-colors rounded-sm hover:bg-primary_c'>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className='w-full flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center border-dotted border-t-[3px] border-[#ffffff4c] pt-4'>
          <div className='flex gap-3 items-center flex-wrap'>
            <Link to={'/'}>Terms & Conditions</Link>
            <Link to={'/docs/privacy-policy'}>Privacy</Link>
          </div>
          <p>All rights to {metadata.appName} &copy; 23</p>
          <div className='flex gap-2 items-center'>
            <Link
              to={'/'}
              className='grid place-content-center p-2 rounded-md border-solid border-[2px] border-[#ffffff4c] hover:bg-primary_c group transition-colors'>
              <RiLinkedinLine className='stroke-1  fill-white stroke-white' />
            </Link>
            <Link
              to={'/'}
              className='grid place-content-center p-2 rounded-md border-solid border-[2px] border-[#ffffff4c] hover:bg-primary_c group transition-colors'>
              <RiFacebookLine className='stroke-1  fill-white stroke-white' />
            </Link>
            <Link
              to={'/'}
              className='grid place-content-center p-2 rounded-md border-solid border-[2px] border-[#ffffff4c] hover:bg-primary_c group transition-colors'>
              <RiTiktokLine className='  fill-white stroke-white' />
            </Link>
            <Link
              to={'/'}
              className='grid place-content-center p-2 rounded-md border-solid border-[2px] border-[#ffffff4c] hover:bg-primary_c group transition-colors'>
              <RiTwitterXLine className='  fill-white stroke-white' />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}
