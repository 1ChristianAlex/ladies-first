import React, { useState } from "react";
import { Route } from "react-router-dom";

import { BigProfileBio } from "components";
import { useStore } from "context/store";
import { Container } from "./styles";

// TODO: passar component input para text area
const leftMenus = [
  { id: 0, text: "Perfil" },
  { id: 1, text: "Currículo" }
];

const rightMenus = [
  { id: 2, text: "Vagas" },
  { id: 3, text: "Interesses" }
];

const ProfilePostList = ({ match, pageMenu }) => {
  const { user } = useStore();
  const [active, setActive] = useState(pageMenu);

  return (
    <Container>
      <BigProfileBio
        userUrl={user.url}
        leftMenu={leftMenus}
        rightMenu={rightMenus}
        active={active}
        setActive={setActive}
      />
      <Route path={`${match.url}/me`} component={() => <h1>Perfil</h1>} />
      <Route path={`${match.url}/jobs`} component={() => <h1>Jobs</h1>} />
    </Container>
  );
};

export default ProfilePostList;
