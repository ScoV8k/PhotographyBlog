import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contactContent}>
        <h1>Contact</h1>
        <p>I am a fashion photographer based in Warsaw, Poland.</p>
        <p>I am ready to travel anywhere in the world, so do not hesitate to contact me!</p>
        <p>instagram: www.instagram.com/helenabromboszcz</p>
        <p>facebook: www.facebook.com/photographybyhelenabromboszcz</p>
        <p>behance: www.behance.net/helenabromboszcz</p>
        <p>e-mail: info@helenabromboszcz.com</p>
      </div>
      <div className={styles.footer}>
        <p>Berbezons spółka z ograniczoną odpowiedzialnością...</p>
      </div>
    </Layout>
  );
};

export default Contact;
