import fp from 'lodash/fp';
import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Countries from './Countries';
import FlagIcon from '../src/FlagIcon';
import StoryCard from './StoryCard';

const randomCountryArray = fp.flow(
  fp.range(1),
  fp.map(() => ({
    small: Math.random() < 0.5,
    country: fp.sample(Countries)
  })),
  fp.uniqBy(fp.get('country.code'))
);

const createState = () => ({
  countries: randomCountryArray(10)
});

export default class WithAvatar extends React.Component {
  state = createState();

  componentWillUnmount() {
    this.onMouseOver.cancel();
  }

  onMouseOver = fp.throttle(100, () => this.setState(createState()));

  render() {
    return (
      <StoryCard>
        <List onMouseOver={this.onMouseOver}>
          {this.state.countries.map(item => (
            <ListItem
              disabled
              key={item.country.code}
              leftAvatar={
                (
                  <Avatar
                    size={item.small ? 30 : 40}
                    style={{ margin: item.small ? 5 : 0 }}
                    icon={<FlagIcon size={item.small ? 18 : 24} code={item.country.code} />}
                  />
                )
              }
            >
              {item.country.value}
            </ListItem>
          ))}
        </List>

      </StoryCard>
    );
  }
}
