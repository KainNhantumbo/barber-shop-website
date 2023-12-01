import { Link } from 'react-router-dom';
import { metadata } from '../shared/data';

export default function NotFoundError() {
  return (
    <main className='w-full h-[100vh] grid place-content-center place-items-center'>
      <section className='logo-container'>
        <div className='font-serif text-3xl'>
          <span>{metadata.appName}</span>
        </div>
      </section>
      <section className='flex flex-col items-center gap-5'>
        <h1 className='font-serif font-bold text-center text-6xl leading-tight'>
          404
        </h1>
        <h2 className='font-bold'>Page not found</h2>
        <p className='max-w-screen-mobile text-center font-sans normal-case font-medium'>
          But if you dont change your direction, and if you keep looking, you
          may end up where you are heading.
        </p>
        <Link to={'/'} className='rounded-md font-medium border-solid border-[2px] border-font mt-5 p-3 hover:border-primary_c hover:text-primary_c transition-colors '>
          Take me home
        </Link>
      </section>
    </main>
  );
}
