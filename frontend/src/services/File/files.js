export class File {
  _Fr = new FileReader();

  async Reader(file) {
    return new Promise((res, rej) => {
      this._Fr.onabort = () => console.log("file reading was aborted");
      this._Fr.onerror = () => {
        rej({ mensage: "file reading has failed" });
        console.log("file reading has failed");
      };
      // Do whatever you want with the file contents
      this._Fr.onload = () => {
        const binaryStr = this._Fr.result;
        const arrayBufferView = new Uint8Array(binaryStr);
        const blob = new Blob([arrayBufferView], { type: "image/jpeg" });
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);

        res(imageUrl);
      };
      this._Fr.readAsArrayBuffer(file);
    });
  }
}

export default new File();
