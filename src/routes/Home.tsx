import { reviews } from '@/shared/data';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { RiArrowRightLine } from 'react-icons/ri';
import barberImage_00 from '@/assets/barber-tools-image-00.jpg';
import barberImage_01 from '@/assets/barber-tools-image-01.jpg';
import barberImage_02 from '@/assets/barber-tools-image-02.jpg';
import barberImage_03 from '@/assets/barber-tools-image-03.jpg';
import barberImage_05 from '@/assets/barber-tools-image-05.jpg';
import barberImage_06 from '@/assets/barber-tools-image-06.jpg';
import barberImage_07 from '@/assets/barber-tools-image-07.jpg';
import barberImage_08 from '@/assets/barber-tools-image-08.jpg';
import barberImage_09 from '@/assets/barber-tools-image-09.jpg';
import barberImage_10 from '@/assets/barber-tools-image-10.jpg';

export default function Home() {
  return (
    <Layout>
      <main className='w-full pt-[80px]'>
        <article className='w-full p-4 mobile:p-8 flex flex-col gap-14'>
          <section className='w-full max-w-[890px] mx-auto flex items-center justify-center'>
            <section className='w-full flex flex-col md:flex-row gap-8 justify-between items-center'>
              <div className='flex flex-col gap-8'>
                <h1 className='font-serif font-bold text-8xl flex flex-col relative  after:absolute  after:content-none after:w-40 after:h-40 after:bg-black after:top-0 after:left-0 after:z-20'>
                  <i className=''>Make</i> <i className='pl-12'>unique</i>{' '}
                  <i>style</i>
                </h1>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold text-xl'>Blog</h2>
                  <p className='font-bold text-sm text-primary_c'>
                    Latest grooming tips & solutions
                  </p>
                </div>
                <img
                  loading='lazy'
                  decoding='async'
                  src={barberImage_05}
                  alt='cutter potion image'
                  className='w-full max-w-[220px] object-cover mx-auto border-primary_a border-b-[4px]'
                />
              </div>
              <div className='flex flex-col gap-8 items-center'>
                <div className='flex flex-col items-center'>
                  <h2 className='text-primary_c font-medium'>Hair stylist</h2>
                  <p className='font-bold text-xl'>Lucas Benjamin</p>
                </div>
                <img
                  loading='lazy'
                  decoding='async'
                  src={barberImage_08}
                  alt='stylist image'
                  className='w-full max-w-[220px] object-cover'
                />
              </div>
              <div className='flex flex-col gap-12 w-full max-w-[200px]'>
                <div className='flex gap-2 items-center'>
                  <img
                    loading='lazy'
                    decoding='async'
                    src={barberImage_10}
                    alt='barber customer chair image'
                  />
                  <p className='font-bold text-sm'>
                    Saloon service - barbering grooming
                  </p>
                </div>
                <div className='flex flex-col gap-12'>
                  <img
                    loading='lazy'
                    decoding='async'
                    src={barberImage_07}
                    alt='cutter tools'
                    className='w-full object-cover'
                  />
                  <div className='flex gap-3 items-center justify-between'>
                    <span className='font-bold max-w-[40px] text-sm'>
                      Our special
                    </span>
                    <Link
                      to='/'
                      className='border-solid border-b-black border-b-[2px] hover:text-primary_c transition-colors'>
                      Haircuts
                    </Link>
                  </div>
                </div>

                <Link
                  to={'/'}
                  className='w-fit flex flex-nowrap items-center gap-2 text-sm bg-black  hover:bg-primary_c transition-colors p-2 font-semibold text-white'>
                  <span>Book an apointment</span>
                  <RiArrowRightLine />
                </Link>
              </div>
            </section>
          </section>

          <section className='w-full max-w-[890px] mx-auto flex items-center justify-center'>
            <section className='w-full flex flex-col md:flex-row gap-8 items-center justify-end'>
              <div className='w-full flex flex-col gap-3 max-w-[320px]'>
                <h2 className='text-4xl font-bold font-serif'>
                  Unleash your swagger
                </h2>
                <p>Much more than just cutting hair.</p>
                <p>Detail and a passion for creating unique styles.</p>
              </div>
              <div className='relative w-[200px] h-[200px]'>
                <img
                  loading='lazy'
                  decoding='async'
                  src={barberImage_06}
                  alt='cutter swagger style image'
                  className='w-full object-cover'
                />
                <p className='font-semibold absolute -top-8 left-0 text-primary_c'>
                  With the barbercutts
                </p>
                <p className='font-semibold rotate-[270deg]  text-primary_c absolute -left-[105px] bottom-[calc(50%_-_25px)]'>
                  Transform yourself
                </p>
              </div>
            </section>
          </section>

          <section className='w-full max-w-[890px] mx-auto flex items-center justify-center '>
            <section className='w-full flex flex-col md:flex-row items-center md:items-start gap-8 justify-between'>
              <img
                loading='lazy'
                decoding='async'
                src={barberImage_01}
                alt='cutting hair demo image'
                className='w-full h-full max-w-[380px] object-cover  border-primary_c border-l-[4px]'
              />
              <div className='w-full max-w-[420px] flex flex-col gap-5'>
                <h2 className='text-4xl font-bold font-serif'>
                  Experience the art of barbering
                </h2>
                <p>
                  Barbering an ancient art form that old passed down from
                  generation and the styling of men's hair, facial hair and the
                  scalp. The art of barbering has evolved over time and has
                  become a cultural and social experience.
                </p>
                <Link
                  to={'/'}
                  className='w-full flex flex-nowrap items-center gap-2 hover:text-primary_c transition-colors'>
                  <span className='font-semibold'>Get makeover</span>
                  <RiArrowRightLine className='stroke-1' />
                </Link>
              </div>
            </section>
          </section>

          <section
            className={`relative w-full h-fit mx-auto flex items-center justify-center`}>
            <section className='w-full relative max-w-[890px] mx-auto text-white z-10 flex flex-col gap-5 items-center justify-center py-4 md:px-8'>
              <img
                src={barberImage_00}
                alt='barber tools image'
                className='absolute w-full object-cover top-0 left-00 -z-10 brightness-[0.3]  grayscale-[90%]'
              />
              <h2 className='text-2xl mobile-x:text-4xl font-bold font-serif base-border max-w-[320px] text-center'>
                Groome with the best barber
              </h2>
              <div className='w-full bg-primary_c md:bg-transparent py-6 px-4 md:px-12  flex flex-col sm:flex-row gap-8 justify-between items-center font-medium'>
                <div className='w-full flex flex-col gap-3 max-w-[210px]'>
                  <h3 className='text-2xl font-semibold font-serif base-border'>
                    The ultimate men's grooming
                  </h3>
                  <p>Our private service will beat the doubt.</p>

                  <Link
                    to={'/'}
                    className='w-fit flex flex-nowrap items-center gap-2 text-sm bg-primary_a  hover:bg-primary_c transition-colors p-2 font-semibold'>
                    <span>Order our product</span>
                    <RiArrowRightLine />
                  </Link>
                </div>
                <div className='w-full flex flex-col gap-4 max-w-[210px] font-semibold'>
                  <p className='relative border-solid border-[#ffffff4c] border-t-[1px] border-b-[1px] before:content-none before:absolute before:top-0 before:left-0 before:w-[10px] before:h-[30px] before:bg-[#ffffff4c] before:z-20 md:pl-14'>
                    <i className='text-[#ffffff8c]'>Product - </i>sharp beard
                    grooming tips
                  </p>
                  <p className='border-solid border-[#ffffff4c] border-b-[1px] pb-1'>
                    <i className='text-[#ffffff8c]'>Ingredients - </i>glycerin,
                    rosemary, coco-glucoside, alchemilla, betaine.
                  </p>
                </div>
              </div>
            </section>
          </section>

          <section className='w-full max-w-[890px] mx-auto flex items-center justify-center md:mt-12'>
            <section className='w-full flex flex-col md:flex-row items-center gap-3 justify-between'>
              <div className='w-full max-w-[280px] flex flex-col gap-4'>
                <h2 className='font-bold font-serif text-4xl base-border border-black-dark'>
                  Transform your boring look
                </h2>
                <p className='normal-case font-medium'>
                  A new hair cut can completely transform your face, putting
                  emphasis on different areas of your facial features.
                </p>

                <div className='flex flex-nowrap items-center gap-2'>
                  <p className='font-serif font-bold text-6xl'>48</p>
                  <p className='max-w-[80px] font-semibold'>cities we're in</p>
                </div>
              </div>
              <img
                loading='lazy'
                decoding='async'
                src={barberImage_03}
                alt='well designed hair men model image'
                className='w-full max-w-[250px] object-cover '
              />
              <img
                loading='lazy'
                decoding='async'
                src={barberImage_02}
                alt='well designed face men model image'
                className='w-full max-w-[200px] object-cover  border-primary_b border-t-[4px]'
              />
            </section>
          </section>

          <section className='w-full max-w-[890px] mx-auto flex items-center justify-center'>
            <section className='flex flex-col items-center gap-12'>
              <h2 className='font-bold font-serif text-5xl base-border border-t-[3px] py-4 border-black-dark'>
                Making people look awesome
              </h2>
              <div className='w-full  flex flex-col sm:flex-row gap-6 justify-between items-center'>
                <div className='w-full max-w-[280px] flex flex-col gap-4'>
                  <h3 className='font-bold text-8xl'>5.6K</h3>
                  <p className='font-semibold'>
                    Satisfied customers who always come back to us.
                  </p>
                </div>
                <div className='w-full max-w-[280px] flex flex-col gap-4'>
                  <h3 className='font-bold text-8xl'>28+</h3>
                  <p className='font-semibold'>
                    Years of love and experience in the industry.
                  </p>
                </div>
              </div>
              <div className='w-full flex flex-wrap justify-around items-center gap-3 '>
                {reviews.map(({ author, carrier, quote }, index) => (
                  <div
                    key={index}
                    className='w-full max-w-[240px] h-56 p-4 flex flex-col justify-between bg-foreground gap-3'>
                    <h3 className='font-bold text-xl'>{`0${index + 1}`}</h3>
                    <p className='text-sm font-medium'>{quote}</p>
                    <div className=''>
                      <p className='font-medium text-sm border-t-[2px] border-solid border-t-primary_a pt-1'>
                        {author},{' '}
                        <span className='text-sm normal-case'>{carrier}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className='w-full max-w-[890px] mx-auto flex items-center justify-center'>
            <section className='w-full flex flex-col sm:flex-row items-center bg-black gap-4 '>
              <img
                src={barberImage_09}
                alt='barber seats'
                className='max-w-[280px] w-[300px] h-[300px] sm:w-full sm:h-auto object-cover'
              />
              <div className='flex flex-col text-white w-full gap-4 p-4'>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-4xl font-serif font-bold'>
                    Book a Seat Now
                  </h2>
                  <p className='font-medium'>
                    Fill out this form and get out your seat.
                  </p>
                </div>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className='w-full flex flex-col text-white font-medium  gap-4'>
                  <input
                    type='date'
                    defaultValue={'2023-12-07'}
                    className='outline-none max-w-md p-2 bg-primary_c bg-opacity-60'
                  />
                  <input
                    type='time'
                    defaultValue={'15:40'}
                    className='outline-none max-w-md p-2 bg-primary_c bg-opacity-60'
                  />
                  <input
                    type='number'
                    placeholder='Number of people'
                    min={1}
                    max={20}
                    maxLength={2}
                    className='outline-none max-w-md p-2 bg-primary_c bg-opacity-60'
                  />
                  <button
                    type='submit'
                    className='outline-none py-2 px-3 flex gap-3 items-center w-fit bg-primary_c bg-opacity-60 hover:bg-primary_a hover:text-font transition-colors'>
                    <span>Book now</span>
                    <RiArrowRightLine/>
                  </button>
                </form>
              </div>
            </section>
          </section>
        </article>
      </main>
    </Layout>
  );
}
