import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { JobCard } from "components";
import { useStore } from "context/store";
import { updateJobs } from "context/actions/jobs"
import { Jobs } from "services/jobs/jobs";
import { Container, JobWrapper } from "./styles";

const JobsList = () => {
  const { jobs, dispatch } = useStore();
  const jobsService = new Jobs();
  const fetchJobs = React.useCallback(() => jobsService.FetchJobs({}), []);

  useEffect(() => {
    (async () => {
      const jobsFetched = await fetchJobs();
      dispatch(updateJobs(jobsFetched));
    })();
  }, []);

  return (
    <Container>
      {jobs.map(job => (
        <JobWrapper>
          <JobCard {...job} key={job.id} />
        </JobWrapper>
      ))}
    </Container>
  );
};

export default JobsList;