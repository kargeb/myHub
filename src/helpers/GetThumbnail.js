import React from 'react';

const GetThumbnail = ({ link }) => {
  console.log('lnk:', link);

  let urlID = null;

  if (link.indexOf('youtu.be') > 0) {
    console.log('inniosc linkowa');

    const pattern = 'youtu.be/';

    const startOfCut = link.indexOf(pattern);

    urlID = link.substring(startOfCut + pattern.length);

    console.log(`wyciete id to:${urlID}`);
  } else if (link.indexOf('youtube') > 0) {
    const pattern = '/watch?v=';

    const startOfCut = link.indexOf(pattern);

    urlID = link.substring(startOfCut + pattern.length);

    console.log(`wyciete id to:${urlID}`);
  } else {
    console.log('nieprawidłowy link');
  }

  const thumbnailCreatorUrl = `http://i3.ytimg.com/vi/${urlID}/maxresdefault.jpg`;

  return (
    <div>
      <img width="50%" src={thumbnailCreatorUrl} />;
    </div>
  );
};

export default GetThumbnail;
