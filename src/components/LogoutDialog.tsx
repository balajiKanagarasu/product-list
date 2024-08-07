"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const LogoutDialog = ({ show, setShow }: IProps) => {
  const Router = useRouter(); // navigator.
  /**
   * To logout and remove the token from the localStorage.
   */
  const logOut = () => {
    localStorage.removeItem("token");
    Router.replace("/login");
  };

  return (
    <Dialog
      open={show}
      onClose={() => {
        setShow(false);
      }}
      sx={{
        "& .MuiDialog-paper": {
          width: "35%",
          maxWidth: "none",
        },
      }}
    >
      <DialogTitle className="border-b">
        <span className="text-xl font-bold px-1 py-3">Confirmation</span>
      </DialogTitle>
      <DialogContent>
        <p className="px-4 pt-3">Do you want to logout?</p>
      </DialogContent>
      <DialogActions className="border-t">
        <Button variant="contained" color="primary" onClick={logOut}>
          Yes
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setShow(false);
          }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
