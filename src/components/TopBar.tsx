"use client";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import LogoutDialog from "./LogoutDialog";
import Image from "next/image";
import ImageLogo from "./../assets/image.png";

const TopBar = () => {
  const [show, setShow] = useState<boolean>(false); // To view and hide confirmation dialog box.

  return (
    <>
      <LogoutDialog
        {...{
          show,
          setShow,
        }}
      />
      <div className="flex justify-between border-b border-gray-200 bg-white py-2">
        <Image
          width={120}
          height={20}
          className=""
          alt="LOGO"
          src={ImageLogo}
        />
        <div
          className="flex items-center py-2.5 px-5 cursor-pointe"
          onClick={() => setShow(true)}
        >
          <span className="text-blue-300 bg-blue-100 hover:bg-blue-200 rounded-lg p-1 px-2 text-center cursor-pointer">
            <LogoutIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default TopBar;
