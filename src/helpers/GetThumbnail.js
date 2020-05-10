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

  console.log('Juz po ifach urlID to:', urlID);

  // http://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg

  const thumbnailCreatorUrl = `http://i3.ytimg.com/vi/${urlID}/maxresdefault.jpg`;

  // fetch(thumbnailCreatorUrl)
  //   .then((response) => console.log(response))
  //   .catch((err) => console.log(err));

  return (
    <div>
      {console.log('to juz z returna:', thumbnailCreatorUrl)}
      <img width="80%" src={thumbnailCreatorUrl} />;
    </div>
  );
};

export default GetThumbnail;
