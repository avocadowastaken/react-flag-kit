import React from "react";
import keys from "lodash/keys";
import PropTypes from "prop-types";

export function wrapWithHandlers() {
  return BaseComponent => {
    const handlers = keys(BaseComponent.propTypes).filter(x => {
      const type = BaseComponent.propTypes[x];

      return type === PropTypes.func || type === PropTypes.func.isRequired;
    });

    class WithEventHandlers extends React.Component {
      constructor(props, context) {
        super(props, context);

        const fns = {};
        const state = {};

        handlers.forEach(handler => {
          state[handler] = 0;

          fns[handler] = () =>
            this.setState(x => ({
              [handler]: x[handler] + 1,
            }));
        });

        this.state = state;
        this.handlers = fns;
      }

      render() {
        return (
          <div className="row">
            <div className="col-sm-8">
              <BaseComponent {...this.handlers} />
            </div>

            <div className="col-sm-4">
              {handlers.map(handler => (
                <h6 key={handler}>
                  {handler}{" "}
                  <span className="badge badge-secondary">
                    {this.state[handler]}
                  </span>
                </h6>
              ))}
            </div>
          </div>
        );
      }
    }

    return WithEventHandlers;
  };
}
