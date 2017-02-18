import fp from 'lodash/fp';
import React from 'react';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Countries from './Countries';
import FlagIcon from '../src/FlagIcon';
import StoryCard from './StoryCard';

export default class WithAvatar extends React.Component {
  state = {
    filter: '',
    useSmall: false
  };

  render() {
    return (
      <StoryCard>
        <TextField
          hintText="Search ... "
          value={this.state.filter}
          onChange={(event, value) => this.setState({ filter: value })}
        />

        <Checkbox
          label="Use Small Icons"
          checked={this.state.useSmall}
          onCheck={(event, value) => this.setState({ useSmall: value })}
        />

        <List>
          {Countries.filter(fp.flow(fp.get('value'), fp.toLower, fp.includes(fp.toLower(this.state.filter))))
            .slice(0, 8)
            .map(item => (
              <ListItem
                disabled
                key={item.code}
                leftAvatar={
                  (
                    <Avatar
                      size={this.state.useSmall ? 30 : 40}
                      style={{ margin: this.state.useSmall ? 5 : 0 }}
                      icon={<FlagIcon size={this.state.useSmall ? 18 : 24} code={item.code} />}
                    />
                  )
                }
              >
                {item.value}
              </ListItem>
            ))}
        </List>
      </StoryCard>
    );
  }
}
