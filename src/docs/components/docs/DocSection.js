import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink, Redirect, Route } from "react-router-dom";

import PropsTable from "./PropsTable";
import MarkdownView from "./MarkdownView";
import { composeUrl } from "../../utils/DocsUtils";
import SourceView from "./SourceView";

import "./docs.css";

DocSection.propTypes = {
  propsDocs: PropTypes.object,
  name: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
};

export default function DocSection(props) {
  const { name, pages } = props;

  const sectionUrl = composeUrl("", name);
  const infoUrl = composeUrl(sectionUrl, "info");
  const propsUrl = composeUrl(sectionUrl, "props");
  const examplesUrl = composeUrl(sectionUrl, "examples");

  const hasPropDocs = Boolean(props.propsDocs);
  const hasPages = Boolean(props.pages && props.pages.length > 0);

  return (
    <div className="card mt-3 border-dark">
      <div className="card-header d-flex bg-dark text-white align-items-center justify-content-between">
        <h5 className="mb-0">{name}</h5>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to={infoUrl} className="nav-link">
              Info
            </NavLink>
          </li>

          {hasPropDocs && (
            <li className="nav-item">
              <NavLink to={propsUrl} className="nav-link">
                Props
              </NavLink>
            </li>
          )}

          {hasPages && (
            <li className="nav-item">
              <NavLink to={examplesUrl} className="nav-link">
                Examples
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <Route
        exact
        path={infoUrl}
        render={() => (
          <div className="card-body">
            <MarkdownView className="card-text" source={props.description} />
          </div>
        )}
      />

      {hasPropDocs && (
        <Route
          exact
          path={propsUrl}
          render={() => <PropsTable docs={props.propsDocs} />}
        />
      )}

      {hasPages && (
        <Route
          exact
          path={examplesUrl}
          render={() => (
            <Redirect to={composeUrl(examplesUrl, pages[0].pageName)} />
          )}
        />
      )}

      {hasPages && (
        <Route
          path={examplesUrl}
          render={() => (
            <div className="card-body">
              <div className="card-text">
                <ul className="nav nav-pills justify-content-end mb-3">
                  {pages.map(x => (
                    <li key={x.filePath} className="nav-item">
                      <NavLink
                        className="nav-link"
                        to={composeUrl(examplesUrl, x.pageName)}
                      >
                        {x.pageName}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                {pages.map(x => {
                  const url = composeUrl(examplesUrl, x.pageName);
                  const sourceUrl = composeUrl(url, "source");

                  return (
                    <Route
                      path={url}
                      key={x.filePath}
                      render={() => (
                        <div className="section-page">
                          <Route
                            exact
                            path={url}
                            render={() => (
                              <div>
                                <Link
                                  to={sourceUrl}
                                  className="btn btn-primary section-btn"
                                >
                                  Source
                                </Link>

                                {React.createElement(x.component)}
                              </div>
                            )}
                          />

                          <Route
                            exact
                            path={sourceUrl}
                            render={() => (
                              <div>
                                <Link
                                  to={url}
                                  className="btn btn-primary section-btn"
                                >
                                  Result
                                </Link>

                                <SourceView source={x.source} />
                              </div>
                            )}
                          />
                        </div>
                      )}
                    />
                  );
                })}
              </div>
            </div>
          )}
        />
      )}
    </div>
  );
}
