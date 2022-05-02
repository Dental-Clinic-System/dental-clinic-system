import { FC, MouseEvent, useState } from "react";
import { Popover, Typography, Box, Divider, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { useAuth } from '../providers/AuthProvider';

export const AccountPopOver: FC = () => {
    const { signout } = useAuth()
  const [user, setUser] = useState();
  const anchor = undefined;
  const [anchorElement, setAnchorElement] = useState<
    HTMLButtonElement | undefined
  >(anchor);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorElement(anchor);
  };

  const open = Boolean(anchorElement);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
            },
          }),
        }}
      >
        <AccountCircleIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorElement}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ my: 1.3, width: 400 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {/* {user?.email} */}
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={signout}
          >
            Гарах
          </Button>
        </Box>
      </Popover>
    </>
  );
};
