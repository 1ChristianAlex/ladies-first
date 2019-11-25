export const CREATE_JOB = "CREATE_JOB";
export const UPDATE_JOBS = "UPDATE_JOBS";

export const initialState = {
  jobs: []
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_JOBS:
      return {
        jobs: [...action.payload]
      };
    case CREATE_JOB:
      return {
        jobs: [action.payload, ...state.jobs]
      };
    default:
      return state;
  }
};
