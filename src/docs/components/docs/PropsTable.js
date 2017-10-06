import React from "react";
import PropTypes from "prop-types";
import keys from "lodash/keys";
import split from "lodash/split";
import ReactMarkdown from "react-markdown";

const concat = (...args) => args.join("");

function stringifyProp(type, indent = "", indentFirst = true) {
  switch (type.name) {
    case "shape":
      return stringifyShape(type.value, indent, indentFirst);

    case "enum":
      return stringifyEnum(type.value, indent, indentFirst);

    case "union":
      return stringifyUnion(type.value, indent, indentFirst);

    case "arrayOf":
      return stringifyArrayOf(type.value, indent, indentFirst);

    default:
      return indentFirst ? concat(indent, type.name) : type.name;
  }
}

function stringifyShape(x, indent, indentFirst) {
  return concat(
    indentFirst ? indent : "",
    "shape({",
    "\n",
    keys(x)
      .map((key, idx) => {
        const info = x[key];

        return concat(
          info.description
            ? concat(
                idx > 0 ? "\n" : "",
                indent,
                "  /**",
                "\n",
                split(info.description, "\n")
                  .map(s => concat(indent, "   * ", s))
                  .join("\n"),
                "\n",
                indent,
                "   */",
                "\n",
              )
            : "",
          indent,
          "  ",
          key,
          ": ",
          stringifyProp(info, "  ", false),
          ",",
        );
      })
      .join("\n"),
    "\n",
    indent,
    "})",
  );
}

function stringifyEnum(values, indent, indentFirst) {
  return concat(
    indentFirst ? indent : "",
    "oneOf([",
    "\n",
    values.map(x => concat(indent, "  ", x.value, ",")).join("\n"),
    "\n",
    indent,
    "])",
  );
}

function stringifyUnion(values, indent, indentFirst) {
  return concat(
    indentFirst ? indent : "",
    "oneOfType([",
    "\n",
    values
      .map(x => concat(indent, stringifyProp(x, concat(indent, "  ")), ","))
      .join("\n"),
    "\n",
    indent,
    "])",
  );
}

function stringifyArrayOf(value, indent, indentFirst) {
  return concat(
    indentFirst ? indent : "",
    "arrayOf(",
    "\n",
    stringifyProp(value, concat(indent, "  ")),
    "\n",
    indent,
    ")",
  );
}

PropsTable.propTypes = {
  docs: PropTypes.object.isRequired,
};

export default function PropsTable(props) {
  const { docs } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {keys(docs).map(prop => {
          const info = docs[prop];

          return (
            <tr key={prop}>
              <td className="text-info">
                {!info.required ? prop : <strong>{prop}*</strong>}
              </td>

              <td>
                <pre className="text-danger">{stringifyProp(info.type)}</pre>
              </td>

              <td>
                <pre className="text-secondary">
                  {Boolean(info.defaultValue) && info.defaultValue.value}
                </pre>
              </td>

              <td>
                <ReactMarkdown source={info.description} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
