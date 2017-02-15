import React from 'react';
import Flag from './internal/Flag';
import CountryCodes from './CountryCodes';
import { getIconFile } from './internal/utils';

const { oneOf, number } = React.PropTypes;

FlagIcon.propTypes = {
  size: number,
  code: oneOf(CountryCodes).isRequired
};

FlagIcon.defaultProps = { size: 24 };

export default function FlagIcon({ code, ...props }) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const src = require(`../assets/${getIconFile(code, props.size)}`);

  return <Flag {...props} src={src} />;
}
