export interface FaqItem {
  qKey: string;
  aKey: string;
  category?: 'general' | 'pricing' | 'contact';
}

export const faqData: FaqItem[] = [
  {
    qKey: "faqData.q1.q",
    aKey: "faqData.q1.a",
    category: 'general'
  },
  {
    qKey: "faqData.q2.q",
    aKey: "faqData.q2.a",
    category: 'general'
  },
  {
    qKey: "faqData.q3.q",
    aKey: "faqData.q3.a",
    category: 'general'
  },
  {
    qKey: "faqData.q4.q",
    aKey: "faqData.q4.a",
    category: 'general'
  },
  {
    qKey: "faqData.q5.q",
    aKey: "faqData.q5.a",
    category: 'general'
  }
];

export const pricingFaqData: FaqItem[] = [
  {
    qKey: "pricingFaq.q1.q",
    aKey: "pricingFaq.q1.a",
    category: 'pricing'
  },
  {
    qKey: "pricingFaq.q2.q",
    aKey: "pricingFaq.q2.a",
    category: 'pricing'
  },
  {
    qKey: "pricingFaq.q3.q",
    aKey: "pricingFaq.q3.a",
    category: 'pricing'
  },
  {
    qKey: "pricingFaq.q4.q",
    aKey: "pricingFaq.q4.a",
    category: 'pricing'
  }
];

export const contactFaqData: FaqItem[] = [
  {
    qKey: "contactFaq.q1.q",
    aKey: "contactFaq.q1.a",
    category: 'contact'
  },
  {
    qKey: "contactFaq.q2.q",
    aKey: "contactFaq.q2.a",
    category: 'contact'
  },
  {
    qKey: "contactFaq.q3.q",
    aKey: "contactFaq.q3.a",
    category: 'contact'
  }
];
