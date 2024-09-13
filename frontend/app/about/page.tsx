'use client';

import Layout from '../components/Layout'; 
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const initPhotoSwipe = async () => {
      const PhotoSwipeLightbox = (await import('photoswipe/lightbox')).default;
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#my-gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
        showHideOpacity: true, // Płynne pojawianie się galerii
        loop: true, // Umożliwia pętlę w galerii
        arrowKeys: true, // Obsługa strzałek na klawiaturze
        clickToCloseNonZoomable: true, // Zamykanie po kliknięciu na tło, gdy obraz nie jest powiększony
      });

      lightbox.init();
    };

    initPhotoSwipe();
  }, []);

  return (
    <Layout>
      <h1>About</h1>
      <p>Twoje prace fotograficzne pojawią się tutaj.</p>
      <Gallery id="my-gallery">
        <Item
          original="/photo1.jpg"
          thumbnail="/photo1.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <a href="/photo1.jpg" ref={ref} onClick={open}>
              <img
                src="/photo1.jpg"
                alt="Zdjęcie 1"
                style={{ maxWidth: '100%' }}
                className="hover-effect"
              />
            </a>
          )}
        </Item>
        <Item
          original="/photo2.jpg"
          thumbnail="/photo2.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <a href="/photo2.jpg" ref={ref} onClick={open}>
              <img
                src="/photo2.jpg"
                alt="Zdjęcie 2"
                style={{ maxWidth: '100%' }}
                className="hover-effect"
              />
            </a>
          )}
        </Item>
        <Item
          original="/photo3.jpg"
          thumbnail="/photo3.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <a href="/photo3.jpg" ref={ref} onClick={open}>
              <img
                src="/photo3.jpg"
                alt="Zdjęcie 3"
                style={{ maxWidth: '100%' }}
                className="hover-effect"
              />
            </a>
          )}
        </Item>
      </Gallery>

      {/* Dodaj style w JSX */}
      <style jsx>{`
        .hover-effect {
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: 1;
        }

        .hover-effect:hover {
          opacity: 0.8; /* Przyciemnienie */
          transform: scale(1.05); /* Delikatne powiększenie */
        }
      `}</style>
    </Layout>
  );
};

export default About;
