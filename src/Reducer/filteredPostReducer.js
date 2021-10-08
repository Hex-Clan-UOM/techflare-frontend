import {
  FILTERED_POST_LIST_FAIL,
  FILTERED_POST_LIST_REQUEST,
  FILTERED_POST_LIST_SUCCESS,
} from "../Actions/Types/fetchPost";

export const FilteredPostListReducer = (
  state = { filteredPosts: [] },
  action
) => {
  switch (action.type) {
    case FILTERED_POST_LIST_REQUEST:
      return { loading: true, filteredPosts: [] };
    case FILTERED_POST_LIST_SUCCESS:
      return {
        loading: false,
        filteredPosts: action.payload,
      };
    case FILTERED_POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
