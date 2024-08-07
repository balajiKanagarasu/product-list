"use client";
import ProductIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import { useState } from "react";
import TopBar from "./TopBar";

interface IHeader {
  label: string;
  path: string;
  icon: JSX.Element;
}

/**
 * Static sidebar layout.
 */
const Headers = [{ label: "Product", path: "products", icon: <ProductIcon /> }];

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState("products");

  /**
   * To select the sidebar header.
   */
  const onSelect = (header: IHeader) => {
    setSelected(header.path);
  };

  return (
    <div className="flex flex-col h-full bg-[#eef2f6]">
      <TopBar />
      <div className="grid grid-cols-[250px_1fr] h-full">
        <div className="flex flex-col h-full bg-white p-4">
          {Headers.map((header, index) => (
            <div
              key={index}
              className={`flex items-center rounded-md gap-5 p-4 cursor-pointer  hover:opacity-100 ${
                selected === header.path &&
                "bg-blue-300 hover:bg-blue-200 text-white"
              }`}
              onClick={() => onSelect(header)}
            >
              {header.icon}
              <span>{header.label}</span>
            </div>
          ))}
        </div>
        <div className="h-full p-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
