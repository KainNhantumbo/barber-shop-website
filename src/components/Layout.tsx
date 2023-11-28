import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <MotionConfig reducedMotion='user'>
      <LazyMotion strict={true} features={domAnimation}>
        <Header />
        {children}
        <Footer />
      </LazyMotion>
    </MotionConfig>
  );
}
