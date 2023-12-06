import { useEffect, useRef } from 'react';
import { m as motion, useInView, useAnimation } from 'framer-motion';

type Props = {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
};

export default function Reveal({ children, width = 'fit-content' }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const revealControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      revealControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ width }} className='overflow-hidden relative'>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0, y: 90 },
          visible: { opacity: 1, scale: 1, y: 0 }
        }}
        initial='hidden'
        animate={revealControls}
        transition={{ delay: 0.25, duration: 0.5 }}>
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 5,
          bottom: 5,
          left: 0,
          right: 0,
          background: '#FE6D2C',
          zIndex: 50
        }}
      />
    </div>
  );
}