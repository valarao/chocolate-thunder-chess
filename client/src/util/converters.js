export const convertImageBufferIntoBase64 = (buffer) => {
  return buffer.reduce((acc, cur) => {
    return acc + String.fromCharCode(cur)
  }, '');
}

export const convertImageBufferIntoImageSrc = (previewImage) => {
  const imageBase64 = convertImageBufferIntoBase64(previewImage.data.data);
  return `data:${previewImage.contentType},${imageBase64}`;
}
