import React from "react";

interface props {
  onClick?: () => void;
  href?: string;
}

const Logo = React.forwardRef(({ onClick, href }: props, ref: any) => {
  return (
    <div className="name text-3xl  ">
      <a href={href} onClick={onClick}>
        <div className="logo w-full h-2 flex ">
          <div className="orange w-1/2 h-full bg-amber-900 "></div>
          <div className="blue w-1/2 h-full bg-yellow-200 "></div>
        </div>
        GlassComm
      </a>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
