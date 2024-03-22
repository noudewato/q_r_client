import {
  CATEGORY_DETAILS_FAILED,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAILED,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from '../constants/categoryConstant'
import axios from 'axios'
import {BaseUrl} from '../../service/ApiEndpoint'


export const CategoriesListAction =
  (categoryGroup = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: CATEGORY_LIST_REQUEST,
      })

      const { data } = await axios.get(`${BaseUrl}/category/?categoryGroup=${categoryGroup}`)

      dispatch({
        type: CATEGORY_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CATEGORY_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const CategoryDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_DETAILS_REQUEST,
    })

    const { data } = await axios.get(`${BaseUrl}/category/${id}`)

    dispatch({
      type: CATEGORY_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}


