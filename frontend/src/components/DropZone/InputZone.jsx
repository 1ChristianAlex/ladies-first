import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { DropContainer, Error } from "./styled";
import { Image } from "services";

import { StoreContext } from "context/store";
import { updateSign } from "context/actions/signup";

function DropInput() {
  const { dispatch } = useContext(StoreContext);
  const onDrop = useCallback(async fileInput => {
    const [file] = fileInput;

    const ImageService = new Image();

    const imageUrl = await ImageService.Reader(file);

    dispatch(updateSign({ url: imageUrl }));
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
