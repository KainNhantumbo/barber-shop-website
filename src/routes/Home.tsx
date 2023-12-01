import Layout from '@/components/Layout';
import { reviews } from '@/shared/data';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
      <main className='w-[100%] pt-[80px]'>
        <article className='w-[100%]'>
          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'>
            <section>
              <div>
                <h1 className='group font-serif'>
                  <i className=''>Make</i> <i>unique</i> <i>style</i>
                </h1>
                <div>
                  <h2>Blog</h2>
                  <p>Latest grooming tips & solutions</p>
                </div>
                <img
                  loading='lazy'
                  decoding='async'
                  src=''
                  alt='cutter potion image'
                />
              </div>
              <div>
                <div>
                  <h2>Hair stylist</h2>
                  <p>Lucas Benjamin</p>
                </div>
                <img
                  loading='lazy'
                  decoding='async'
                  src=''
                  alt='stylist image'
                />
              </div>
              <div>
                <div>
                  <img
                    loading='lazy'
                    decoding='async'
                    src=''
                    alt='barber customer chair image'
                  />
                  <p>Saloon service - barbering grooming</p>
                </div>
                <div>
                  <img
                    loading='lazy'
                    decoding='async'
                    src=''
                    alt='cutter tools'
                  />
                  <div>
                    <span>Our special</span>
                    <Link to='/'>Haircuts</Link>
                  </div>
                </div>

                <Link to={''}>
                  <span>Book an apointment</span>
                  <RiArrowRightLine />
                </Link>
              </div>
            </section>
          </section>

          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'>
            <section>
              <div>
                <h2>Unleash your swagger</h2>
                <p>MUch more than just cutting hair.</p>
                <p>Detail and a passion for creating unique styles.</p>
              </div>
              <div>
                <img
                  loading='lazy'
                  decoding='async'
                  src=''
                  alt='cutter oils image'
                />
                <p>Transform yourself</p>
                <p>With the barbercutts</p>
              </div>
            </section>
          </section>

          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'>
            <section>
              <img
                loading='lazy'
                decoding='async'
                src=''
                alt='cutting hair demo image'
              />
              <div>
                <h2>Experience the art of barbering</h2>
                <p>
                  Barbering an ancient art form that old passed down from
                  generation and the styling of men's hair, facial hair and the
                  scalp. The art of barbering has evolved over time and has
                  become a cultural and social experience.
                </p>
                <Link to={'/'}>
                  <span>Get makeover</span>
                  <RiArrowRightLine />
                </Link>
              </div>
            </section>
          </section>

          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'>
            <section>
              <h2>Groome with the best barber</h2>
              <div>
                <div>
                  <h3>The ultimate men's grooming</h3>
                  <p>Our private service will beat the doubt.</p>

                  <Link to={'/'}>
                    <span>Order our product</span>
                    <RiArrowRightLine />
                  </Link>
                </div>
                <div>
                  <div>
                    <p>
                      <i>Product - </i>sharp beard grooming tips
                    </p>
                    <p>
                      <i>Ingredients - </i>glycerin, rosemary, coco-glucoside,
                      alchemilla, betaine.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'>
            <section>
              <div>
                <h2>Transform your boring look</h2>
                <p>
                  A new hair cut can completely transform your face, putting
                  emphasis on different areas of your facial features.
                </p>

                <div>
                  <p>48</p>
                  <p>cities we're in</p>
                </div>
              </div>
              <img
                loading='lazy'
                decoding='async'
                src=''
                alt='well designed hair men model image'
              />
              <img
                loading='lazy'
                decoding='async'
                src=''
                alt='well designed face men model image'
              />
            </section>
          </section>

          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'>
            <section>
              <h2>Making people look awesome</h2>
              <div>
                {reviews.map(({ author, carrier, quote }, index) => (
                  <div key={index}>
                    <h3>{`0${index + 1}}`}</h3>
                    <p>{quote}</p>
                    <div>
                      <p>{author}</p>
                      <span>{carrier}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'></section>

          <section className='w-[100%] max-w-[960px] mx-auto flex items-center justify-center p-4'></section>
        </article>
      </main>
    </Layout>
  );
}
