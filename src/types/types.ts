export interface Services {
  id: number;
  title: string;
  tags: string[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export interface Testimonials {
  id: number;
  name: string;
  company: string;
  feedback: string;
}

export interface FAQ {
  id: number;
  faqQuestion: string;
  faqAnswer: string;
}
