import React from "react";
import { BigProfileBio } from "components";
import { useStore } from "context/store";

import { Container } from "./styles";

// TODO: passar component input para text area
const ProfilePostList = () => {
  const { user } = useStore();

  return (
    <Container>
      <BigProfileBio userUrl={user.url} />
    </Container>
  );
};

export default ProfilePostList;
