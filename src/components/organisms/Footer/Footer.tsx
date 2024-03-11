import FooterSection from "@/components/molecules/FooterSection/FooterSection";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-promart-dark-gray flex justify-start h-1/3 py-8 px-40  gap-8">
      <FooterSection
        title="Contáctanos"
        section={[
          "Te atendemos las 24 horas.",
          "Escribemos para ayudarte",
          "Venta telefónica (01) 619-1616",
          "Centro de Atención al Cliente (01) 619-4810",
          "De lunes a domingo de 8:00 AM a 8:00 PM",
        ]}
      />
      <FooterSection
        title="Secciones"
        section={[
          "Nosotros",
          "Nuestras Tiendas",
          "Extra Garantíá",
          "Trabaja con nosotros",
        ]}
      />
      <FooterSection
        title="Atención al Cliente"
        section={[
          "Preguntas Frecuentes",
          "Cambios y devoluciones",
          "Comprobantes electrónicos",
          "Términos y condiciones de compra",
        ]}
      />
    </div>
  );
};

export default Footer;
