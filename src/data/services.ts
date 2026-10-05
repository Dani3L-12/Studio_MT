export interface ServiceDetailItem {
  id: string;
  titleKey: string;
  descKey: string;
  idealKey: string;
  includesKeys: string[];
  iconSvg: string;
}

export const servicesData: ServiceDetailItem[] = [
  {
    id: "carta-digital",
    titleKey: "servicesData.carta.title",
    descKey: "servicesData.carta.desc",
    idealKey: "servicesData.carta.ideal",
    includesKeys: [
      "servicesData.carta.inc1",
      "servicesData.carta.inc2",
      "servicesData.carta.inc3",
      "servicesData.carta.inc4",
      "servicesData.carta.inc5",
      "servicesData.carta.inc6",
      "servicesData.carta.inc7"
    ],
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />`
  },
  {
    id: "landing-page",
    titleKey: "servicesData.landing.title",
    descKey: "servicesData.landing.desc",
    idealKey: "servicesData.landing.ideal",
    includesKeys: [
      "servicesData.landing.inc1",
      "servicesData.landing.inc2",
      "servicesData.landing.inc3",
      "servicesData.landing.inc4",
      "servicesData.landing.inc5",
      "servicesData.landing.inc6"
    ],
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`
  },
  {
    id: "catalogo-web",
    titleKey: "servicesData.catalogo.title",
    descKey: "servicesData.catalogo.desc",
    idealKey: "servicesData.catalogo.ideal",
    includesKeys: [
      "servicesData.catalogo.inc1",
      "servicesData.catalogo.inc2",
      "servicesData.catalogo.inc3",
      "servicesData.catalogo.inc4"
    ],
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />`
  },
  {
    id: "tienda-whatsapp",
    titleKey: "servicesData.tienda.title",
    descKey: "servicesData.tienda.desc",
    idealKey: "servicesData.tienda.ideal",
    includesKeys: [
      "servicesData.tienda.inc1",
      "servicesData.tienda.inc2",
      "servicesData.tienda.inc3",
      "servicesData.tienda.inc4",
      "servicesData.tienda.note"
    ],
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />`
  }
];
