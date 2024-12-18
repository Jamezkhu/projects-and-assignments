import Image from 'next/image';
import styles2 from "./header.css";
const Header = () => {

    {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: "center", position: 'relative' }}>
                    <Image
                        src={'/images/logo.jpg'}
                        alt='Navbar Image'
                        width='112'
                        height='100'
                        sizes="100vw"
                    />
                </div>
                <p className={styles2.p}>How to find us: Cantor College, Main Street, Sheffield, SC4 2BB</p>
                <p className={styles2.p}>How to contact us: Tel: (01321) 2340 235 Fax: (01321) 2340 236 Email: info@cantorcollege.ac.uk</p>
            </div>
        );
    }
}
export default Header;