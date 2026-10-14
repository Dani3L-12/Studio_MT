export interface FaqItem {
  qKey: string;
  aKey: string;
  category?: 'general' | 'pricing' | 'contact';
}

export const faqData: FaqItem[] = [
  {
    qKey: "faqData.q1",
    aKey: "faqData.q1",
    category: 'general'
  },
  {
    qKey: "faqData.q2",
    aKey: "faqData.q2",
    category: 'general'
  },
  {
    qKey: "faqData.q3",
    aKey: "faqData.q3",
    category: 'general'
  },
  {
    qKey: "faqData.q4",
    aKey: "faqData.q4",
    category: 'general'
  },
  {
    qKey: "faqData.q5",
    aKey: "faqData.q5",
    category: 'general'
  },
  {
    qKey: "faqData.q6",
    aKey: "faqData.q6",
    category: 'general'
  },
  {
    qKey: "faqData.q7",
    aKey: "faqData.q7",
    category: 'general'
  },
  {
    qKey: "faqData.q8",
    aKey: "faqData.q8",
    category: 'general'
  },
  {
    qKey: "faqData.q9",
    aKey: "faqData.q9",
    category: 'general'
  },
  {
    qKey: "faqData.q10",
    aKey: "faqData.q10",
    category: 'general'
  }
];

export const pricingFaqData: FaqItem[] = [
  {
    qKey: "pricingFaq.q1",
    aKey: "pricingFaq.a1",
    category: 'pricing'
  },
  {
    qKey: "pricingFaq.q2",
    aKey: "pricingFaq.a2",
    category: 'pricing'
  },
  {
    qKey: "pricingFaq.q3",
    aKey: "pricingFaq.a3",
    category: 'pricing'
  },
  {
    qKey: "pricingFaq.q4",
    aKey: "pricingFaq.a4",
    category: 'pricing'
  }
];

export const contactFaqData: FaqItem[] = [
  {
    qKey: "contactFaq.q1",
    aKey: "contactFaq.a1",
    category: 'contact'
  },
  {
    qKey: "contactFaq.q2",
    aKey: "contactFaq.a2",
    category: 'contact'
  },
  {
    qKey: "contactFaq.q3",
    aKey: "contactFaq.a3",
    category: 'contact'
  }
];