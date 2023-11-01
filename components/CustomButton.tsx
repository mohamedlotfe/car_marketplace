"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default CustomButton;
