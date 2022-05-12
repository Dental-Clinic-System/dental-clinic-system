import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { PatientsGrid, CreateModal } from "../components/index";
import { AddPatientForm } from "../components/custom";
import { PATIENTS } from "../helper/constants";

export const PatientScreen = () => {
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    document.title = PATIENTS;
  }, []);

  return (
    <Box>
      <PatientsGrid setOpenAdd={setOpenAdd} />

      <CreateModal
        open={openAdd}
        setOpen={setOpenAdd}
        addButtonName={"Өвчтөн нэмэх"}
        showButton={false}
      >
        <AddPatientForm setOpen={setOpenAdd} />
      </CreateModal>
    </Box>
  );
};
