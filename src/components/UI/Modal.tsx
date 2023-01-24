import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { FC } from "react";

interface IModal {
  open: boolean;
  title: string;
  handleClose: () => void;
}
const Modal: FC<IModal> = ({ open, title, handleClose }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
