import React, { useCallback, useRef, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DropContainer } from "./styled";
import { Image } from "services";

import { useStore } from "context/store";
import { updateForm } from "context/actions/form";

function DropInput() {
  const { dispatch } = useStore();
  const heighRef = useRef();
  const [stateHeigh, setStateHeigh] = useState();

  const onDrop = useCallback(async fileInput => {
    const [file] = fileInput;

    const imageUrl = await Image.Reader(file);

    dispatch(updateForm({ url: imageUrl, file }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    setStateHeigh(heighRef.current.offsetHeight);
  }, []);

  return (
    <>
      <DropContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p style={{ height: stateHeigh }}>Largue o arquivo aqui</p>
        ) : (
          <p ref={heighRef}>
            Puxe e arraste algum arquivo ou clique para selecionar arquivos
          </p>
        )}
      </DropContainer>
    </>
  );
}
export default DropInput;
