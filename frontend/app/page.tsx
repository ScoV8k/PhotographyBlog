import Image from 'next/image';
import Layout from './components/Layout';
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <Layout>
      <div className={styles.imageContainer}>
        <Image src="/images/photo1.jpg" alt="Photo 1" width={1600} height={900} />
        <Image src="/images/photo2.jpg" alt="Photo 2" width={1600} height={900} />
        <Image src="/images/photo3.jpg" alt="Photo 3" width={1600} height={900} />
      </div>
    </Layout>
  );
};

export default Home;
