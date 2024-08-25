import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ButtonGroup = ({ buttonText = "Invest in us", onClick }) => {
  return (
    <div className={"button_container"}>
      <button onClick={onClick}>{buttonText}</button>
      <Link href={"#"} className={"arrow_button"}>
        <Image
          src={"/assets/investments/Arrow 2.svg"}
          alt="arrow icon"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};
export const Button = ({ buttonText = "Invest in us", onClick }) => {
  return (
    <div className={"button_container"}>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};
