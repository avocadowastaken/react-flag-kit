import React from "react";
import { storiesOf } from "@kadira/storybook";
import { muiTheme } from "storybook-addon-material-ui";
import WithBadge from "./WithBadge";
import WithAvatar from "./WithAvatar";
import WithAutoComplete from "./WithAutoComplete";
import WithBottomNavigation from "./WithBottomNavigation";
import WithButtons from "./WithButtons";
import WithChips from "./WithChips";

storiesOf("With material-ui", module)
  .addDecorator(muiTheme())
  .add("With AutoComplete", () => <WithAutoComplete />)
  .add("With Avatar", () => <WithAvatar />)
  .add("With Badge", () => <WithBadge />)
  .add("With BottomNavigation", () => <WithBottomNavigation />)
  .add("With Buttons", () => <WithButtons />)
  .add("With Chips", () => <WithChips />);
