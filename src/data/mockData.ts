import { MenuItem, NoticeItem, GalleryItem, ReviewItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // 커피
  {
    id: 'americano',
    category: 'coffee',
    name: '아메리카노',
    nameEn: 'Americano',
    price: '2,500원',
    priceNum: 2500,
    description: '5성급 호텔 커피의 풍미를 그대로 담아낸 깊고 깔끔한 에스프레소 아메리카노',
    badge: '인기',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    options: ['디카페인 (+500원)', '샷 추가 (+500원)', 'HOT / ICE']
  },
  {
    id: 'cafe-latte',
    category: 'coffee',
    name: '카페라떼',
    nameEn: 'Cafe Latte',
    price: '4,500원',
    priceNum: 4500,
    description: '신선하고 부드러운 우유와 진한 에스프레소가 완벽한 밸런스를 이루는 라떼',
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&auto=format&fit=crop&q=80',
    options: ['디카페인 (+500원)', '샷 추가 (+500원)', 'HOT / ICE']
  },
  {
    id: 'vanilla-latte',
    category: 'coffee',
    name: '바닐라라떼',
    nameEn: 'Vanilla Latte',
    price: '4,900원',
    priceNum: 4900,
    description: '은은하고 고급스러운 마다가스카르 바닐라의 달콤함을 더한 풍성한 라떼',
    imageUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&auto=format&fit=crop&q=80',
    options: ['디카페인 (+500원)', '샷 추가 (+500원)', 'HOT / ICE']
  },
  {
    id: 'maxim-latte',
    category: 'coffee',
    name: '맥심라떼',
    nameEn: 'Maxim Retro Latte',
    price: '4,900원',
    priceNum: 4900,
    description: '기차 여행의 정겨운 추억! 커피믹스 황금비율의 맛을 카페조선만의 고소한 크림 라떼로 재해석한 레트로 메뉴',
    badge: '시그니처',
    imageUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&auto=format&fit=crop&q=80',
    options: ['HOT / ICE']
  },

  // 전통차
  {
    id: 'sibeok-cha',
    category: 'tea',
    name: '십억차',
    nameEn: 'Sibeok-cha (Signature Vitamin Fruit Tea)',
    price: '8,900원',
    priceNum: 8900,
    description: '비타민나무열매를 사용했고 카이스트 교수가 만든 이엠생명과학연구원에서 개발한 특별한 원료를 더해 상큼하고 산뜻하게 즐기는 카페조선의 시그니처 티.',
    badge: '대표',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    tags: ['비타민나무열매', '이엠생명과학연구원', '카이스트교수개발', '상큼산뜻', '시그니처']
  },
  {
    id: 'ibaekgok-cha',
    category: 'tea',
    name: '이백곡차',
    nameEn: 'Ibaekgok-cha (200 Grain Nourishing Tea)',
    price: '7,900원',
    priceNum: 7900,
    description: '200여 가지 영양을 한 잔에 담은 든든한 건강차. 고소한 첫 모금과 은은한 달큰함으로 식사 대용으로도 훌륭합니다.',
    badge: '대표',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    tags: ['곡물차', '든든한한끼', '남녀노소']
  },
  {
    id: 'ssanghwa-cha',
    category: 'tea',
    name: '쌍화차',
    nameEn: 'Ssanghwa-cha (Traditional Herbal Tonic Tea)',
    price: '4,900원',
    priceNum: 4900,
    description: '40년 전통 장인이 정성껏 달인 진하고 깊은 맛. 대추, 잣, 견과류 토핑이 어우러져 속을 따뜻하게 풀어줍니다.',
    badge: '인기',
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80',
    tags: ['40년장인', '감기예방', '전통보양']
  },
  {
    id: 'daechu-cha',
    category: 'tea',
    name: '대추차',
    nameEn: 'Daechu-cha (Jujube Tea)',
    price: '4,900원',
    priceNum: 4900,
    description: '햇대추를 오랜 시간 푹 달여 설탕 없이도 입안 가득 번지는 그윽하고 자연스러운 단맛.',
    imageUrl: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=800&auto=format&fit=crop&q=80',
    tags: ['자연단맛', '원기충전']
  },
  {
    id: 'maesil-cha',
    category: 'tea',
    name: '매실차',
    nameEn: 'Maesil-cha (Green Plum Tea)',
    price: '4,900원',
    priceNum: 4900,
    description: '직접 담근 숙성 매실청으로 만들어 속을 편안하게 다스려주는 새콤달콤한 소화 건강차.',
    imageUrl: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&auto=format&fit=crop&q=80',
    tags: ['직접담근청', '속편한차']
  },
  {
    id: 'yuja-cha',
    category: 'tea',
    name: '유자차',
    nameEn: 'Yuja-cha (Citron Tea)',
    price: '4,900원',
    priceNum: 4900,
    description: '남해안 햇유자의 향긋한 과육이 듬뿍 들어가 씹는 재미와 상큼한 비타민이 가득한 달콤차.',
    imageUrl: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&auto=format&fit=crop&q=80',
    tags: ['풍부한과육', '비타민C']
  },
  {
    id: 'geumsan-hongsam-cha',
    category: 'tea',
    name: '금산홍삼차',
    nameEn: 'Geumsan Red Ginseng Tea',
    price: '5,900원',
    priceNum: 5900,
    description: '인삼과 홍삼의 본고장 충남 금산의 프리미엄 6년근 홍삼을 정성껏 우려 쌉싸름하고 깊은 향을 간직한 귀한 차.',
    badge: '계절추천',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    tags: ['금산특산', '면역력증진']
  },
  {
    id: 'omija-cha',
    category: 'tea',
    name: '오미자차',
    nameEn: 'Omija-cha (Five Flavor Berry Tea)',
    price: '3,900원',
    priceNum: 3900,
    description: '단맛, 쓴맛, 신맛, 짠맛, 매운맛의 다섯 가지 조화! 고운 붉은 빛깔과 갈증 해소에 탁월한 전통 음료.',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: ['오미의조화', '갈증해소']
  },

  // 빙수·디저트
  {
    id: 'josun-bingsu',
    category: 'dessert',
    name: '조선빙수',
    nameEn: 'Josun Snowflake Bingsu',
    price: '14,900원',
    priceNum: 14900,
    description: '히말라야 설산의 웅장한 절경을 형상화한 시그니처 눈꽃 빙수. 토핑 없이 눈꽃만 떠먹어도 입안에서 사르르 녹아내리는 극상의 부드러움과 푸짐한 양.',
    badge: '대표',
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80',
    tags: ['설산비주얼', '순수우유눈꽃', '2~3인용']
  },
  {
    id: 'dubai-josun-tteok',
    category: 'dessert',
    name: '두바이조선떡',
    nameEn: 'Dubai Josun Rice Cake',
    price: '3,800원',
    priceNum: 3800,
    description: '피스타치오와 바삭한 카다이프를 쫀득한 조선 찹쌀떡으로 정성스레 감싸낸 트렌디 퓨전 디저트.',
    badge: '대표',
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80',
    tags: ['화제의두바이디저트', '겉쫀득속바삭', '선물추천']
  },
  {
    id: 'josun-dessert-platter',
    category: 'dessert',
    name: '조선디저트 3종 플래터',
    nameEn: 'Josun Traditional Dessert Platter',
    price: '4,900원',
    priceNum: 4900,
    description: '견과류 듬뿍 찰떡, 달콤한 꿀떡, 가마솥에서 구운 바삭하고 고소한 누룽지로 구성되어 차와 함께 든든하게 즐기는 전통 디저트.',
    badge: '인기',
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80',
    tags: ['견과찰떡', '꿀떡', '누룽지']
  },

  // 기타 음료
  {
    id: 'iced-tea',
    category: 'other',
    name: '아이스티 (복숭아)',
    nameEn: 'Peach Iced Tea',
    price: '3,900원',
    priceNum: 3900,
    description: '기차 타기 전 시원하고 달콤하게 목을 축일 수 있는 상큼한 복숭아 홍차 아이스티.',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop&q=80',
    options: ['ICE']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'bingsu',
    title: '히말라야 설산의 웅장함, 조선빙수',
    subtitle: '사계절 사랑받는 카페조선의 1위 시그니처 눈꽃빙수',
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&auto=format&fit=crop&q=80',
    tag: '#조선빙수'
  },
  {
    id: 'g2',
    category: 'space',
    title: '대전역이 내려다보이는 따스한 창가석',
    subtitle: '기차 시간 전 캐리어를 두고 편안하게 머무는 여행자의 쉼터',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&auto=format&fit=crop&q=80',
    tag: '#카페조선공간'
  },
  {
    id: 'g3',
    category: 'menu',
    title: '정성으로 끓여낸 십억차 & 전통 다과',
    subtitle: '지친 여정에 생기를 북돋아주는 과학적 비타민 블렌딩',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900&auto=format&fit=crop&q=80',
    tag: '#십억차'
  },
  {
    id: 'g4',
    category: 'menu',
    title: '화제의 두바이조선떡 & 이백곡차',
    subtitle: '피스타치오 카다이프의 바삭함과 쫀득한 우리 떡의 만남',
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=900&auto=format&fit=crop&q=80',
    tag: '#두바이조선떡'
  },
  {
    id: 'g5',
    category: 'space',
    title: '최대 60인 수용 세미나·회의실',
    subtitle: '전국 각지에서 KTX로 모이는 최적의 비즈니스·교육 대관 공간',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80',
    tag: '#회의실대관'
  },
  {
    id: 'g6',
    category: 'photozone',
    title: '조선 감성 포토존 & 청동 현판',
    subtitle: '대전 여행의 시작과 끝을 기념하는 인생 사진 명소',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80',
    tag: '#포토존'
  },
  {
    id: 'g7',
    category: 'customer',
    title: '손님들이 남겨주신 소중한 순간',
    subtitle: '“기차 시간 20분 전 테이크아웃해서 탔는데 최고의 선택이었어요”',
    imageUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=900&auto=format&fit=crop&q=80',
    tag: '#고객사진'
  },
  {
    id: 'g8',
    category: 'space',
    title: '단아한 전통 한옥 격자창과 원목 인테리어',
    subtitle: '마음을 편안하게 해주는 목조 향기와 차분한 음악',
    imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&auto=format&fit=crop&q=80',
    tag: '#인테리어'
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: '김*민 (서울 출장객)',
    rating: 5,
    date: '2026.09.18',
    visitType: 'KTX 대기 중',
    keywordTag: '대전빙수',
    menuRecommendation: '조선빙수, 아메리카노',
    content: '서울 가는 KTX 시간 40분 남아서 3번 출구 바로 앞이라 들어왔는데 대만족입니다! 대전빙수 맛집이라더니 조선빙수 비주얼 히말라야 설산 진짜 맞네요. 우유 얼음이 입안에서 사르르 녹아내려 순삭했습니다. 역 바로 앞이라 마음 졸이지 않고 여유 있게 탔습니다.'
  },
  {
    id: 'rev-2',
    author: '이*진 (연구원 세미나 주관자)',
    rating: 5,
    date: '2026.09.12',
    visitType: '회의실 대관 (40인)',
    keywordTag: '대전역회의실',
    menuRecommendation: '다과 케이터링 패키지, 십억차',
    content: '서울 본사와 부산 지사 인원들이 KTX로 대전역에 모여 회의하기에 이보다 좋은 대전역회의실이 없습니다. 역 3번 출구에서 횡단보도 건너 도보 1분 컷이라 모든 참석자가 헤매지 않았어요. 빔프로젝터, 음향도 완벽했고 다과 패키지 떡과 차가 너무 고급스러워 칭찬 많이 받았습니다!'
  },
  {
    id: 'rev-3',
    author: '박*서 (대전 로컬 주민)',
    rating: 5,
    date: '2026.09.05',
    visitType: '주말 디저트 데이트',
    keywordTag: '대전역카페',
    menuRecommendation: '두바이조선떡, 쌍화차',
    content: '대전역카페 중 분위기 제일 고즈넉하고 좋아요. SNS에서 보고 찾아온 두바이조선떡 피스타치오 카다이프 바삭함이랑 우리 떡 쫀득함이 진짜 최고! 부모님 모시고 갔는데 아버지는 진한 쌍화차에 푹 빠지셨습니다. 사장님도 너무 친절하시고 공간도 아늑합니다.'
  },
  {
    id: 'rev-4',
    author: '최*호 (지사 전략회의 담당자)',
    rating: 5,
    date: '2026.09.02',
    visitType: '대전역회의실 대관 (25인)',
    keywordTag: '대전역회의실',
    menuRecommendation: '아메리카노 & 조선디저트 3종 세트',
    content: '대전역회의실 대관 장소 찾다가 예약했는데 시설, 방음, 위치 모두 완벽했습니다. 노트북 연결 즉시 대형 스크린에 잘 송출되고 무선마이크 음질도 깔끔했어요. 다과 케이터링도 시간 맞춰 준비해주셔서 정기 모임 장소로 확정했습니다.'
  },
  {
    id: 'rev-5',
    author: '정*은 (대전 빙수 투어러)',
    rating: 5,
    date: '2026.08.30',
    visitType: '사계절 빙수 탐방',
    keywordTag: '대전빙수',
    menuRecommendation: '조선빙수',
    content: '인생 대전빙수 등극입니다. 다른 곳 눈꽃빙수랑 차원이 다른 곱고 깊은 우유 베이스에 높게 솟은 설산 비주얼이 예술이에요. 셋이서 먹었는데도 양이 넉넉해서 가성비도 최고입니다. 가을 겨울에도 사계절 내내 판매하신다니 무조건 재방문합니다!'
  },
  {
    id: 'rev-6',
    author: 'James W. (Foreign Traveler)',
    rating: 5,
    date: '2026.08.28',
    visitType: 'Traveler',
    keywordTag: '대전역카페',
    menuRecommendation: 'Sibeok-cha & Josun Bingsu',
    content: 'Best cafe near Daejeon Station! Just 1 minute walk from Exit 3. The staff was extremely welcoming to international travelers. The signature Sibeok-cha tea was refreshing and the snowflake bingsu was breathtaking.'
  }
];

export const NOTICES: NoticeItem[] = [
  {
    id: 'not-1',
    type: 'notice',
    title: '가을 단풍철 및 연휴 정상 영업 안내',
    date: '2026.09.20',
    badge: '공지',
    summary: '카페조선은 연중무휴 매일 오전 10시부터 오후 10시까지 정상 영업합니다.',
    content: '대전역을 찾아주시는 소중한 귀성객과 가을 여행객분들을 위해 연휴 기간에도 휴무 없이 매일 오전 10시부터 밤 10시까지(라스트오더 21:30) 따뜻한 차와 빙수를 정성껏 대접합니다. 기차 시간에 맞춰 빠른 테이크아웃도 가능하오니 편안히 들러주세요.'
  },
  {
    id: 'not-2',
    type: 'new_menu',
    title: '가을 시그니처 [금산 6년근 햇홍삼차] 출시',
    date: '2026.09.15',
    badge: '신메뉴',
    summary: '인삼의 고장 충남 금산에서 직송된 6년근 홍삼의 깊은 기운을 만나보세요.',
    content: '환절기 면역력 충전에 탁월한 금산홍삼차가 새롭게 메뉴에 합류했습니다. 쌉싸름한 홍삼의 첫맛과 은은한 대추의 단맛이 완벽히 조화되어 기차 여행길의 피로를 말끔히 씻어드립니다.'
  },
  {
    id: 'not-3',
    type: 'event',
    title: '네이버 영수증 리뷰 쓰고 [두바이조선떡 1개 증정] 이벤트',
    date: '2026.09.01',
    badge: '이벤트',
    period: '상시 진행 (재료 소진 시까지)',
    summary: '매장 방문 후 네이버 플레이스 포토 리뷰 작성 시 즉시 디저트를 선물해 드립니다.',
    content: '카페조선 방문 후 네이버 플레이스 영수증 포토 리뷰를 작성하시거나 인스타그램에 #카페조선 #대전역카페 #조선빙수 태그와 함께 게시해 주시면, 카운터에서 확인 후 인기 디저트인 [두바이조선떡 1조각]을 즉시 선물로 드립니다.'
  },
  {
    id: 'not-4',
    type: 'benefit',
    title: '당일 KTX·SRT 열차 승차권 제시 시 전 음료 10% 즉시 할인',
    date: '2026.08.10',
    badge: '할인/혜택',
    period: '2026년 상시 진행',
    summary: '대전역 이용 여행객을 위한 특별 혜택! 코레일톡 승차권을 보여주세요.',
    content: '당일 날짜의 대전역 출도착 KTX, SRT, ITX 승차권을 주문 시 제시해주시면 결제 금액의 10%를 즉시 할인해 드립니다. 바쁜 여정 속 든든한 쉼터가 되어 드리겠습니다.'
  }
];

export const MEETING_LAYOUTS = [
  {
    id: 'lecture',
    name: '강의식',
    capacity: '최대 60인',
    desc: '스크린을 향해 전 좌석이 정면을 바라보는 구조로 대규모 세미나, 설명회, 강연, 전사 교육에 가장 적합합니다.',
    recommended: '세미나, 사업설명회, 직무교육, 학술 강연',
    icon: 'Presentation'
  },
  {
    id: 'boardroom',
    name: '회의식 (ㄷ자·대형 원탁)',
    capacity: '15인 ~ 28인',
    desc: '참석자 전원이 서로 얼굴을 마주보고 심도 있는 의견 교환과 토론이 가능한 고급 회의 레이아웃입니다.',
    recommended: '임원 회의, 지사 전략회의, 워크숍, 운영위원회',
    icon: 'Users'
  },
  {
    id: 'groups',
    name: '그룹식 (분임 분산 테이블)',
    capacity: '20인 ~ 35인',
    desc: '4~6인 단위의 원형 및 사각 테이블을 분산 배치하여 팀 빌딩, 조별 실습, 브레인스토밍에 최적화되었습니다.',
    recommended: '디자인 싱킹, 팀별 실습, 아이디어 해커톤',
    icon: 'LayoutGrid'
  },
  {
    id: 'free',
    name: '자유식 (스탠딩 & 네트워킹)',
    capacity: '30인 ~ 45인',
    desc: '벽면 좌석과 중앙 여유 공간을 활용하여 다과와 함께 자유롭게 이동하며 소통하는 파티형 공간입니다.',
    recommended: '네트워킹 데이, 동문 모임, 출판 기념회, 소규모 연회',
    icon: 'Sparkles'
  }
];

export const CATERING_PACKAGES = [
  {
    id: 'drinks',
    name: '음료 패키지',
    price: '1인 4,000원',
    priceNum: 4000,
    items: ['아메리카노 (HOT/ICE) 또는 전통차 택 1', '테이크아웃 컵 및 보온 보냉 세팅', '생수 및 티슈 기본 제공']
  },
  {
    id: 'dessert',
    name: '다과 패키지 (인기)',
    price: '1인 6,500원',
    priceNum: 6500,
    badge: 'BEST',
    items: ['음료 1인 1잔 (커피 or 전통차)', '조선 전통 3종 다과 (견과류 찰떡 + 꿀떡 + 가마솥 누룽지)', '개별 정갈한 트레이 세팅']
  },
  {
    id: 'signature',
    name: '대표 시그니처 패키지',
    price: '1인 8,900원',
    priceNum: 8900,
    badge: 'VIP 추천',
    items: ['십억차 또는 이백곡차 건강차 택 1', '화제의 두바이조선떡 1조각', '프리미엄 견과 다과 세트']
  }
];

export const FAQS = [
  {
    q: '몇 명까지 이용할 수 있나요?',
    a: '강의식 배치 기준 최대 60인까지 이용 가능합니다. 회의식(ㄷ자)은 28인, 그룹식 분임 배치는 35인까지 쾌적하게 수용 가능합니다.'
  },
  {
    q: '대전역에서 정말 도보 1분 거리인가요?',
    a: '네, 맞습니다! 대전역 서광장 방면 3번 출구로 나와 바로 앞 횡단보도를 건너시면 왼편 TRY 매장 오른쪽 옆건물이 바로 카페조선입니다. 횡단보도를 건너면 바로 연결되어 도보 1분이면 도착합니다.'
  },
  {
    q: '빔프로젝터와 음향 마이크 이용료가 있나요?',
    a: '아닙니다. 4K 고화질 빔프로젝터, 대형 전동 스크린, 무선 마이크 2기, 음향 시설, 레이저 포인터, 초고속 와이파이, 화이트보드까지 대관료에 모두 무료로 포함되어 있습니다. (노트북 연결 HDMI 케이블 및 C타입 젠더 구비)'
  },
  {
    q: '주차는 어떻게 하나요?',
    a: '대전역 바로 앞 초역세권에 위치하여 KTX, 지하철(대전역), 시내버스 등 대중교통 이용을 적극 권장합니다. 자차 이용 시 대전역 서광장 코레일 공영주차장 및 인근 유료 주차장을 편리하게 이용하실 수 있습니다.'
  },
  {
    q: '당일 긴급 예약도 가능한가요?',
    a: '원하시는 시간대에 다른 예약이 없다면 당일 예약 및 즉시 이용도 가능합니다. 매장 전화(042-222-8818)로 먼저 잔여 시간을 확인해 주시기 바랍니다.'
  },
  {
    q: '세금계산서나 법인카드 현장 결제가 되나요?',
    a: '네, 사업자등록증 사본과 담당자 이메일을 알려주시면 전자세금계산서를 즉시 발행해 드리며, 이용 당일 법인카드 현장 결제 및 지출증빙 현금영수증 발행도 모두 가능합니다.'
  },
  {
    q: '케이터링 없이 공간만 대관할 수도 있나요?',
    a: '네, 공간만 대관하시는 것도 가능합니다. 필요에 따라 현장에서 자유롭게 키오스크나 카운터에서 개별 음료를 주문하셔도 좋습니다.'
  }
];
