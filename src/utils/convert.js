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