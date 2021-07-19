import axios from "axios";
import { AUTHENTICATE_USER } from "../types";

export const userAuth = (u) => async (dispatch) => {
  try {
    const response = await axios.put("api/users/auth", u);
    const { user } = response.data;
    return dispatch({ type: AUTHENTICATE_USER, payload: user });
  } catch (error) {
    console.log(error);
  }
};

export const authenticateUserWithGoogle = (googleProfile) => async (dispatch) => {
  try {
    const user = {
      id: googleProfile.googleId,
      firstName: googleProfile.givenName,
      lastName: googleProfile.familyName,
      imageLink: googleProfile.imageUrl,
    };

    await axios.put("api/users/auth", user);
    return dispatch({ type: AUTHENTICATE_USER, payload: user });
  } catch (error) {
    console.log(error);
  }
}