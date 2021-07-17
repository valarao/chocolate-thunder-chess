import axios from "axios";
import { USER_AUTH } from "../types";

export const userAuth = (u) => async (dispatch) => {
  try {
    const response = await axios.put("api/users/auth", u);
    const { user } = response.data;
    return dispatch({ type: USER_AUTH, payload: user });
  } catch (error) {
    console.log(error);
  }
};
