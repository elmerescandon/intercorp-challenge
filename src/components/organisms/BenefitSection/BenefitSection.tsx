import Header3 from "@/components/atoms/Text/Header3/Header3";
import BenefitCard from "@/components/molecules/BenefitCard/BenefitCard";
import {benefitConstants} from "@/utils/constants";
import React from "react";

const BenefitSection = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Header3 text="Beneficios para ti" />
      <div className="flex gap-8 justify-center flex-wrap">
        {benefitConstants.map((benefit, index) => {
          return <BenefitCard key={index} benefit={benefit} />;
        })}
      </div>
    </div>
  );
};

export default BenefitSection;
