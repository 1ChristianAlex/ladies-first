import React, { useState } from "react";
import { Route } from "react-router-dom";

import { BigProfileBio } from "components";
import { JobsList, ProfileEdit } from "containers";
import { useStore } from "context/store";
import { Container } from "./styles";

// TODO: passar component input para text area

const ProfilePostList = ({ match, pageMenu }) => {
  const { user } = useStore();
  const [active, setActive] = useState(pageMenu);
  const leftMenus = [
    { id: 0, text: "Perfil", route: "/profile/me" },
    { id: 1, text: "Currículo" }
  ];

  const rightMenus = [
    { id: 2, text: "Vagas", route: "/profile/jobs" },
    { id: 3, text: "Interesses" }
  ];

  return (
    <Container>
      <BigProfileBio
        userUrl={user.url}
        leftMenu={leftMenus}
        rightMenu={rightMenus}
        active={active}
        setActive={setActive}
      />
      <Route path={`${match.url}/me`} component={ProfileEdit} />
      <Route path={`${match.url}/jobs`} component={JobsList} />
    </Container>
  );
};

export default ProfilePostList;
