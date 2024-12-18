/* Learning Resources Code */
import styles from '../page.module.css';
import Link from 'next/link';
export const metadata = {
    title: "Learning Resources",
    description: "Learning Resources at Cantor College",
};
const LearningResources = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2>Learning Resources</h2>
            </div>
            <h2 className={styles.h2}>Rules Governing the Use of the Library and Resource Centre</h2>

            <li id={styles.li}><Link href="/learning-resources-introduction">Introduction</Link></li>
            <li id={styles.li}><Link href="/learning-resources-rules">Rules</Link></li>

        </div>
    );
}
export default LearningResources;