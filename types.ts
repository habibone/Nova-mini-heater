
export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum UAE_CITIES {
  DUBAI = 'Dubai',
  ABU_DHABI = 'Abu Dhabi',
  SHARJAH = 'Sharjah',
  AJMAN = 'Ajman',
  UMM_AL_QUWAIN = 'Umm Al Quwain',
  RAS_AL_KHAIMAH = 'Ras Al Khaimah',
  FUJAIRAH = 'Fujairah'
}
