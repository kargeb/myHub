const getThumbnailUrl = (url) => {
  console.log('lnk:', url);

  let urlID = null;

  if (url.indexOf('youtu.be') > 0) {
    const pattern = 'youtu.be/';

    const startOfCut = url.indexOf(pattern);

    urlID = url.substring(startOfCut + pattern.length);

    console.log(`wyciete id to:${urlID}`);
  } else if (url.indexOf('youtube') > 0) {
    const pattern = '/watch?v=';

    const startOfCut = url.indexOf(pattern);

    urlID = url.substring(startOfCut + pattern.length);

    console.log(`wyciete id to:${urlID}`);
  } else {
    console.log('nieprawidłowy link');
  }

  const thumbnailCreatorUrl = `http://i3.ytimg.com/vi/${urlID}/maxresdefault.jpg`;

  return thumbnailCreatorUrl;

  // return (
  //   <div>
  //     <img width="50%" src={thumbnailCreatorUrl} />;
  //   </div>
  // );
};

export default getThumbnailUrl;
