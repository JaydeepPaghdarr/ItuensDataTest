import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from "./action";

const actionCreator = url => dispatch => {
  return new Promise(async () => {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchSuccess(response.data.results));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  });
};
export default actionCreator;