import { CREATE_JOB, UPDATE_JOBS } from "../reducer/jobs";

export const createJob = job => ({
  type: CREATE_JOB,
  payload: job
});

export const updateJobs = jobs => ({
  type: UPDATE_JOBS,
  payload: jobs
});
