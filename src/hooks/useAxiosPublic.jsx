import axios from "axios";


const axiosPublic = axios.create({ 
    baseURL: "https://palate-pioneer-server.vercel.app"
 });


const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;