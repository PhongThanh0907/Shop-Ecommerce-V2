import { useEffect } from "react";
import { axiosClient } from "../services/axiosClient";
import { FETCH_ACTIONS } from "./action";
import { useReducer } from "./useReducer";


function fetchReducer(state: any, action: any) {
  switch (action.type) {
    case FETCH_ACTIONS.FETCHAPI_REQUEST:
      return { ...state, isLoading: action.isLoading };
    case FETCH_ACTIONS.FETCHAPI_SUCCESS:
    case FETCH_ACTIONS.FETCHAPI_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
}

export const useFetch = (url: string, typeProduct?: any, id?: any) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });
  useEffect(() => {
    (async () => {
      dispatch({
        type: FETCH_ACTIONS.FETCHAPI_REQUEST,
        isLoading: true,
      });
      try {
        const data = await axiosClient(url);
        dispatch({
          type: FETCH_ACTIONS.FETCHAPI_SUCCESS,
          isLoading: false,
          error: null,
          data: data,
        });
      } catch (err) {
        dispatch({
          type: FETCH_ACTIONS.FETCHAPI_ERROR,
          isLoading: false,
          error: err,
          data: [],
        });
      }
    })();
  }, [url]);

  return { ...state };
};
