import React from "react";
import PropTypes from "prop-types";

Flag.defaultProps = { size: 24 };

const getStyles = size => ({
  img: {
    width: `${size}px`,
    height: `${size}px`,
    display: "inline-block",
  },
});

export default function Flag({ alt, size, style, ...props }) {
  const styles = getStyles(size);

  return <img {...props} alt={alt} style={{ ...styles.img, ...style }} />;
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  Flag.propTypes = {
    size: PropTypes.number,
    style: PropTypes.object,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };
}
