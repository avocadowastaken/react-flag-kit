import React from 'react';

const { number, object, string } = React.PropTypes;

Flag.propTypes = { style: object, size: number, alt: string.isRequired, src: string.isRequired };

Flag.defaultProps = { size: 24, style: {} };

function getStyles(size) {
  return {
    width: `${size}px`,
    height: `${size}px`,
    display: 'inline-block'
  };
}

export default function Flag({ size, ...props }) {
  const style = getStyles(size);

  return <img {...props} style={{ ...style, ...props.style }} alt={props.alt} />;
}
