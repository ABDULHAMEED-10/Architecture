import { ServiceSection } from '../ServiceSection/ServiceSection';
import Layout from './../../components/Layout/Layout';
import Awards from './components/AwardsSection/Awards';
import Carousel from './components/Carousel/Carousel';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import HeroSection from './components/heroSection/HeroSection';

const HomePage = () => {
  return (
    <Layout>
      <div className="homepage">
        <HeroSection />
        <ServiceSection />
        <ProjectsSection />
        <Awards />
        <Carousel />
       
      </div>
    </Layout>
  );
};

export default HomePage;
