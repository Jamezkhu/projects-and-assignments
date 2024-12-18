/* Computing Courses Code */
import Link from "next/link";
import styles from "../page.module.css"
import { fetchPostgradComputingCourses, fetchUndergradComputingCourses } from "../lib/db";
export const metadata = {
  title: "Computing Courses",
  description: "Computing Courses at Cantor College",
};
const ComputingCourses = async () => {
  const undergradcourses = await fetchUndergradComputingCourses();
  const postgradcourses = await fetchPostgradComputingCourses();

  return (
    <div>
      <div className={styles.container}>
        <h2>Computing Courses</h2>
      </div>

      <p className={styles.p}>The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. 
      At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.</p>

      <h2 className={styles.h2}>Undergraduate Computing Courses</h2>

      <ul>
        {undergradcourses.map((undergradcourses, index) => (
          <li className={styles.li} key={index}>
            <Link href={`./computing-courses/${undergradcourses.ID}`}>{undergradcourses.CourseTitle}</Link>
          </li>
        ))}
      </ul>
      
      <h2 className={styles.h2}>Postgraduate Computing Courses</h2>

      <ul>
        {postgradcourses.map((postgradcourses, index) => (
          <li className={styles.li} key={index}>
            <Link href={`./computing-courses/${postgradcourses.ID}`}>{postgradcourses.CourseTitle}</Link>
          </li>
        ))}
      </ul>

      <p className={styles.p}>The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. 
      It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.</p>

      <p className={styles.p}>The courses are British Computer Society accredited and are highly relevant to modern industry. 
      They are designed to prepare students for professional occupations in Computing and related fields. 
      Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.</p>
    </div>
  );
}
export default ComputingCourses;