import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../style';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-10 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
          to="/"
          className="flex items-center gap-2"
        >
          <img className="w-12 h-12 object-contain" src={logo} alt="logo" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Pansen LYU &nbsp;
            <span className="sm:block hidden">| Front-end</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${id}`} onClick={() => setActive(title)}>
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={showMenu ? close : menu}
            onClick={() => setShowMenu(!showMenu)}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />

          <div
            className={`${
              showMenu ? 'flex' : 'hidden'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  className={`${
                    active === title ? 'text-white' : 'text-secondary'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  <a href={`#${id}`} onClick={() => setActive(title)}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
