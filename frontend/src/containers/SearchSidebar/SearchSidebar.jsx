import React, { useState, useEffect } from 'react';
import { SearchBar, JobCard } from 'components';
import { Jobs } from 'services/jobs/jobs';
import { AdsWrapper } from './styles';

const SearchSidebar = () => {
  const jobsService = new Jobs();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      const jobsFetch = await jobsService.FetchJobs({});
      setJobs(jobsFetch);
      console.log(jobsFetch);
    })();
  }, []);
  return (
    <>
      <SearchBar />
      <AdsWrapper>
        {jobs.map(job => {
          return <JobCard {...job} key={job.id} />;
        })}
      </AdsWrapper>
    </>
  );
};

SearchSidebar.defaultProps = {};

SearchSidebar.propTypes = {};

export default SearchSidebar;
