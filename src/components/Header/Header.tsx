import React from "react";
import { Group, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  container: {
    backgroundColor: "#3393cb",
    padding: "20px 30px",
  },
}));
type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  const { classes, cx } = useStyles();
  return (
    <Group className={cx(classes.container, className)}>
      <h3>CyberSoft Movie</h3>
    </Group>
  );
};

export default Header;
