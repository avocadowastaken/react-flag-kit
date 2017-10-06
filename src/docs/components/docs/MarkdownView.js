import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import SourceView from "./SourceView";

BlockQuote.propTypes = {
  children: PropTypes.string,
};

function BlockQuote(props) {
  return <blockquote className="blockquote">{props.children}</blockquote>;
}

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string,
};

function CodeBlock(props) {
  return <SourceView source={props.literal} language={props.language} />;
}

const renderers = { CodeBlock, BlockQuote };

MarkdownView.propTypes = {
  source: PropTypes.string.isRequired,
};

export default function MarkdownView(props) {
  return <ReactMarkdown {...props} renderers={renderers} />;
}
