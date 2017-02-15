import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import Countries from './Countries';
import StoryCard from './StoryCard';
import FlagIcon from '../src/FlagIcon';

export default function WithAutoComplete() {
  return (
    <StoryCard>
      <AutoComplete
        fullWidth
        listStyle={{ maxHeight: '256px' }}
        hintText="Select Country"
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={Countries.map(country => ({
          text: country.value,
          value: <MenuItem primaryText={country.value} leftIcon={<FlagIcon size={24} code={country.code} />} />
        }))}
      />
    </StoryCard>
  );
}
