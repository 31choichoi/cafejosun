import React, { useState, useMemo } from 'react';
import { 
  Coffee, 
  Sparkles, 
  Search, 
  Plus, 
  Check, 
  ShoppingBag, 
  ArrowRight,
  Info,
  Flame,
  Leaf
} from 'lucide-react';
import { TabType, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/mockData';

interface MenuSectionProps {
  onSelectTab: (tab: TabType) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectTab }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tea' | 'coffee' | 'dessert' | 'other'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', name: '전체 메뉴', count: MENU_ITEMS.length },
    { id: 'tea', name: '전통차 (8종)', count: MENU_ITEMS.filter(m => m.category === 'tea').length },
    { id: 'dessert', name: '빙수·디저트 (3종)', count: MENU_ITEMS.filter(m => m.category === 'dessert').length },
    { id: 'coffee', name: '커피 (4종)', count: MENU_ITEMS.filter(m => m.category === 'coffee').length },
    { id: 'other', name: '기타 음료', count: MENU_ITEMS.filter(m => m.category === 'other').length },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* 1. Header Intro */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D3] text-[#7C472A] text-xs font-semibold uppercase tracking-wider">
          <Leaf className="w-3.5 h-3.5 text-[#5B8266]" />
          <span>CAFE JOSUN MENU</span>
        </span>
        <h1 className="font-serif-kr text-3xl sm:text-4xl font-bold text-[#231A14]">
          카페조선 전체 메뉴
        </h1>
        <p className="text-sm sm:text-base text-[#6C5E51] leading-relaxed">
          우리 차의 깊은 맛부터 오늘의 디저트까지, 카페조선의 정성을 담은 메뉴를 소개합니다.
        </p>
      </div>

      {/* 2. Highlight Banner: Representative 4 signatures banner shortcut */}
      <div className="bg-gradient-to-r from-[#FAF1E3] via-[#FDF9F3] to-[#FAF1E3] border border-[#DECFB8] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#8C4A2F] text-white flex items-center justify-center font-bold shrink-0">
            <Sparkles className="w-5 h-5 text-[#F5DEB3]" />
          </div>
          <div>
            <h3 className="font-serif-kr text-base sm:text-lg font-bold text-[#231A14]">
              카페조선의 4대 시그니처가 궁금하신가요?
            </h3>
            <p className="text-xs text-[#706152]">
              조선빙수 · 십억차 · 이백곡차 · 두바이조선떡에 얽힌 이야기를 확인해 보세요.
            </p>
          </div>
        </div>
        <button
          onClick={() => onSelectTab('signature')}
          className="px-5 py-2.5 rounded-xl bg-[#8C4A2F] hover:bg-[#723922] text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs"
        >
          <span>대표 메뉴 스토리 보기</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Category & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F2EDE4] rounded-xl border border-[#DFD4C4]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#8C4A2F] text-white shadow-2xs'
                    : 'text-[#5C4F44] hover:text-[#231A14] hover:bg-white/60'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[#8C7D6E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="메뉴명 또는 키워드 검색..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#D5C4B0] rounded-xl text-xs text-[#231A14] placeholder-[#9E9081] focus:outline-none focus:ring-2 focus:ring-[#8C4A2F]/30 focus:border-[#8C4A2F]"
          />
        </div>
      </div>

      {/* 4. Coffee options notice box (디카페인 & 샷추가 옵션 안내) */}
      {(activeCategory === 'all' || activeCategory === 'coffee') && (
        <div className="bg-[#FAF7F0] border border-[#E5DACB] rounded-xl p-3.5 text-xs text-[#68594D] flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#8C4A2F] shrink-0" />
            <span>
              <strong>커피 추가 옵션:</strong> 디카페인 원두 변경 (+500원) / 에스프레소 샷 추가 (+500원)
            </span>
          </div>
          <span className="text-[11px] text-[#8C7D6E]">모든 커피 음료에 맞춤 적용 가능합니다.</span>
        </div>
      )}

      {/* 5. Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-2xl overflow-hidden border border-[#E8DFC0] shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image with badges */}
              <div className="relative aspect-[16/11] bg-[#FAF5ED] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.badge && (
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs text-white ${
                    item.badge === '대표' || item.badge === '시그니처'
                      ? 'bg-[#8C4A2F]'
                      : item.badge === '인기'
                      ? 'bg-[#C59B27]'
                      : 'bg-[#3D5A45]'
                  }`}>
                    {item.badge}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs font-bold text-xs sm:text-sm text-[#231A14] px-2.5 py-1 rounded-lg border border-[#E0D3C1] shadow-2xs">
                  {item.price}
                </span>
              </div>

              {/* Text info */}
              <div className="p-5 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif-kr text-lg font-bold text-[#231A14] group-hover:text-[#8C4A2F] transition-colors">
                    {item.name}
                  </h3>
                  {item.nameEn && (
                    <span className="text-[10px] text-[#9A8C7F] italic truncate max-w-[120px]">
                      {item.nameEn}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#63554A] leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Tags / Options */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags?.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#F4EFE6] text-[#7A4B2F] font-medium">
                      #{t}
                    </span>
                  ))}
                  {item.options?.map((opt, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#F8F5EE] text-[#695C51] border border-[#EADECE]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom quick action */}
            <div className="px-5 pb-4 pt-1 flex items-center justify-between border-t border-[#F2ECE1] text-xs">
              <span className="text-[11px] text-[#8C7D6E]">포장 가능 (기차 내 취식)</span>
              <span className="text-[#8C4A2F] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                자세히 보기 <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DFC0] space-y-3">
          <Coffee className="w-10 h-10 text-[#A69888] mx-auto opacity-60" />
          <p className="text-sm font-medium text-[#5F5144]">
            검색 결과에 맞는 메뉴가 없습니다.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="text-xs text-[#8C4A2F] underline font-semibold cursor-pointer"
          >
            전체 메뉴 다시보기
          </button>
        </div>
      )}

      {/* 6. Modal for detail view */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E5DACB] relative">
            <div className="relative aspect-[16/10] bg-[#FAF5ED]">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-kr text-2xl font-bold text-[#231A14]">
                    {selectedItem.name}
                  </h3>
                  <span className="text-xl font-bold text-[#8C4A2F]">
                    {selectedItem.price}
                  </span>
                </div>
                {selectedItem.nameEn && (
                  <p className="text-xs text-[#8E8073] mt-0.5">{selectedItem.nameEn}</p>
                )}
              </div>

              <p className="text-sm text-[#5B4D40] leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.options && (
                <div className="p-3 bg-[#FAF7F0] rounded-xl border border-[#EADECE] space-y-1">
                  <p className="text-xs font-bold text-[#2C241E]">주문 시 선택 가능 옵션:</p>
                  <ul className="text-xs text-[#6C5E51] list-disc list-inside space-y-0.5">
                    {selectedItem.options.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 flex gap-3">
                <a
                  href="tel:042-222-8818"
                  className="flex-1 py-3 rounded-xl bg-[#2C241E] text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#40352C] transition-colors"
                >
                  <Coffee className="w-4 h-4 text-[#E6A65C]" />
                  <span>전화로 빠른 사전 포장 주문</span>
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-3 rounded-xl border border-[#D5C2AB] text-xs font-semibold text-[#4A3E35] hover:bg-[#FAF6EE] cursor-pointer"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Takeaway / Train Travel Guide Banner */}
      <div className="bg-[#FAF5ED] border border-[#DECFB8] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <h4 className="font-serif-kr text-lg font-bold text-[#231A14]">
            기차 안에서 드실 수 있도록 안전하게 포장해 드립니다
          </h4>
          <p className="text-xs sm:text-sm text-[#6A5B4F]">
            흘림 방지 전용 실링 캡과 2구/4구 전용 종이 캐리어, 보온·보냉 백을 준비해 드립니다.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:042-222-8818"
            className="px-5 py-2.5 rounded-xl bg-[#8C4A2F] text-white font-semibold text-xs hover:bg-[#743A23] transition-colors"
          >
            사전 전화 주문: 042-222-8818
          </a>
        </div>
      </div>

    </div>
  );
};
