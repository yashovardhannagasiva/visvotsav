import React from "react";
import FooterHead from "./custom/FooterHead";
import FooterBody from "./custom/FooterBody";

const Footer = () => {
  return (
    <section className="w-full flex-1 flex flex-col">
      <FooterHead />
      <FooterBody />
      <div className=" flex w-full bg-foreground py-5 gap-2 flex-col items-center ">
        <p className="text-background font-thin">Created By Yasovardhan</p>
        <p className="text-background font-thin">Copyright &copy; PBR VITS</p>
      </div>
    </section>
  );
};

export default Footer;
