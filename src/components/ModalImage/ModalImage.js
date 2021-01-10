import React from 'react';
import PropTypes from 'prop-types';

function ModalImage({ largeImage }) {
  const { alt, url } = largeImage;
  return <img src={url} alt={alt} />;
}

ModalImage.protoType = {
  largeImage: PropTypes.exact({
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalImage;
