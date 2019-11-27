import React from 'react';
import { Route } from 'react-router-dom';
import { JobForm } from 'components';

const JobContainer = () => {
  return (
    <div>
      <Route path="/jobs/create" component={JobForm} />

      {/* <Route exact path = 'jobs/sign' component = {JobForm}/>
        <Route exact path = 'jobs/explore' component = {JobForm}/> */}
    </div>
  );
};

export default JobContainer;
