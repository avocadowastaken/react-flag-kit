import React from 'react';

const { number, object, string } = React.PropTypes;

Flag.propTypes = {
  style: object,
  size: number,
  src: string.isRequired
};

Flag.defaultProps = { size: 24 };

function getStyles(src, size) {
  return {
    minWidth: `${size}px`,
    minHeight: `${size}px`,
    maxWidth: `${size}px`,
    maxHeight: `${size}px`,
    display: 'inline-block',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${src})`,
    backgroundPosition: 'center center'
  };
}

export default function Flag({ src, size, ...props }) {
  const style = getStyles(src, size);

  return <div {...props} style={{ ...style, ...props.style }} />;
}
