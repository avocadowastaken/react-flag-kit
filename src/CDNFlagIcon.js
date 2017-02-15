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
  const src = `https://unpkg.com/react-flag-kit/assets/${getIconFile(code, props.size)}`;

  return <Flag {...props} src={src} />;
}
