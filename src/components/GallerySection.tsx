import React, { useState } from 'react';
import { Camera, Instagram, ExternalLink, Sparkles, X, Heart } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'space' | 'menu' | 'bingsu' | 'photozone' | 'customer'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: '전체 보기' },
    { id: 'space', label: '카페 공간' },
    { id: 'menu', label: '메뉴 사진' },
    { id: 'bingsu', label: '조선빙수' },
    { id: 'photozone', label: '포토존' },
    { id: 'customer', label: '고객 사진' },
  ];

  const filtered = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D3] text-[#7C472A] text-xs font-semibold uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5 text-[#8C4A2F]" />
          <span>CAFE JOSUN MOMENTS</span>
        </span>
        <h1 className="font-serif-kr text-3xl sm:text-4xl font-bold text-[#231A14]">
          카페조선 갤러리
        </h1>
        <p className="text-sm sm:text-base text-[#6C5E51] leading-relaxed">
          카페조선의 순간들을 모았습니다. 우리 전통의 멋을 담은 공간부터 눈꽃빙수와 따뜻한 손님들의 기억까지 만나보세요.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === tab.id
                ? 'bg-[#8C4A2F] text-white shadow-xs'
                : 'bg-white border border-[#DFD4C4] text-[#5C4F44] hover:bg-[#FAF6EE]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#EADBCE] shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium">
                {item.tag}
              </span>
            </div>

            <div className="p-4 space-y-1">
              <h3 className="font-serif-kr font-bold text-sm text-[#231A14] group-hover:text-[#8C4A2F] transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#706254] line-clamp-2">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Community Banner */}
      <div className="bg-[#FAF4EC] rounded-3xl p-8 sm:p-12 border border-[#DFCDB9] text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-[#8C4A2F] text-white flex items-center justify-center mx-auto shadow-sm">
          <Instagram className="w-6 h-6" />
        </div>
        <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#231A14]">
          #카페조선 해시태그로 여러분의 순간을 공유해 주세요
        </h3>
        <p className="text-xs sm:text-sm text-[#6C5E51] max-w-xl mx-auto leading-relaxed">
          손님들이 직접 인스타그램에 남겨주신 소중한 사진은 사전 동의를 거쳐 카페조선 공식 갤러리에 소개될 수 있습니다.
          <span className="block mt-1 font-semibold text-[#8C4A2F]">#카페조선 #대전역카페 #조선빙수 #두바이조선떡</span>
        </p>
        <div className="pt-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2C241E] text-white hover:bg-[#3F342B] text-xs font-semibold transition-colors shadow-xs"
          >
            <span>카페조선 인스타그램 방문하기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E5DACB]">
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-bold text-[#8C4A2F]">{selectedPhoto.tag}</span>
              <h3 className="font-serif-kr text-xl font-bold text-[#231A14]">{selectedPhoto.title}</h3>
              <p className="text-xs sm:text-sm text-[#5C4D40] leading-relaxed">{selectedPhoto.subtitle}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
