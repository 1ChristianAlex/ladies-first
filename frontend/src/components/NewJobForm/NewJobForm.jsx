import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserValidation from 'services/auth/validate';
import { Jobs } from '../../services';
import { useStore } from '../../context/store';
import { createJob } from 'context/actions/jobs';

import { Button, Input, BigIcon, ContentWrapper } from 'components';

import {
  BackgroundClose,
  Container,
  Form,
  ButtonContainer,
  CloseButton
} from './styles';

const NewJobForm = ({ onClose }) => {
  // TODO: Criar um custom hook pra diminuir código
  const { state } = useLocation();
  let { user: userStore, dispatch } = useStore();

  let [inputState, setInputState] = useState({});
  let [errorMensage, seterrorMensage] = useState('');

  const checkPasswordConfirmation = () => {
    const val = UserValidation.checkPasswordConfirmation(
      inputState.password,
      inputState.password_confirm
    );
    if (!val) {
      seterrorMensage('As senhas devem ser iguais!');
      return false;
    }
    return true;
  };

  async function handleRegister(e) {
    try {
      e.preventDefault();

      if (!checkPasswordConfirmation()) {
        return;
      }
      let job = {
        ...inputState
      };

      let newJob = await Jobs.CreateJob(job, userStore.id);
      if (newJob) {
        dispatch(createJob(newJob));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    let { name, value } = e.target;

    setInputState({
      ...inputState,
      [name]: value
    });
  }

  return (
    <>
      <BackgroundClose onClick={onClose} />
      <Container>
        <CloseButton>
          <BigIcon size={20} icon="FaTimes" onClick={onClose} />
        </CloseButton>
        <ContentWrapper title="Criar nova vaga" styledTitle overflow={'unset'}>
          <Form onSubmit={handleRegister}>
            <Input
              placeholder="Título"
              name="title"
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="Descrição"
              name="description"
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="Tipo da vaga"
              name="job_type"
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="Cargo"
              name="categorie"
              onChange={handleChange}
              required={true}
            />
            <ButtonContainer>
              <Button text="Criar Vaga" type="submit" />
              <Button active text="Limpar" type="reset" />
            </ButtonContainer>
          </Form>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default NewJobForm;
