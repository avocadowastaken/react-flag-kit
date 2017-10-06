import React from "react";
import PropTypes from "prop-types";

import keys from "lodash/keys";
import toFinite from "lodash/toFinite";

export const FormProps = {
  bool: name => {
    const validator = () => null;

    validator.title = name;
    validator.method = "bool";

    return validator;
  },
  number: name => {
    const validator = () => null;

    validator.title = name;
    validator.method = "number";

    return validator;
  },
  string: (name, rows) => {
    const validator = () => null;

    validator.rows = rows;
    validator.title = name;
    validator.method = "string";

    return validator;
  },
  oneOf: (name, values) => {
    const validator = () => null;

    validator.title = name;
    validator.method = "oneOf";
    validator.options = values;

    return validator;
  },
};

TextField.propTypes = {
  rows: PropTypes.number,

  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function TextField(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.name}</label>

      {props.rows > 0 ? (
        <textarea
          id={props.id}
          rows={props.rows}
          name={props.name}
          value={props.value}
          className="form-control"
          style={{ resize: "none" }}
          onChange={event => props.onChange(event.target.value)}
        />
      ) : (
        <input
          type="text"
          id={props.id}
          name={props.name}
          value={props.value}
          className="form-control"
          onChange={event => props.onChange(event.target.value)}
        />
      )}
    </div>
  );
}

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

function NumberField(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type="number"
        id={props.id}
        name={props.name}
        value={props.value}
        className="form-control"
        onChange={event => props.onChange(toFinite(event.target.value))}
      />
    </div>
  );
}

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function SelectField(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.name}</label>
      <select
        type="number"
        id={props.id}
        name={props.name}
        value={props.value}
        className="form-control"
        onChange={event => props.onChange(event.target.value)}
      >
        {props.options.map(x => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
}

BooleanField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

function BooleanField(props) {
  return (
    <div className="form-check">
      <label className="form-check-label" htmlFor={props.id}>
        <input
          id={props.id}
          type="checkbox"
          className="form-check-input"
          checked={props.value}
          onChange={event => props.onChange(event.target.checked)}
        />{" "}
        {props.name}
      </label>
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.func.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

function Field(props) {
  const { type } = props;

  switch (type.method) {
    case "bool":
      return <BooleanField {...props} name={type.title} />;

    case "string":
      return <TextField {...props} name={type.title} rows={type.rows} />;

    case "number":
      return <NumberField {...props} name={type.title} />;

    case "oneOf":
      return (
        <SelectField
          {...props}
          name={type.title}
          options={props.type.options}
        />
      );

    default:
      return null;
  }
}

export function wrapWithForm() {
  return BaseComponent => {
    const fields = keys(BaseComponent.propTypes).map(key => {
      const type = BaseComponent.propTypes[key];

      return { key, type };
    });

    return class WithDynamicProps extends React.Component {
      constructor(props, context) {
        super(props, context);

        this.state = BaseComponent.defaultProps;
        this.childProps = this.createChildProps();
      }

      createChildProps() {
        return {
          ...this.state,
          change: this.handleChange,
        };
      }

      handleChange = (key, value) => {
        this.setState({ [key]: value });
        this.handleSubmit();
      };

      handleSubmit = () => {
        this.childProps = this.createChildProps();
        this.forceUpdate();
      };

      render() {
        return (
          <div className="row">
            <div className="col-sm-8">
              <BaseComponent {...this.props} {...this.childProps} />
            </div>

            <div className="col-sm-4">
              {fields.map(field => (
                <Field
                  {...field}
                  id={field.key}
                  key={field.key}
                  value={this.state[field.key]}
                  onChange={x => this.setState({ [field.key]: x })}
                />
              ))}
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Submit
              </button>{" "}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.setState(BaseComponent.defaultProps)}
              >
                Reset
              </button>
            </div>
          </div>
        );
      }
    };
  };
}
