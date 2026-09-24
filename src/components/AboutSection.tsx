import React from 'react';
import { 
  Heart, 
  Sparkles, 
  Coffee, 
  Train, 
  Luggage, 
  Users, 
  ShieldCheck, 
  Globe, 
  MapPin, 
  Clock, 
  Phone,
  CheckCircle2
} from 'lucide-react';
import { TabType } from '../types';

interface AboutSectionProps {
  onSelectTab: (tab: TabType) => void;
  lang: 'ko' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectTab, lang }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      
      {/* 1. Header Banner */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-[#EFE4D3] text-[#7C472A] text-xs font-semibold tracking-wider uppercase">
          ABOUT CAFE JOSUN
        </span>
        <h1 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231A14]">
          카페조선 이야기
        </h1>
        <p className="text-sm sm:text-base text-[#68594D] leading-relaxed">
          하루에도 수많은 사람이 오가는 대전역, 그 짧은 기다림을 조금 더 따뜻하게 만들고 싶다는 마음에서 시작했습니다.
        </p>
      </div>

      {/* 2. 카페조선 이야기 본문 */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E5DACB] shadow-xs relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-[#42362C] leading-relaxed text-sm sm:text-base">
            <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
              기차를 기다리는 시간도<br />
              <span className="text-[#8C4A2F]">여행의 좋은 기억</span>이 되기를
            </h2>
            <p>
              하루에도 수많은 사람이 오가는 대전역. 누군가는 새로운 목적지로 떠나고, 누군가는 그리운 집으로 돌아오고, 누군가는 소중한 사람을 잠시 기다립니다.
            </p>
            <p>
              카페조선은 그 짧은 기다림을 조금 더 따뜻하게 만들고 싶다는 마음에서 출발했습니다. 
              어릴 적 할머니 댁에서 마시던 달큰하고 진한 대추차, 입안에서 사르르 녹아내리던 빙수처럼 누구나 마음 한편에 간직한 그리운 맛을 지금의 감각으로 다시 정성스레 차려냈습니다.
            </p>
            <p className="font-medium text-[#2C241E]">
              바쁜 걸음 사이, 따뜻한 차 한 잔이 여러분의 여행을 조금 더 좋은 기억으로 남겨주기를 진심으로 바랍니다.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8C4A2F] text-white flex items-center justify-center font-serif-kr font-bold text-lg">
                朝
              </div>
              <div>
                <p className="text-xs font-bold text-[#2C241E]">카페조선 일동</p>
                <p className="text-[11px] text-[#857667]">대전역 3번 출구 앞 따뜻한 쉼터</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF6EE]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
                alt="카페조선 아늑한 실내 공간"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#8C4A2F] text-white p-3.5 rounded-xl shadow-lg text-xs font-serif-kr">
              <p className="text-[#F5DEB3] text-[10px]">DAEJEON STATION</p>
              <p className="font-bold text-sm">도보 1분 거리 (TRY 옆)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 브랜드 소개 & 카페조선이 지키는 세 가지 */}
      <section className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#8C4A2F] tracking-widest uppercase">BRAND PHILOSOPHY</span>
          <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            이름에 담은 뜻 & 지키는 세 가지
          </h2>
          <p className="text-xs sm:text-sm text-[#6C5E51]">
            <strong className="text-[#8C4A2F]">'조선(朝鮮)'</strong>은 아침 해가 맑게 빛나는 땅이라는 뜻을 품고 있습니다. 
            우리 것의 멋과 맛을 맑고 편안하게 전하는 공간을 지향합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="bg-white rounded-2xl p-7 border border-[#E7DDCE] shadow-xs space-y-4 hover:border-[#8C4A2F]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FAF1E3] text-[#8C4A2F] flex items-center justify-center font-serif-kr font-bold text-xl">
              傳統
            </div>
            <h3 className="font-serif-kr text-xl font-bold text-[#231A14]">전통 (Tradition)</h3>
            <p className="text-xs sm:text-sm text-[#5D5044] leading-relaxed">
              오래도록 사랑받아 온 우리 차와 천연 식재료의 맛을 온전히 존중합니다. 시대가 바뀌어도 변하지 않는 건강한 본질을 지켜갑니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-[#E7DDCE] shadow-xs space-y-4 hover:border-[#8C4A2F]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FAF1E3] text-[#8C4A2F] flex items-center justify-center font-serif-kr font-bold text-xl">
              精誠
            </div>
            <h3 className="font-serif-kr text-xl font-bold text-[#231A14]">정성 (Sincerity)</h3>
            <p className="text-xs sm:text-sm text-[#5D5044] leading-relaxed">
              차 한 잔, 빙수 한 그릇도 매장에서 직접 끓이고 손질한 정직한 재료로 준비합니다. 한 분 한 분 대접하는 마음을 담아 차려냅니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-[#E7DDCE] shadow-xs space-y-4 hover:border-[#8C4A2F]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FAF1E3] text-[#8C4A2F] flex items-center justify-center font-serif-kr font-bold text-xl">
              休
            </div>
            <h3 className="font-serif-kr text-xl font-bold text-[#231A14]">쉼 (Rest & Peace)</h3>
            <p className="text-xs sm:text-sm text-[#5D5044] leading-relaxed">
              잠깐 머물러도 복잡한 일상을 내려놓고 충분히 쉬었다고 느낄 수 있는 편안한 좌석과 단정한 음악, 여유로운 온기를 선사합니다.
            </p>
          </div>

        </div>
      </section>

      {/* 4. 대전역 2분 카페 - 기차 시간이 빠듯해도 괜찮아요 */}
      <section className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 border border-[#E2D5C3]">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCB0] text-[#69480C] text-xs font-bold">
            <Train className="w-3.5 h-3.5" />
            <span>대전역 2분 카페</span>
          </span>
          <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            기차 시간이 빠듯해도 괜찮아요
          </h2>
          <p className="text-xs sm:text-sm text-[#6C5E51]">
            여행자의 마음을 누구보다 잘 알기에 세심한 서비스를 준비했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E5DACB] shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center mb-3">
              <Train className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#231A14]">역에서 2분</h4>
            <p className="text-xs text-[#625549] leading-relaxed">
              대전역 3번 출구에서 횡단보도만 건너면 바로입니다. 열차 탑승 전까지 시간 낭비 없이 여유 있게 이동할 수 있어요.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DACB] shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center mb-3">
              <Coffee className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#231A14]">빠른 포장 (테이크아웃)</h4>
            <p className="text-xs text-[#625549] leading-relaxed">
              모든 음료와 디저트는 테이크아웃 가능하며, 기차 안에서도 쏟아짐 없이 편하게 드실 수 있도록 전용 캐리어와 용기에 준비해 드립니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DACB] shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center mb-3">
              <Luggage className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#231A14]">짐이 있어도 편하게</h4>
            <p className="text-xs text-[#625549] leading-relaxed">
              무거운 여행용 캐리어를 옆에 두고 앉을 수 있는 넉넉한 좌석 공간과 안전한 캐리어 보관 구역을 마련했습니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5DACB] shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#231A14]">전국에서 모이기 좋은 곳</h4>
            <p className="text-xs text-[#625549] leading-relaxed">
              서울, 부산, 광주에서 KTX로 약 1~2시간이면 도착하는 국토의 중심. 최대 60인 회의실 대관으로 전국 모임에 최적입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5. 외국인 안내 (Guide for International Visitors) */}
      <section className="bg-[#261E18] rounded-3xl p-8 sm:p-12 text-[#EFE8DC] border border-[#3E3228] shadow-lg">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-[#E6A65C] text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            <span>Guide for International Visitors</span>
          </div>

          <h3 className="font-serif-kr text-2xl sm:text-3xl font-bold text-white leading-snug">
            A Taste of Korean Tradition,<br />
            Right by Daejeon Station
          </h3>

          <p className="text-sm sm:text-base text-[#D4C8B8] leading-relaxed">
            Cafe Josun is a Korean traditional tea café just a 1-minute walk from Exit 3 of Daejeon Station (right next to the TRY store). 
            We serve handcrafted teas, including our signature Sibeok-cha (vitalizing sea buckthorn fruit tea created with KAIST EM Bio research ingredients) and Ibaekgok-cha (nourishing grain tea), along with Josun Bingsu, our magnificent snowflake shaved ice dessert. 
            A modern seminar meeting room for up to 60 guests is also available for rent.
          </p>

          <p className="text-sm text-[#C8BAA8] italic">
            Whether you have ten minutes before your train or a whole afternoon to spare, stop by for a warm cup and a moment of peaceful rest.
          </p>

          <div className="pt-4 border-t border-[#3F3327] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#BFAFA0]">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#E6A65C] shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Opening Hours</div>
                <div>Open daily 10:00 AM – 10:00 PM</div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#E6A65C] shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Address</div>
                <div>5, Daejeon-ro 813beon-gil, Dong-gu, Daejeon (Exit 3)</div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-[#E6A65C] shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Inquiry</div>
                <div>+82-42-222-8818</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Check Menu or Meeting room */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => onSelectTab('menu')}
          className="px-6 py-3 rounded-xl bg-[#8C4A2F] hover:bg-[#743A23] text-white font-semibold text-sm shadow-sm transition-colors cursor-pointer"
        >
          카페조선 메뉴 살펴보기
        </button>
        <button
          onClick={() => onSelectTab('location')}
          className="px-6 py-3 rounded-xl bg-white border border-[#D5C4B0] text-[#3F342B] font-semibold text-sm hover:bg-[#FAF6EE] transition-colors cursor-pointer"
        >
          대전역 3번 출구 찾아오시는 길
        </button>
      </div>

    </div>
  );
};
