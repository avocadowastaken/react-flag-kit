import { number, object, string } from "prop-types";
import React from "react";

Flag.propTypes = {
  style: object,
  size: number,
  alt: string.isRequired,
  src: string.isRequired
};

Flag.defaultProps = { size: 24, style: {} };

const getStyles = size => ({
  width: `${size}px`,
  height: `${size}px`,
  display: "inline-block"
});

export default function Flag({ size, ...props }) {
  const style = getStyles(size);

  return (
    <img {...props} style={{ ...style, ...props.style }} alt={props.alt} />
  );
}
