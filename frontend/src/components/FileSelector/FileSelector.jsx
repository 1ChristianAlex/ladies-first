import React from "react";
import { useStore } from "context/store";

import { InputContainer, SelectorContainer } from "./styled";
import { ImageCircle, DropZone } from "components";

const FileSelector = () => {
  const { form } = useStore();

  return (
    <InputContainer>
      <SelectorContainer>
        {form && <ImageCircle src={form.url} size={110} />}
      </SelectorContainer>
      <SelectorContainer width={100}>
        <DropZone />
      </SelectorContainer>
    </InputContainer>
  );
};

export default FileSelector;
