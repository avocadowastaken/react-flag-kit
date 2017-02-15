function getIconSize(size) {
  if (size <= 18) {
    return 18;
  } else if (size <= 24) {
    return 24;
  } else if (size <= 48) {
    return 48;
  }

  return 72;
}

export function getIconFile(code, size) {
  return `${code}-${getIconSize(size)}.png`;
}
