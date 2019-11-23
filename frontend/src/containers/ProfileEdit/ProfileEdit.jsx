import React, { useContext } from "react";
import { BigProfileBio } from "components";
import { StoreContext } from "context/store";

import { Container } from "./styles";

// TODO: passar component input para text area
const ProfilePostList = () => {
  const {
    store: { user }
  } = useContext(StoreContext);

  return (
    <Container>
      <BigProfileBio userUrl={user.url} />
    </Container>
  );
};

export default ProfilePostList;
