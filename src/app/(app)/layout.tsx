"use client";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  const Router = useRouter();
  const [show, setShow] = useState(false);

  /**
   * To remove the token and logout.
   */
  useEffect(() => {
    if (!localStorage?.getItem("token")) {
      Router.replace("/login");
    } else {
      setShow(true);
    }
  }, []);

  return show && <SideBar>{children}</SideBar>;
};

export default Layout;
