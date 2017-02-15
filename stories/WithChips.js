import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FlagIcon from '../src/FlagIcon';
import StoryCard from './StoryCard';

const styles = {
  chips: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
};

export default function WithChips() {
  return (
    <StoryCard>
      <div style={styles.chips}>
        <Chip><Avatar icon={<FlagIcon code="WW-ASI" />} /> Asia</Chip>
        <Chip><Avatar icon={<FlagIcon code="WW-AFR" />} /> Africa</Chip>
        <Chip><Avatar icon={<FlagIcon code="WW-EUR" />} /> Europe</Chip>
      </div>
    </StoryCard>
  );
}
