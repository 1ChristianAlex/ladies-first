import React, { useContext } from "react";
import { StoreContext } from "context/store";

import { InputContainer, FileInput, SelectorContainer } from "./styled";
import { ImageCircle, InputZone } from "components";

const FileSelector = () => {
  const {
    store: { form }
  } = useContext(StoreContext);

  return (
    <InputContainer>
      <SelectorContainer>
        {form && <ImageCircle src={form.url} size={110} />}
      </SelectorContainer>
      <SelectorContainer>
        <InputZone />
      </SelectorContainer>
    </InputContainer>
  );
};

export default FileSelector;
