import React, { useEffect, useState } from 'react';
import { Button, JobCard, NewJobForm } from 'components';
import {
  MenuContainer,
  MenuNav,
  MenuNavItem,
  Container,
  JobWrapper
} from './styled';
import { useStore } from 'context/store';
import { updateJobs } from 'context/actions/jobs';
import { Jobs } from 'services';

const JobsMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const { jobs, dispatch } = useStore();

  useEffect(() => {
    (async () => {
      const jobsFetched = await Jobs.FetchJobs({});
      dispatch(updateJobs(jobsFetched));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MenuContainer>
      <MenuNav>
        <MenuNavItem>
          <Button
            padding="5px 15px"
            text="Criar Vaga"
            active={false}
            onClick={() => setShowModal(true)}
          />
        </MenuNavItem>
        <MenuNavItem>
          <Button padding="5px 15px" text="Cadastradas" active={false} />
        </MenuNavItem>
        <MenuNavItem>
          <Button padding="5px 15px" text="Descobrir" active={false} />
        </MenuNavItem>
      </MenuNav>
      <Container>
        {jobs.map(job => (
          <JobWrapper key={job.id}>
            <JobCard {...job} />
          </JobWrapper>
        ))}
      </Container>
      {showModal && <NewJobForm onClose={() => setShowModal(false)} />}
    </MenuContainer>
  );
};
export default JobsMenu;
