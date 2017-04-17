import React from "react";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

import FlagIcon from "../src/FlagIcon";

import StoryCard from "./StoryCard";

const styles = {
  small: {
    width: 72,
    height: 72
  },
  medium: {
    width: 96,
    height: 96
  },

  storyCard: { maxWidth: 340 },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};
export default function WithButtons() {
  return (
    <div>
      <StoryCard header="Flat Buttons" style={styles.storyCard}>
        <div style={styles.buttons}>
          <FlatButton label="Asia" icon={<FlagIcon code="WW-ASI" />} />
          <FlatButton
            label="Africa"
            labelPosition="before"
            icon={<FlagIcon code="WW-AFR" />}
          />
          <FlatButton icon={<FlagIcon code="WW-EUR" />} />
        </div>
      </StoryCard>

      <StoryCard header="Raised Buttons" style={styles.storyCard}>
        <div style={styles.buttons}>
          <RaisedButton label="Asia" icon={<FlagIcon code="WW-ASI" />} />

          <RaisedButton
            label="Africa"
            labelPosition="before"
            icon={<FlagIcon code="WW-AFR" />}
          />

          <RaisedButton icon={<FlagIcon code="WW-EUR" />} />
        </div>
      </StoryCard>

      <StoryCard header="Icon Buttons" style={styles.storyCard}>
        <div style={styles.buttons}>
          <IconButton>
            <FlagIcon code="WW-ASI" />
          </IconButton>

          <IconButton style={styles.small}>
            <FlagIcon code="WW-AFR" size={48} />
          </IconButton>

          <IconButton style={styles.medium}>
            <FlagIcon code="WW-EUR" size={72} />
          </IconButton>
        </div>
      </StoryCard>

    </div>
  );
}
