
export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  productImage?: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductConfig {
  productName: string;
  brandName: string;
  priceBefore: string;
  priceAfter: string;
  promoLabel: string;
  checkoutLink: string;
  metaPixelId: string;
  images: {
    hero: string;
    problem: string;
    desire: string;
    cta: string;
    features: {
      tracker: string;
      story: string;
      journal: string;
      quiz: string;
    }
  };
}

export interface ContentItem {
  title: string;
  text: string;
  icon?: string;
}
