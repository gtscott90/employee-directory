import axios from "axios";
// Export an object with a "search" method that searches the Giphy API for the passed query
const APIurl = "https://randomuser.me/api/?results=50";

export default {
  search: function(query) {
    return axios.get(APIurl);
  }
};