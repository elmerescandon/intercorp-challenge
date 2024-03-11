import React from "react";

type BenefitTextProps = {
  title: string;
  subtitle: string;
};

const BenefitText = ({title, subtitle}: BenefitTextProps) => {
  return (
    <div
      className="w-[160px] h-32 rounded-r-3xl bg-promart-soft-orange 
                 px-6 flex flex-col gap-2  justify-center"
    >
      <p className="font-semibold text-base">{title}</p>
      <p className="font-medium text-sm">{subtitle}</p>
    </div>
  );
};

export default BenefitText;
