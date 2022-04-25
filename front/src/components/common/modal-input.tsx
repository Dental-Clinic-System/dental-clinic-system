import { TextField } from "@mui/material";

type ModalInputType = {
  onChange: Function;
  label: String;
  value?: String;
};

export const ModalInput: React.FC<ModalInputType> = ({
  onChange,
  label,
  value,
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      sx={{
        mt: 1,
        mb: 1,
        width: "100%",
      }}
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
};
