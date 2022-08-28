import axios from "axios"
class coursesServices{
    static async getAllCourses(){
        try{
            const response = await axios.post("http://localhost:9000/courses");
            console.log("response from courses:",response.data)
            return response.data;

        }catch(e){
            console.log("Error :",e)
        }
    }

    static async createCource(data) {
        try {
          const response = await axios.post(
            "http://localhost:9090/tour/create",
            data,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("response of creation:", response.data);
          return response.data;
        } catch (error) {
          console.log("failed !", Error);
        }
      }




}
export default coursesServices