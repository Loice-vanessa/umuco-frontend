import axios from "axios"
class coursesServices{
    static async getAllCourses(){
        try{
            const response = await axios.get("http://localhost:9000/courses");
            console.log("response from courses:",response.data)
            return response.data;

        }catch(e){
            console.log("Error :",e)
        }
    }
}
export default coursesServices