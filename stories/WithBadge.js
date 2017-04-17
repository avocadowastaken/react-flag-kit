import React from "react";
import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import StoryCard from "./StoryCard";
import FlagIcon from "../src/FlagIcon";

export default function WithBadge() {
  return (
    <StoryCard>
      <Badge badgeContent={4} primary badgeStyle={{ top: 1, right: 1 }}>
        <FlagIcon size={24} code="WW" />
      </Badge>

      <Badge badgeContent={10} secondary badgeStyle={{ top: 15, right: 15 }}>
        <IconButton tooltip="Africa">
          <FlagIcon size={24} code="WW-SAM" />
        </IconButton>
      </Badge>
    </StoryCard>
  );
}
