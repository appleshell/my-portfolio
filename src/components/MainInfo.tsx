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
              Front-End Developer
            </h1>
            <p className={`${styles.heroSubTextSmall} mt-2 text-white-100`}>
              Hi, I'm <span className="text-[#915eff]">Pansen LYU</span>. A
              passionate Front-end Developer from China. I live in Japan now.📍
              Please feel free to contact me.
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
              <a href="https://twitter.com/Linmo_1" target="_blank">
                <svg
                  // t="1701879618246"
                  // class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3592"
                  width="32"
                  height="32"
                >
                  <path
                    d="M962.261333 233.088a386.773333 386.773333 0 0 1-92.586666 95.445333 524.458667 524.458667 0 0 1-21.12 172.288 535.978667 535.978667 0 0 1-66.005334 141.994667 558.122667 558.122667 0 0 1-105.386666 120.32c-40.789333 34.816-89.941333 62.634667-147.456 83.413333-57.514667 20.736-119.04 31.146667-184.576 31.146667-103.253333 0-197.717333-27.648-283.434667-82.858667 13.354667 1.493333 28.202667 2.261333 44.586667 2.261334 85.717333 0 162.090667-26.282667 229.12-78.848a179.968 179.968 0 0 1-107.392-36.864 180.48 180.48 0 0 1-65.152-91.136c12.544 1.92 24.192 2.858667 34.858666 2.858666 16.384 0 32.554667-2.133333 48.554667-6.272a181.589333 181.589333 0 0 1-105.984-63.744 178.346667 178.346667 0 0 1-42.026667-117.418666v-2.261334c25.941333 14.464 53.76 22.272 83.456 23.424a184.32 184.32 0 0 1-59.989333-65.706666A179.84 179.84 0 0 1 99.413333 273.066667c0-33.536 8.405333-64.554667 25.173334-93.141334a523.221333 523.221333 0 0 0 168.277333 136.277334c66.090667 34.133333 136.832 53.034667 212.266667 56.874666a205.098667 205.098667 0 0 1-4.565334-42.282666c0-51.072 18.005333-94.592 54.016-130.56 35.968-36.010667 79.530667-54.016 130.56-54.016 53.333333 0 98.261333 19.413333 134.826667 58.282666a361.898667 361.898667 0 0 0 117.162667-44.586666c-14.08 43.818667-41.130667 77.738667-81.152 101.717333 35.413333-3.84 70.869333-13.312 106.282666-28.586667z"
                    fill="#FFFFFF"
                    fill-opacity=".85"
                    p-id="3593"
                  ></path>
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
