import kebabCase from "lodash/kebabCase";

export const composeUrl = (source, ...chunks) =>
  [source, chunks.map(kebabCase).join("/")].join("/");
