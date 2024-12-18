/* Homepage Code */
import styles from './page.module.css';
import Image from 'next/image';
export const metadata = {
  title: "Home: Cantor College",
  description: "Computing Courses at Cantor College",
};
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2>Welcome to the Cantor College Website!</h2>
      </div>
      <h2 className={styles.h2}>About Us</h2>
      <p className={styles.p}>Cantor College was established in 1989 to specialize in Computing and Design.
        At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed.
        Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers.
        Our students have gone on to successful careers in a wide range of industries across the globe.
        Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.</p>

      <div style={{display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(auto-fit, minmax(411px, auto))', margin: '10px'}}>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Cantor College Outside 1.jpg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Cantor College Outside 2.jpg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Cantor Atrium 1.jpg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Cantor Atrium 2.jpg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Cantor Lecture Theatre 1.jpg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Cantor Lecture Theatre 2.JPG'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}
export default Home;