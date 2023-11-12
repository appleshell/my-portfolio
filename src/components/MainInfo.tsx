import { styles } from '../style';
import { Tech } from '.';

const Hero = () => {
  return (
    <section className="relative w-full md:h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 pt-[150px] max-w-7xl mx-auto flex md:flex-row flex-col-reverse items-start gap-5`}
      >
        <div className="flex gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadTextSmall}`}>
              Front-End React Developer
            </h1>
            <p className={`${styles.heroSubTextSmall} mt-2 text-white-100`}>
              Hi, I'm <span className="text-[#915eff]">Pansen LYU</span>. A
              passionate Front-end React Developer based in Sendai, Japan.📍
            </p>
            <div className="flex justify-start items-center gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/pansen-lyu-878120283/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-linkedin"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a href="https://github.com/appleshell" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-github"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="head-img-border flex bg-[url('/src/assets/me.jpg')] bg-no-repeat bg-cover bg-center w-[18rem] h-[18rem] md:w-[32rem] self-center"></div>
      </div>
      <Tech />
    </section>
  );
};

export default Hero;
