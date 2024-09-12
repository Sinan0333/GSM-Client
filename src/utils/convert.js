import imageCompression from 'browser-image-compression';

export function base64(file) {
    return new Promise((resolve) => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve(reader.result);
        };
      } else {
        resolve(undefined);
      }
    });
}

export const compressImage = async (file) => {
  const options = {
    maxSizeMB: 5, // Maximum size in MB
    useWebWorker: true, // Use web worker for faster compression
  };
  return await imageCompression(file, options);
};