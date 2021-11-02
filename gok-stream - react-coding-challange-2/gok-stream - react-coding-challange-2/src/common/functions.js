export const get = (api) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(api);
      if (response && response.ok) {
        const myJson = await response.json();
        resolve(myJson);
      } else {
        throw new Error("API Failed!");
      }
    } catch (error) {
      reject(error);
    }
  });
};
