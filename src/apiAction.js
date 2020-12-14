import axios from "axios";





export const userDetail = () => {
    return axios({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: "GET",
      headers: {
          "Content-Type": "application/json",       
        },
     
    });
  };