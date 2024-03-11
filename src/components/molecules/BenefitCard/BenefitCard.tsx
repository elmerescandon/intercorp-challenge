import BenefitIcon from "@/components/atoms/Icons/BenefitIcon/BenefitIcon";
import BenefitText from "@/components/atoms/Text/BenefitText/BenefitText";
import {IBenefit} from "@/utils/interfaces";
import React from "react";

type BenefitCardProps = {
  benefit: IBenefit;
};

const BenefitCard = ({benefit}: BenefitCardProps) => {
  const {icon, subtitle, title} = benefit;
  return (
    <div className="flex">
      <BenefitIcon icon={icon} />
      <BenefitText title={title} subtitle={subtitle} />
    </div>
  );
};

export default BenefitCard;
