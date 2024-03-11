import FooterText from "@/components/atoms/Text/FooterText/FooterText";
import React from "react";

type FooterSectionProps = {
  title: string;
  section: string[];
};

const FooterSection = ({title, section}: FooterSectionProps) => {
  return (
    <div>
      <p className="font-semibold text-white text-base pb-4">{title} </p>
      <div className="flex flex-col gap-2">
        {section.map((text, index) => {
          return <FooterText key={index} text={text} />;
        })}
      </div>
    </div>
  );
};

export default FooterSection;
