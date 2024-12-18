/* Facilities Code */
import styles from '../page.module.css';
import Image from 'next/image';
export const metadata = {
    title: "Facilities",
    description: "Facilities at Cantor College",
};
const Facilities = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2>Facilities</h2>
            </div>
            <p className={styles.p}>The College is located in the attractive and pleasantly refurbished Building.
                The building houses computing laboratories, and lecture/tutorial rooms.
                It has its own catering facilities and student work areas.
                There is also a car park to the back of the building.</p>

            <p className={styles.p}>Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.</p>

            <p className={styles.p}>Facilities include:</p>
            <ul>
                <li id={styles.li}>Wi-fi Technology</li>
                <li id={styles.li}>Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
                <li id={styles.li}>Specialist faculty facilities</li>
                <li id={styles.li}>A double height lecture theatre at first and second floor level</li>
                <li id={styles.li}>Dramatic three-storey glass open atrium</li>
                <li id={styles.li}>Meeting rooms</li>
                <li id={styles.li}>Office accommodation</li>
                <li id={styles.li}>Specialist IT facilities</li>
                <li id={styles.li}>Reception desk area</li>
                <li id={styles.li}>Catering outlet</li>
                <li id={styles.li}>Parking for disabled badge holders</li>
                <li id={styles.li}>Cycle racks</li>
                <li id={styles.li}>Gallery</li>
            </ul>

            <div style={{display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(auto-fit, minmax(411px, auto))', margin: '10px'}}>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Playstation Lab 1.jpg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Playstation Lab 2.jpg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Art Gallery 1.jpeg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Cantor Atrium 3.png'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Lab Room 1.jpeg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', height: '350px' }}>
          <Image src={'/images/Lab Room 2.jpeg'} alt='Navbar Image' fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>
        </div>
    );
}
export default Facilities;