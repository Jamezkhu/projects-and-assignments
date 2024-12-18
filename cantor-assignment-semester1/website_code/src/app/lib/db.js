import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA
})

const fetchUndergradComputingCourses = async () => {
    try{
        const query = "SELECT * FROM courses WHERE CourseSubject = 'Computing' AND CourseType = 'Undergraduate'";
        const [rows, fields] = await connection.execute(query);
        return rows;
    } catch (error){
        console.error("Database Error:", error)
        throw new Error("Failed to fetch data")
    };
}

const fetchPostgradComputingCourses = async () => {
    try{
        const query = "SELECT * FROM courses WHERE CourseSubject = 'Computing' AND CourseType = 'Postgraduate'";
        const [rows, fields] = await connection.execute(query);
        return rows;
    } catch (error){
        console.error("Database Error:", error)
        throw new Error("Failed to fetch data")
    };
}

const fetchArtAndDesignCourses = async () => {
    try{
        const query = "SELECT * FROM courses WHERE CourseSubject = 'Art and Design'";
        const [rows, fields] = await connection.execute(query);
        return rows;
    } catch (error){
        console.error("Database Error:", error)
        throw new Error("Failed to fetch data")
    };
}

const fetchAllCourseDetails = async (ID) => {
    try{
        const query = "SELECT * FROM courses WHERE ID = ?";
        const [rows] = await connection.execute(query, [ID]);
        return rows[0] || null;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch data.")
    }
}
export {fetchUndergradComputingCourses, fetchPostgradComputingCourses, fetchArtAndDesignCourses, fetchAllCourseDetails};