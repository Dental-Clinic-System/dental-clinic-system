import { ReactNode } from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/material";

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.common.white,
    width: "100%",
    padding: spacing(10),
    borderRadius: spacing(3),
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
}));

export const Item = ({
  children,
  height,
}: {
  children: ReactNode;
  height?: string | number;
}) => {
  const styles = useStyles();

  return (
    <Box height={height || "100%"} className={styles.root}>
      {children}
    </Box>
  );
};
