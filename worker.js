importScripts('https://esm.sh/@squoosh/image@1.2.0');

self.onmessage = async ({ data }) => {
  const { Image } = await import('https://esm.sh/@squoosh/image@1.2.0');
  const image = new Image();
  
  await image.decode(data.imageData);
  await image.preprocess();
  await image.encode({ [data.format]: data.options });
  
  self.postMessage(image.encodedWith[data.format].binary);
};
