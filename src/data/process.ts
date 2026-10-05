export interface ProcessStep {
  step: string;
  titleKey: string;
  descKey: string;
}

export const processData: ProcessStep[] = [
  {
    step: "01",
    titleKey: "processData.step1.title",
    descKey: "processData.step1.desc"
  },
  {
    step: "02",
    titleKey: "processData.step2.title",
    descKey: "processData.step2.desc"
  },
  {
    step: "03",
    titleKey: "processData.step3.title",
    descKey: "processData.step3.desc"
  },
  {
    step: "04",
    titleKey: "processData.step4.title",
    descKey: "processData.step4.desc"
  }
];
