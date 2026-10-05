export interface PackageItem {
  id: string;
  nameKey: string;
  price: string;
  deliveryKey: string;
  revisionsKey: string;
  descKey: string;
  featuresKey: string[];
  popular?: boolean;
}

export const packagesData: PackageItem[] = [
  {
    id: "essential",
    nameKey: "packagesData.essential.name",
    price: "S/ 299",
    deliveryKey: "packagesData.essential.delivery",
    revisionsKey: "packagesData.essential.revisions",
    descKey: "packagesData.essential.desc",
    featuresKey: [
      "packagesData.essential.f1",
      "packagesData.essential.f2",
      "packagesData.essential.f3",
      "packagesData.essential.f4"
    ]
  },
  {
    id: "professional",
    nameKey: "packagesData.professional.name",
    price: "S/ 549",
    deliveryKey: "packagesData.professional.delivery",
    revisionsKey: "packagesData.professional.revisions",
    descKey: "packagesData.professional.desc",
    featuresKey: [
      "packagesData.professional.f1",
      "packagesData.professional.f2",
      "packagesData.professional.f3",
      "packagesData.professional.f4"
    ],
    popular: true
  },
  {
    id: "premium",
    nameKey: "packagesData.premium.name",
    price: "S/ 899",
    deliveryKey: "packagesData.premium.delivery",
    revisionsKey: "packagesData.premium.revisions",
    descKey: "packagesData.premium.desc",
    featuresKey: [
      "packagesData.premium.f1",
      "packagesData.premium.f2",
      "packagesData.premium.f3",
      "packagesData.premium.f4"
    ]
  }
];
