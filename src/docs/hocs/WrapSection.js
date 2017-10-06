import React from "react";

export function wrapSection(getComponent, getSource, docs) {
  const pages = [];

  getComponent.keys().forEach(filePath => {
    const component = getComponent(filePath);

    pages.push({
      source: getSource(filePath),
      pageName: component.pageName,
      component: component.default,
      filePath: getComponent.resolve(filePath),
    });
  });

  return BaseComponent =>
    function WrapSection(props) {
      return (
        <BaseComponent
          {...props}
          pages={pages}
          propsDocs={docs.props}
          description={docs.description}
        />
      );
    };
}
