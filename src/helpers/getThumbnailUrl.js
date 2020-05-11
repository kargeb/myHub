const getThumbnailUrl = (url) => {
  let urlID = null;

  if (url.indexOf('youtu.be') > 0) {
    const pattern = 'youtu.be/';
    const startOfCut = url.indexOf(pattern);

    urlID = url.substring(startOfCut + pattern.length);
  } else if (url.indexOf('youtube') > 0) {
    const pattern = '/watch?v=';
    const startOfCut = url.indexOf(pattern);

    urlID = url.substring(startOfCut + pattern.length);
  } else {
    console.log('nieprawidłowy link');
  }
  const thumbnailCreatorUrl = `http://i3.ytimg.com/vi/${urlID}/maxresdefault.jpg`;

  return thumbnailCreatorUrl;
};

export default getThumbnailUrl;
