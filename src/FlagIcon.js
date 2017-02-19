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
  if (!CountryCodes.includes(code)) {
    return null;
  }

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const src = require(`../assets/${code}.svg`);

  return <Flag {...props} src={src} alt={code} />;
}
