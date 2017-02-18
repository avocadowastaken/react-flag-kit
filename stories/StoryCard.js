import React from 'react';
import { Card, CardText, CardHeader } from 'material-ui/Card';

const { node, object } = React.PropTypes;

StoryCard.propTypes = {
  header: node,
  style: object,
  children: node.isRequired
};

StoryCard.defaultProps = {
  style: {},
  header: null
};

export default function StoryCard(props) {
  return (
    <Card style={{ maxWidth: '320px', margin: '64px auto 0', ...props.style }}>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: '@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");'
        }}
      />

      {props.header && <CardHeader title={props.header} />}

      <CardText>{props.children}</CardText>
    </Card>
  );
}
