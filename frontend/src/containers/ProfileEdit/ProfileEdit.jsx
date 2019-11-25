import React, { useEffect, useState } from "react";

import { Input, DatePicker, FileSelector, Button } from "components";
import { useStore } from "context/store";
import UserValidation from "services/auth/validate";
import { Auth } from "services/auth";
import { updateUser } from "context/actions/user";
// import { updateJobs } from "context/actions/jobs"
// import { Jobs } from "services/jobs/jobs";
import {
  Container,
  JobWrapper,
  Error,
  Form,
  ButtonContainer,
  Column
} from "./styles";

const ProfileEdit = () => {
  const { user, form, dispatch } = useStore();
  let [inputState, setInputState] = useState({ ...user });
  let [errorMensage, seterrorMensage] = useState("");

  useEffect(() => {
    setInputState({ ...user });
  }, [user]);

  const checkPasswordConfirmation = () => {
    const val = UserValidation.checkPasswordConfirmation(
      inputState.password,
      inputState.password_confirm
    );
    if (!val) {
      seterrorMensage("As senhas devem ser iguais!");
      return false;
    }
    return true;
  };

  const handleRegister = async e => {
    try {
      e.preventDefault();

      if (!checkPasswordConfirmation()) {
        return;
      }
      let userInfo = {
        ...inputState,
        image: form.file || false,
        birthday: form.birthday
      };
      const auth = new Auth();
      let user = await auth.UpdateInfos(userInfo);
      if (user) {
        window.location.reload(); // Só até o backend retornar as mesmas informações que a rota de cadastro
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    let { name, value } = target;

    setInputState({
      ...inputState,
      [name]: value
    });
  };

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <Column>
          <Input
            placeholder="Nome"
            name="name"
            value={inputState.name}
            onChange={handleChange}
            required={true}
          />
          <Input
            placeholder="Sobrenome"
            name="lastname"
            value={inputState.lastname}
            onChange={handleChange}
            required={true}
          />
          {/*<Input
            placeholder="Senha"
            type="password"
            name="password"
            onChange={handleChange}
            required={true}
          />
          <Input
            placeholder="Confirmar senha"
            type="password"
            name="password_confirm"
            onChange={handleChange}
            required={true}
          />*/}
          <Input
            placeholder="E-Mail"
            type="email"
            name="email"
            value={inputState.email}
            onChange={handleChange}
            required={true}
          />
          <Input
            placeholder="CPF"
            type="text"
            name="cpf"
            value={inputState.cpf}
            onChange={handleChange}
            required={true}
          />
          <DatePicker label="Data de nascimento" />
          {errorMensage && <Error>{errorMensage}</Error>}
        </Column>
        <Column>
          <FileSelector />
          <ButtonContainer>
            <Button text="Atualizar Perfil" type="submit" />
          </ButtonContainer>
        </Column>
      </Form>
    </Container>
  );
};

export default ProfileEdit;
