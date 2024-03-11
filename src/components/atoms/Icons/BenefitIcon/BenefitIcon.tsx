import React from "react";

type BenefitIconProps = {
  icon: React.ReactNode;
};

const BenefitIcon = ({icon}: BenefitIconProps) => {
  return (
    <div className="w-24 h-32 rounded-l-3xl bg-promart-orange flex justify-center items-center ">
      {icon}
    </div>
  );
};

export default BenefitIcon;
