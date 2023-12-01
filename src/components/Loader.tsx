import { CircleLoader } from 'react-spinners';

export default function Loader() {
  return (
    <section className='w-[100vw] h-[100vh] grid place-content-center place-items-center'>
      <section className='w-full h-full flex flex-col font-medium gap-5 items-center p-[calc(25%_-_1px)] text-lg'>
        <h3 className='text-center'>Preparing your swagger style...</h3>
        <CircleLoader
          color='#64382B'
          cssOverride={{
            display: 'block',
            background: `transparent})`
          }}
        />
      </section>
    </section>
  );
}
