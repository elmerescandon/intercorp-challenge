import {
  BriefcaseIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  TruckIcon,
} from "@heroicons/react/20/solid";
import {IBenefit} from "./interfaces";

export const benefitConstants: IBenefit[] = [
  {
    title: "Despacho Express",
    subtitle: "¡Compra hoy, recibe hoy!",
    icon: <TruckIcon className="w-12 h-12 text-white bg-white" />,
  },
  {
    title: "Compra y retira",
    subtitle: "en nuestros más de 180 puntos.",
    icon: <BuildingStorefrontIcon className="w-12 h-12 text-white" />,
  },
  {
    title: "A partir de 24 horas",
    subtitle: "¡Compra seguro sin salir de casa!",
    icon: <ClockIcon className="w-12 h-12 text-white" />,
  },
  {
    title: "Club PRO",
    subtitle: "El club de beneficios para profesionales.",
    icon: <BriefcaseIcon className="w-12 h-12 text-white" />,
  },
];
