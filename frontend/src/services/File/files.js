export class File {
  _Fr() {
    const fileReader = new FileReader();

    return new Promise((res, rej) => {
      fileReader.onabort = () => console.log("file reading was aborted");
      fileReader.onerror = () => {
        rej({ mensage: "file reading has failed" });
        console.log("file reading has failed");
      };
      // Do whatever you want with the file contents
      fileReader.onload = () => {
        const binaryStr = fileReader.result;
        const arrayBufferView = new Uint8Array(binaryStr);
        const blob = new Blob([arrayBufferView], { type: "image/jpeg" });
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);

        res(imageUrl);
      };
    });
  }

  async Reader(file) {
    await this._Fr().readAsArrayBuffer(file);
  }
}

export default new File();
