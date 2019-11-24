import React, { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import UserValidation from "services/auth/validate";
import { Auth } from "../../services/auth";
import { StoreContext } from "../../context/store";
import { updateUser } from "context/actions/user";

import {
  Button,
  Input,
  BigIcon,
  ContentWrapper,
  DatePicker,
  FileSelector
} from "components";

import {
  BackgroundClose,
  Container,
  Form,
  Error,
  ButtonContainer,
  CloseButton
} from "./styles";

const SignupForm = ({ onClose }) => {
  // TODO: Criar um custom hook pra diminuir código
  const { state } = useLocation();
  let history = useHistory();
  let {
    store: { form },
    dispatch
  } = useContext(StoreContext);

  let [inputState, setInputState] = useState({});
  let [errorMensage, seterrorMensage] = useState("");

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

  async function handleRegister(e) {
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
      let user = await auth.Register(userInfo);
      if (user) {
        dispatch(updateUser(user));
        history.push("/timeline");
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
        <ContentWrapper title="Cadastre-se" styledTitle overflow={"unset"}>
          <Form onSubmit={handleRegister}>
            <FileSelector />
            <Input
              placeholder="Nome"
              name="name"
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="Sobrenome"
              name="lastname"
              onChange={handleChange}
              required={true}
            />
            <Input
              placeholder="E-Mail"
              type="email"
              name="email"
              onChange={handleChange}
              required={true}
            />
            <Input
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
            />
            <Input
              placeholder="CPF"
              type="text"
              name="cpf"
              onChange={handleChange}
              required={true}
            />
            <DatePicker label="Data de nascimento" />
            {(errorMensage || state) && (
              <Error>{errorMensage || state.message}</Error>
            )}
            <ButtonContainer>
              <Button text="Cadastrar" type="submit" />
            </ButtonContainer>
          </Form>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default SignupForm;
