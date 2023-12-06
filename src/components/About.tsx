import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import SectionWrapper from './SectionWrapper';

interface IServiceCardProps {
  title: string;
  icon: string;
  index: number;
}

const ServiceCard = ({ index, icon, title }: IServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <SectionWrapper idName="about">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>About me</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I’m a skilled Front-End Developer with 6 years of experience,
            specializing in web design and development by Reactjs Nesxtjs and
            Typescript, and having knowledge of Nestjs, MongoDB for fullstack
            development. Adept at improving development efficiency and user
            experience. I am also a team player who thrives in collaborating
            with cross-functional teams to produce outstanding web applications.
            <br />
            My main technology stacks are &nbsp;
            <strong>
              HTML, CSS, Javascript, Typescript, Reactjs, Nextjs, Sass,
              Tailwindcss, Nodejs, Nestjs, MongoDB
            </strong>
            .
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
