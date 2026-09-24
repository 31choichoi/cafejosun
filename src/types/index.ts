export type TabType = 
  | 'home' 
  | 'about' 
  | 'menu' 
  | 'signature' 
  | 'meeting' 
  | 'gallery' 
  | 'location' 
  | 'reviews' 
  | 'news';

export interface MenuItem {
  id: string;
  category: 'coffee' | 'tea' | 'dessert' | 'other';
  name: string;
  nameEn?: string;
  price: string;
  priceNum: number;
  description: string;
  badge?: '대표' | '인기' | '시그니처' | '계절추천' | 'NEW';
  imageUrl: string;
  options?: string[];
  tags?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  userPhoto?: string;
  rating: number;
  date: string;
  content: string;
  menuRecommendation?: string;
  visitType?: string; // 예: "KTX 대기 중", "회의실 대관", "가족 모임", "여행객"
  keywordTag?: '대전역카페' | '대전역회의실' | '대전빙수' | '전체';
  likes?: number;
}

export interface NoticeItem {
  id: string;
  type: 'notice' | 'new_menu' | 'event' | 'benefit';
  title: string;
  date: string;
  summary: string;
  content: string;
  badge: string;
  period?: string;
}

export interface GalleryItem {
  id: string;
  category: 'space' | 'menu' | 'bingsu' | 'photozone' | 'customer';
  title: string;
  subtitle: string;
  imageUrl: string;
  tag: string;
}

export interface MeetingInquiryForm {
  company: string;
  contactPerson: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  durationHours: string;
  peopleCount: number;
  purpose: string;
  seatingLayout: string;
  equipment: string[];
  cateringPackage: string;
  taxInvoice: boolean;
  notes: string;
}
