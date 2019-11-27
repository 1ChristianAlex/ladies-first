import React, { useState, useEffect } from 'react';
import { SearchBar, JobCard } from 'components';
import { Jobs } from 'services';
import { AdsWrapper } from './styles';

const SearchSidebar = () => {
  const [jobs, setJobs] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchJobs = React.useCallback(() => Jobs.FetchJobs({}), []);

  useEffect(() => {
    (async () => {
      const jobsFetch = await fetchJobs();
      setJobs(jobsFetch);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar />
      <AdsWrapper>
        {jobs &&
          jobs.map(job => {
            return <JobCard {...job} key={job.id} />;
          })}
      </AdsWrapper>
    </>
  );
};

SearchSidebar.defaultProps = {};

SearchSidebar.propTypes = {};

export default SearchSidebar;
