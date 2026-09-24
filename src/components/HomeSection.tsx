import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Clock, 
  Sparkles, 
  Train, 
  Luggage, 
  Coffee, 
  Users, 
  Award,
  ChevronRight,
  Compass,
  Star
} from 'lucide-react';
import { TabType } from '../types';
import heroWideImage from '../assets/images/cafe_josun_wide_hero_1790207120178.jpg';

interface HomeSectionProps {
  onSelectTab: (tab: TabType) => void;
  lang: 'ko' | 'en';
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSelectTab, lang }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Wide Full-Screen Hero Section (Spans behind top menu) */}
      <section className="relative w-full h-screen min-h-[680px] sm:min-h-[760px] flex items-center overflow-hidden border-b border-[#E7DDCE] pt-24 sm:pt-28">
        {/* Full-bleed background wide image extending behind transparent header */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroWideImage}
            alt="카페조선 와이드 전경"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in duration-1000"
          />
          {/* Cinematic Dark Gradient Overlays for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#201712] via-transparent to-black/40" />
          {/* Hanji texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-hanji mix-blend-overlay pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Main Text Content */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C4A2F]/90 backdrop-blur-md text-white text-xs font-semibold shadow-md border border-[#F5DEB3]/30">
                  <Train className="w-3.5 h-3.5 text-[#F5DEB3]" />
                  <span>대전역 3번 출구 도보 1분 (TRY 오른쪽 옆건물)</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#F4ECE1] text-xs font-semibold border border-white/25">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6A65C]" />
                  <span>사계절 눈꽃빙수 & 시그니처 십억차</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#E6A65C] text-xs font-semibold border border-white/15">
                  <span>당일 KTX 승차권 10% 할인</span>
                </div>
              </div>

              {/* Main Headline - Explicitly requested copy */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-kr font-bold tracking-tight text-white leading-[1.25] drop-shadow-lg">
                {lang === 'ko' ? (
                  <>
                    조선에서의 차 한 잔,<br />
                    <span className="text-[#F5DEB3] relative inline-block drop-shadow-md">
                      대전역 도보 1분
                      <span className="absolute left-0 bottom-1 w-full h-3 bg-[#8C4A2F]/60 -z-10 rounded-sm" />
                    </span>
                  </>
                ) : (
                  <>
                    A Taste of Korean Tradition,<br />
                    <span className="text-[#F5DEB3]">1 Minute from Daejeon Station</span>
                  </>
                )}
              </h1>

              {/* Subcopy */}
              <p className="text-base sm:text-lg text-[#F0E6D8] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
                {lang === 'ko' 
                  ? '기차를 기다리는 시간도 여행이 되는 곳, 카페조선. 비타민나무열매로 맑고 산뜻하게 달인 십억차와 히말라야 설산 눈꽃빙수, 최대 60인 비즈니스 회의실이 당신을 맞이합니다.'
                  : 'Where waiting for your train becomes a peaceful journey. Enjoy artisanal Korean tea, towering snowflake bingsu, and spacious seminar facilities.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onSelectTab('menu')}
                  className="px-6 py-3.5 rounded-xl bg-[#8C4A2F] hover:bg-[#723922] text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer active:scale-98 border border-[#B86846]"
                >
                  <span>메뉴 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectTab('location')}
                  className="px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white text-[#2C241E] font-semibold text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#8C4A2F]" />
                  <span>오시는 길 (도보 1분)</span>
                </button>

                <button
                  onClick={() => onSelectTab('meeting')}
                  className="px-5 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-[#E6A65C]" />
                  <span>회의실 대관 안내</span>
                </button>

                <a
                  href="tel:042-222-8818"
                  className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F5DEB3]" />
                  <span>042-222-8818</span>
                </a>
              </div>

              {/* Station traveler feature pills - Wide translucent row */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 text-left">
                <div className="p-3 rounded-xl bg-black/45 backdrop-blur-md border border-white/15 shadow-sm text-white">
                  <div className="flex items-center gap-1.5 text-[#F5DEB3] font-semibold text-xs mb-0.5">
                    <Train className="w-3.5 h-3.5" />
                    <span>초역세권</span>
                  </div>
                  <p className="text-[11px] text-[#D8C7B5]">3번 출구 도보 1분 (TRY 옆)</p>
                </div>

                <div className="p-3 rounded-xl bg-black/45 backdrop-blur-md border border-white/15 shadow-sm text-white">
                  <div className="flex items-center gap-1.5 text-[#F5DEB3] font-semibold text-xs mb-0.5">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>빠른 테이크아웃</span>
                  </div>
                  <p className="text-[11px] text-[#D8C7B5]">기차용 튼튼 안심 포장</p>
                </div>

                <div className="p-3 rounded-xl bg-black/45 backdrop-blur-md border border-white/15 shadow-sm text-white">
                  <div className="flex items-center gap-1.5 text-[#F5DEB3] font-semibold text-xs mb-0.5">
                    <Luggage className="w-3.5 h-3.5" />
                    <span>캐리어석 완비</span>
                  </div>
                  <p className="text-[11px] text-[#D8C7B5]">짐 보관 & 쾌적 좌석</p>
                </div>

                <div className="p-3 rounded-xl bg-black/45 backdrop-blur-md border border-white/15 shadow-sm text-white">
                  <div className="flex items-center gap-1.5 text-[#F5DEB3] font-semibold text-xs mb-0.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>최대 60인</span>
                  </div>
                  <p className="text-[11px] text-[#D8C7B5]">회의실 & 세미나 대관</p>
                </div>
              </div>
            </div>

            {/* Right side: Floating Signature Trio Preview Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-black/55 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl text-white space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#F5DEB3]" />
                    <h3 className="font-serif-kr font-bold text-base text-white">카페조선 3대 시그니처</h3>
                  </div>
                  <span className="text-[10px] bg-[#8C4A2F] text-white px-2 py-0.5 rounded-full font-bold">
                    대표 메뉴
                  </span>
                </div>

                {/* 3 Signatures Quick List */}
                <div className="space-y-3 text-xs">
                  <div 
                    onClick={() => onSelectTab('signature')}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all cursor-pointer border border-white/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/20">
                      <img
                        src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&auto=format&fit=crop&q=80"
                        alt="조선빙수"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white group-hover:text-[#F5DEB3] transition-colors">조선빙수</span>
                        <span className="font-semibold text-[#F5DEB3]">14,900원</span>
                      </div>
                      <p className="text-[11px] text-[#D1C2B0] truncate">히말라야 설산 비주얼 순백 눈꽃</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => onSelectTab('signature')}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all cursor-pointer border border-white/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/20">
                      <img
                        src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200&auto=format&fit=crop&q=80"
                        alt="십억차"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white group-hover:text-[#F5DEB3] transition-colors">십억차 (十億茶)</span>
                        <span className="font-semibold text-[#F5DEB3]">8,900원</span>
                      </div>
                      <p className="text-[11px] text-[#D1C2B0] truncate">비타민나무열매 + 카이스트 특별원료</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => onSelectTab('signature')}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all cursor-pointer border border-white/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/20">
                      <img
                        src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&auto=format&fit=crop&q=80"
                        alt="두바이조선떡"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white group-hover:text-[#F5DEB3] transition-colors">두바이조선떡</span>
                        <span className="font-semibold text-[#F5DEB3]">3,800원</span>
                      </div>
                      <p className="text-[11px] text-[#D1C2B0] truncate">바삭 피스타치오 + 쫀득 찹쌀떡</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 text-center">
                  <button
                    onClick={() => onSelectTab('signature')}
                    className="text-xs text-[#F5DEB3] hover:text-white font-semibold flex items-center justify-center gap-1.5 mx-auto transition-colors cursor-pointer"
                  >
                    <span>대표 메뉴 상세 스토리 보기</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1.5. Bigdata Search Ranking Theme Section (대전역카페 · 대전역회의실 · 대전빙수) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6C5] shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#EFE5D8]">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E1] text-[#8C4A2F] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>빅데이터 랭킹 추천 & 실시간 검색 테마</span>
              </div>
              <h2 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#231A14]">
                대전역에서 가장 많이 찾는 3대 키워드
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#7A695A]">
              <span className="w-2 h-2 rounded-full bg-[#03C75A] animate-ping" />
              <span>실시간 방문자 만족도 <strong>4.9 / 5.0</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
            {/* Keyword 1: 대전역카페 */}
            <div 
              onClick={() => onSelectTab('about')}
              className="p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F5EDE1] border border-[#EADBCE] transition-all cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-[#8C4A2F] text-white text-xs font-bold">
                  #대전역카페
                </span>
                <span className="text-[11px] text-[#8C7D6E] font-medium">도보 1분</span>
              </div>
              <h3 className="font-serif-kr text-lg font-bold text-[#231A14] group-hover:text-[#8C4A2F] transition-colors mb-1">
                대전역카페 카페조선
              </h3>
              <p className="text-xs text-[#635549] leading-relaxed">
                대전역 3번 출구 바로 앞(TRY 오른쪽 옆). 기차 탑승 전 쾌적한 캐리어석, 빠른 테이크아웃과 당일 KTX 10% 할인 혜택.
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#8C4A2F]">
                <span>카페 소개 바로가기</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Keyword 2: 대전역회의실 */}
            <div 
              onClick={() => onSelectTab('meeting')}
              className="p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F5EDE1] border border-[#EADBCE] transition-all cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-[#2C241E] text-white text-xs font-bold">
                  #대전역회의실
                </span>
                <span className="text-[11px] text-[#8C7D6E] font-medium">최대 60인</span>
              </div>
              <h3 className="font-serif-kr text-lg font-bold text-[#231A14] group-hover:text-[#8C4A2F] transition-colors mb-1">
                대전역회의실 대관 전문
              </h3>
              <p className="text-xs text-[#635549] leading-relaxed">
                전국에서 KTX로 모이는 최적의 비즈니스 세미나실. 빔프로젝터, 음향장비, 화이트보드 및 고급 떡·차 다과 케이터링 완비.
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#8C4A2F]">
                <span>회의실 요금 및 예약</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Keyword 3: 대전빙수 */}
            <div 
              onClick={() => onSelectTab('signature')}
              className="p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F5EDE1] border border-[#EADBCE] transition-all cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-[#C59B27] text-white text-xs font-bold">
                  #대전빙수
                </span>
                <span className="text-[11px] text-[#8C7D6E] font-medium">사계절 눈꽃</span>
              </div>
              <h3 className="font-serif-kr text-lg font-bold text-[#231A14] group-hover:text-[#8C4A2F] transition-colors mb-1">
                대전빙수 맛집 조선빙수
              </h3>
              <p className="text-xs text-[#635549] leading-relaxed">
                히말라야 설산 비주얼의 눈꽃빙수 원탑! 입에서 사르르 녹아내리는 부드러운 우유 눈꽃을 사계절 내내 푸짐하게 즐기실 수 있습니다.
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#8C4A2F]">
                <span>조선빙수 스토리 보기</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 오늘의 추천 메뉴 Section: 오늘, 조선이 권하는 한 잔 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8C4A2F] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>TODAY'S SPECIAL · 대전역카페 시그니처</span>
          </div>
          <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            오늘, 조선이 권하는 한 잔
          </h2>
          <p className="text-sm text-[#6C5E51]">
            오랜 시간 사랑받아 온 장인의 손길과 현대적 감각이 어우러진 카페조선 대표 메뉴입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: 조선빙수 (대전빙수 명소) */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E6DDD0] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF6EE]">
              <img
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80"
                alt="대전빙수 조선빙수"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#8C4A2F] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                대전빙수 명소
              </span>
              <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#2C241E] font-bold text-sm px-3 py-1 rounded-lg shadow-sm border border-[#E6DDD0]">
                14,900원
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-kr text-xl font-bold text-[#231A14] group-hover:text-[#8C4A2F] transition-colors">
                    조선빙수 (대전빙수 대표)
                  </h3>
                  <span className="text-xs text-[#8C7D6E]">사계절 눈꽃</span>
                </div>
                <p className="text-xs sm:text-sm text-[#615448] leading-relaxed">
                  히말라야 설산 같은 비주얼, 토핑 없이 눈꽃만 떠먹어도 입에서 사르르 녹는 대전빙수 대표 시그니처. 2~3인이 함께 즐겨도 넉넉합니다.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('signature')}
                className="w-full py-2.5 rounded-lg bg-[#FAF3E8] hover:bg-[#F2E5D0] text-[#7C442A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>대전빙수 스토리 보기</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: 십억차 (대전역카페 시그니처) */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E6DDD0] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF6EE]">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80"
                alt="대전역카페 십억차"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#C59B27] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                대전역카페 시그니처
              </span>
              <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#2C241E] font-bold text-sm px-3 py-1 rounded-lg shadow-sm border border-[#E6DDD0]">
                8,900원
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-kr text-xl font-bold text-[#231A14] group-hover:text-[#8C4A2F] transition-colors">
                    십억차 (十億茶)
                  </h3>
                  <span className="text-xs text-[#8C7D6E]">비타민 충전</span>
                </div>
                <p className="text-xs sm:text-sm text-[#615448] leading-relaxed">
                  비타민나무열매를 사용했고 카이스트 교수가 만든 이엠생명과학연구원에서 개발한 특별한 원료를 더해 상큼하고 산뜻하게 즐기는 카페조선의 시그니처 티.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('signature')}
                className="w-full py-2.5 rounded-lg bg-[#FAF3E8] hover:bg-[#F2E5D0] text-[#7C442A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>십억차 이야기 보기</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: 두바이조선떡 (대전역 디저트) */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E6DDD0] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF6EE]">
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80"
                alt="두바이조선떡"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#3D5A45] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                대전역 디저트
              </span>
              <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#2C241E] font-bold text-sm px-3 py-1 rounded-lg shadow-sm border border-[#E6DDD0]">
                3,800원
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-kr text-xl font-bold text-[#231A14] group-hover:text-[#8C4A2F] transition-colors">
                    두바이조선떡
                  </h3>
                  <span className="text-xs text-[#8C7D6E]">겉쫀득 속바삭</span>
                </div>
                <p className="text-xs sm:text-sm text-[#615448] leading-relaxed">
                  요즘 가장 핫한 두바이 피스타치오 & 카다이프를 쫀득한 우리 전통 찹쌀떡으로 정성스레 풀어낸 달콤고소한 한 조각.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('signature')}
                className="w-full py-2.5 rounded-lg bg-[#FAF3E8] hover:bg-[#F2E5D0] text-[#7C442A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>두바이조선떡 알아보기</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Action to view all menu */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onSelectTab('menu')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D5C2AB] bg-white hover:bg-[#F6EFE5] text-[#3F332A] font-semibold text-sm shadow-xs transition-all cursor-pointer"
          >
            <span>카페조선 전체 메뉴 및 가격표 보기</span>
            <ArrowRight className="w-4 h-4 text-[#8C4A2F]" />
          </button>
        </div>
      </section>

      {/* 3. 카페조선 소개 요약 & 브랜드 필로소피 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F4EEE2] border border-[#E0D3C1] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#8C4A2F] tracking-widest uppercase">
                ABOUT CAFE JOSUN
              </span>
              <h2 className="font-serif-kr text-2xl sm:text-3xl lg:text-4xl font-bold text-[#231A14] leading-snug">
                전통차의 깊은 맛과<br />
                요즘 디저트의 즐거움이 한 공간에
              </h2>
              <p className="text-sm sm:text-base text-[#56493D] leading-relaxed">
                카페조선은 대전역 바로 앞에서 여행객과 동네 손님 모두에게 잠시 쉬어 갈 자리를 내어드립니다.
                기차 시간이 빠듯해도, 여유롭게 머물러도 좋습니다. 할머니 댁에서 마시던 달큰한 대추차, 입안에서 사르르 녹던 빙수처럼 누구나 마음 한편에 간직한 맛을 지금의 감각으로 정성껏 차려냈습니다.
              </p>
              <p className="text-sm text-[#6C5E51]">
                회의와 세미나를 위한 <strong className="text-[#8C4A2F]">최대 60인 비즈니스 회의실</strong>도 함께 완비되어 있어, 전국 각지에서 KTX로 모이는 최적의 모임 장소가 되어 드립니다.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={() => onSelectTab('about')}
                  className="px-5 py-2.5 rounded-lg bg-[#2C241E] text-white font-medium text-xs hover:bg-[#40352C] transition-colors cursor-pointer"
                >
                  카페조선 이야기 더보기
                </button>
                <button
                  onClick={() => onSelectTab('meeting')}
                  className="px-5 py-2.5 rounded-lg bg-white border border-[#D0C0AC] text-[#7C442A] font-semibold text-xs hover:bg-[#FAF6EE] transition-colors cursor-pointer"
                >
                  회의실 대관 안내
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-white/80 border border-[#E2D6C5] space-y-1">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="font-bold text-sm text-[#231A14]">전통 (傳統)</div>
                <p className="text-xs text-[#706254]">오래 사랑받아 온 우리 차와 재료의 깊은 본질을 존중합니다.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-[#E2D6C5] space-y-1">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="font-bold text-sm text-[#231A14]">정성 (精誠)</div>
                <p className="text-xs text-[#706254]">차 한 잔, 빙수 한 그릇도 직접 끓이고 손질한 재료로 준비합니다.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-[#E2D6C5] space-y-1">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="font-bold text-sm text-[#231A14]">쉼 (休)</div>
                <p className="text-xs text-[#706254]">잠깐 머물러도 충분히 편안하게 쉬었다고 느낄 수 있는 공간을 지향합니다.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#8C4A2F] text-white space-y-1">
                <div className="w-8 h-8 rounded-lg bg-white/20 text-[#F5DEB3] flex items-center justify-center font-bold text-sm">
                  ★
                </div>
                <div className="font-bold text-sm text-white">대전역 도보 1분</div>
                <p className="text-xs text-white/85">3번 출구 횡단보도 건너 TRY 오른쪽 옆건물, 안심 휴식.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 방문 안내 요약 카드 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E4D7C7] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F1E8D9] text-[#7C472A] text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>방문 안내</span>
              </div>
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#231A14]">
                대전광역시 동구 대전로813번길 5 (대전역 3번 출구 도보 1분, TRY 매장 오른쪽 옆건물)
              </h3>
              <p className="text-xs sm:text-sm text-[#6C5F53] flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#8C4A2F]" />
                  매일 오전 10시 ~ 오후 10시 (연중무휴)
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4 text-[#8C4A2F]" />
                  문의: 042-222-8818
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onSelectTab('location')}
                className="px-5 py-3 rounded-xl bg-[#8C4A2F] hover:bg-[#743A23] text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>찾아오는 길 & 지도 보기</span>
              </button>
              <a
                href="tel:042-222-8818"
                className="px-5 py-3 rounded-xl border border-[#D5C2AB] hover:bg-[#FAF5ED] text-[#3E332A] font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#8C4A2F]" />
                <span>전화 문의</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Special Event / Traveler Coupon Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2C241E] to-[#47392E] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E6A65C] text-[#2C241E] text-[10px] font-bold">
              KTX / SRT 승차권 소지자 혜택
            </span>
            <h4 className="font-serif-kr text-lg sm:text-xl font-bold text-[#FBF6EE]">
              당일 열차 승차권 제시 시 제조 음료 10% 즉시 할인
            </h4>
            <p className="text-xs text-[#D1C5B6]">
              코레일톡 또는 종이 승차권을 결제 시 카운터에 보여주시면 10% 혜택을 드립니다.
            </p>
          </div>
          <button
            onClick={() => onSelectTab('news')}
            className="px-5 py-2.5 rounded-xl bg-white text-[#2C241E] hover:bg-[#F3EFE7] font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-sm"
          >
            할인 및 쿠폰 안내 보기
          </button>
        </div>
      </section>

      {/* 6. Big Data SEO Keywords & Area Index Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#FAF5ED] border border-[#EADBCE] text-xs space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8DCCE] pb-2">
            <span className="font-bold text-[#7C4328] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              카페조선 주요 검색 키워드 & 정보 (빅데이터 랭킹 추천)
            </span>
            <span className="text-[11px] text-[#8C7D6E]">
              대전역 서광장 3번 출구 도보 1분 (TRY 매장 오른쪽 옆건물)
            </span>
          </div>
          <p className="text-xs text-[#6B5C50] leading-relaxed">
            카페조선은 <strong className="text-[#8C4A2F]">#대전역카페</strong>(도보 1분 초역세권), <strong className="text-[#8C4A2F]">#대전역회의실</strong>(최대 60인 비즈니스 세미나실 대관 및 다과 케이터링), <strong className="text-[#8C4A2F]">#대전빙수</strong>(사계절 히말라야 설산 눈꽃빙수 맛집)를 대표하는 프리미엄 한옥 감성 카페입니다.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-[#5A4D42] pt-1">
            <button onClick={() => onSelectTab('about')} className="px-3 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] text-[#7C4328] font-bold transition-colors cursor-pointer shadow-2xs">#대전역카페</button>
            <button onClick={() => onSelectTab('meeting')} className="px-3 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] text-[#7C4328] font-bold transition-colors cursor-pointer shadow-2xs">#대전역회의실</button>
            <button onClick={() => onSelectTab('signature')} className="px-3 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] text-[#7C4328] font-bold transition-colors cursor-pointer shadow-2xs">#대전빙수</button>
            <button onClick={() => onSelectTab('menu')} className="px-2.5 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] transition-colors cursor-pointer">#대전역 디저트</button>
            <button onClick={() => onSelectTab('meeting')} className="px-2.5 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] transition-colors cursor-pointer">#대전 세미나실 대관</button>
            <button onClick={() => onSelectTab('signature')} className="px-2.5 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] transition-colors cursor-pointer">#대전 눈꽃빙수 맛집</button>
            <button onClick={() => onSelectTab('location')} className="px-2.5 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] transition-colors cursor-pointer">#대전역 3번출구 1분</button>
            <button onClick={() => onSelectTab('signature')} className="px-2.5 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] transition-colors cursor-pointer">#십억차</button>
            <button onClick={() => onSelectTab('signature')} className="px-2.5 py-1 rounded-lg bg-white border border-[#DDD0BF] hover:bg-[#F2E5D0] transition-colors cursor-pointer">#두바이조선떡</button>
          </div>
        </div>
      </section>
    </div>
  );
};
