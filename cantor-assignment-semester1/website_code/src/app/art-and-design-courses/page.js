/* Art and Design Courses Code */
import Link from "next/link";
import styles from '../page.module.css';
import { fetchArtAndDesignCourses } from "../lib/db";
export const metadata = {
    title: "Art and Design Courses",
    description: "Art and Design Courses at Cantor College",
};
const ArtAndDesignCourses = async () => {
    const courses = await fetchArtAndDesignCourses();

    return (
        <div>
            <div className={styles.container}>
                <h2>Art and Design Courses</h2>
            </div>

            <p className={styles.p}>The College is an internationally connected creative community of diverse disciplines housed under one roof. 
            We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.</p>

            <h2 className={styles.h2}>Undergraduate Art and Design Courses</h2>
            
            <ul>
                {courses.map((courses, index) => (
                    <li className={styles.li} key={index}>
                        <Link href={`./computing-courses/${courses.ID}`}>{courses.CourseTitle}</Link>
                    </li>
                ))}
            </ul>

            <p className={styles.p}>The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. 
            You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.</p>
            
            <p className={styles.p}>You'll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. 
            At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.</p>
        </div>
    );
}
export default ArtAndDesignCourses;