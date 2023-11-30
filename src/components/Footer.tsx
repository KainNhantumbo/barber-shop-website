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
    <footer>
      <section>
        <section>
          {cuts.map((cut, index) => (
            <p key={index}>{cut}</p>
          ))}
        </section>

        <section>
          <div>
            <div>
              <span>25%</span>
              <p>Ancient form styling men hair, beard and grooming</p>
            </div>
            <div>
              <img
                loading='lazy'
                decoding='async'
                src={logoImage}
                alt='logo image'
              />
              <p>{metadata.appName}</p>
            </div>
          </div>
          <div>
            {navigation.map((column, index) => (
              <div key={index}>
                {column.map((item, index) => (
                  <Link to={item.url} key={index}>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div>
            <Link to={'/'}>Terms & Conditions</Link>
            <Link to={'/'}>Privacy</Link>
          </div>
          <p>All rights to {metadata.appName} &copy;23</p>
          <div>
            <Link to={'/'}>
              <RiLinkedinLine />
            </Link>
            <Link to={'/'}>
              <RiFacebookLine />
            </Link>
            <Link to={'/'}>
              <RiTiktokLine />
            </Link>
            <Link to={'/'}>
              <RiTwitterXLine />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}
