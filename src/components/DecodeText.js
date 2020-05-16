async function decodeText(buffer, charset = "utf-8") {
  // Encoding API
  if (window.TextDecoder) {
    const decoder = new TextDecoder(charset);
    return decoder.decode(buffer);
  }

  // FileReader API
  return new Promise((resolve, reject) => {
    const blob = new Blob([buffer], { type: `text/plain;charset=${charset}` });
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(reader.error);
    };
    reader.readAsText(blob, charset);
  });
}

export default decodeText;
