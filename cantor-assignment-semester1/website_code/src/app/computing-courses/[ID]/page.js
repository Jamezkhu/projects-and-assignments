/* This is what is loaded when a course is pressed - either computing or art*/
import { fetchAllCourseDetails } from "@/app/lib/db";
import styles from "@/app/page.module.css";
export const metadata = {
    title: "Details about this Course",
    description: "Computing and Art and Design Courses at Cantor College",
};
const CourseDetails = async ({ params }) => {
    const { ID } = await params;
    console.log(ID);
    const courseDetails = await fetchAllCourseDetails(ID);
    console.dir(courseDetails)
    return (
        <div>
            <div className={styles.container}>
                <h2>Details about this Course</h2>
            </div>
                <h2 id={styles.h2}>{courseDetails.CourseTitle} - {courseDetails.CourseType}</h2>
                <p id={styles.p}>Course Summary: {courseDetails.CourseSummary}</p>
                <p id={styles.p}>Course Award Name: {courseDetails.CourseAwardName}</p>
                <p id={styles.p}>Ucas Code: {courseDetails.UcasCode}</p>
                <p id={styles.p}>Ucas Points: {courseDetails.UcasPoints}</p>
                <p id={styles.p}>Year of Entry: {courseDetails.YearOfEntry}</p>
                <p id={styles.p}>Mode of Attendance: {courseDetails.ModeOfAttendance}</p>
                <p id={styles.p}>Study Length: {courseDetails.StudyLength}</p>
                <p id={styles.p}>Foundation Year: {courseDetails.HasFoundationYear}</p>
                <p id={styles.p}>No longer recruiting: {courseDetails.NoLongerRecruiting}</p>
        </div>
    );
}
export default CourseDetails;