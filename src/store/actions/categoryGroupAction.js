import axios from 'axios'
import {BaseUrl} from '../../service/ApiEndpoint'

import {
  CATEGORYGROUP_LIST_FAILED,
  CATEGORYGROUP_LIST_REQUEST,
  CATEGORYGROUP_LIST_SUCCESS,
} from '../constants/categoryGroupConstant'

export const CategoryGroupListAction =
  (name = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: CATEGORYGROUP_LIST_REQUEST,
      })

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      // const config = {
      //   headers: {
      //     "content-type": "application/json",
      //     Authorization: `Bearer ${userInfo.token}`,
      //   },
      // };

      const { data } = await axios.get(`${BaseUrl}/category-group/?name=${name}`)

      dispatch({
        type: CATEGORYGROUP_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CATEGORYGROUP_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


