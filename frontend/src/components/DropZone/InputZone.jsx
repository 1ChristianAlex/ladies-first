import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { DropContainer } from "./styled";
import { Image } from "services";

import { StoreContext } from "context/store";
import { updateForm } from "context/actions/form";

function DropInput() {
  const { dispatch } = useContext(StoreContext);
  const onDrop = useCallback(async fileInput => {
    const [file] = fileInput;

    const imageUrl = await Image.Reader(file);

    dispatch(updateForm({ url: imageUrl, file }));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <DropContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Largue o arquivo aqui</p>
        ) : (
          <p>Puxe e arraste algum arquivo ou clique para selecionar arquivos</p>
        )}
      </DropContainer>
    </>
  );
}
export default DropInput;
