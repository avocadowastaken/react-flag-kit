import React from 'react';
import Flag from './internal/Flag';
import CountryCodes from './CountryCodes';

const { oneOf, number } = React.PropTypes;

FlagIcon.propTypes = {
  size: number,
  code: oneOf(CountryCodes).isRequired
};

FlagIcon.defaultProps = { size: 24 };

export default function FlagIcon({ code, ...props }) {
  const src = `https://unpkg.com/react-flag-kit/assets/${code}.svg`;

  return <Flag {...props} src={src} />;
}
