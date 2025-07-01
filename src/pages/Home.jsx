import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import NewsLetterBox from '../components/NewsLetterBox';
import OurPolicies from '../components/OurPolicies';
import { motion } from "motion/react"
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      >
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicies />
      <NewsLetterBox />
    </motion.div>
  );
};

export default Home;
