import React, { useState } from 'react';
import { 
  MapPin, 
  Train, 
  Phone, 
  Clock, 
  ExternalLink, 
  Car, 
  Navigation, 
  Copy, 
  Check, 
  AlertCircle,
  Building,
  ArrowRight
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const address = '대전광역시 동구 대전로813번길 5';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D3] text-[#7C472A] text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#8C4A2F]" />
          <span>LOCATION & DIRECTIONS</span>
        </span>
        <h1 className="font-serif-kr text-3xl sm:text-4xl font-bold text-[#231A14]">
          오시는 길
        </h1>
        <p className="text-sm sm:text-base text-[#6C5E51] leading-relaxed">
          대전역 3번 출구에서 횡단보도만 건너면 도보 1분! (TRY 매장 오른쪽 옆건물) 기차 타기 전 편안하게 방문하세요.
        </p>
      </div>

      {/* Address & Quick Info Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DACB] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF0E1] text-[#8C4A2F] text-xs font-bold">
            <Train className="w-3.5 h-3.5" />
            <span>대전역 서광장 도보 1분</span>
          </div>
          <h2 className="font-serif-kr text-2xl font-bold text-[#231A14]">
            {address}
          </h2>
          <p className="text-xs sm:text-sm text-[#706254]">
            지번: 대전광역시 동구 정동 | 대전역 3번 출구 맞은편 TRY 매장 오른쪽 옆건물
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <button
            onClick={handleCopyAddress}
            className="px-4 py-2.5 rounded-xl border border-[#D5C2AB] text-xs font-semibold text-[#42352A] hover:bg-[#FAF6EE] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-[#5B8266]" /> : <Copy className="w-4 h-4 text-[#8C4A2F]" />}
            <span>{copied ? '주소 복사 완료!' : '주소 복사'}</span>
          </button>
          <a
            href="https://map.naver.com/p/search/%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EB%8C%80%EC%A0%84%EB%A1%9C813%EB%B2%88%EA%B8%B8%205"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#03C75A] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#02b350] transition-colors shadow-2xs"
          >
            <span>네이버 지도</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://map.kakao.com/link/search/대전광역시 동구 대전로813번길 5"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#FEE500] text-[#191919] text-xs font-bold flex items-center gap-1.5 hover:bg-[#ebd300] transition-colors shadow-2xs"
          >
            <span>카카오맵</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 대전역에서 오는 길 3단계 시각적 가이드 */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#8C4A2F] tracking-widest uppercase">STEP BY STEP</span>
          <h3 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            대전역에서 오는 가장 빠른 길
          </h3>
          <p className="text-xs sm:text-sm text-[#6C5E51]">
            기차에서 내려 에스컬레이터를 타고 나오시면 3분도 채 걸리지 않습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-[#8C4A2F] text-white flex items-center justify-center font-bold text-base">
              1
            </div>
            <h4 className="font-bold text-base text-[#231A14]">
              대전역 서광장 3번 출구
            </h4>
            <p className="text-xs sm:text-sm text-[#615347] leading-relaxed">
              KTX/열차에서 내려 대전역 맞이방 <strong>서광장 방면 3번 출구(오른쪽)</strong>로 나옵니다.
            </p>
            <div className="p-3 bg-[#FAF7F0] rounded-xl text-[11px] text-[#7A695A] border border-[#EADECE]">
              * 지하철 이용 시에도 3번 출구 연계 통로를 이용하시면 편리합니다.
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-[#8C4A2F] text-white flex items-center justify-center font-bold text-base">
              2
            </div>
            <h4 className="font-bold text-base text-[#231A14]">
              출구 앞 횡단보도 건너기
            </h4>
            <p className="text-xs sm:text-sm text-[#615347] leading-relaxed">
              3번 출구 바로 앞으로 나오시면 마주하는 <strong>첫 번째 횡단보도</strong>를 바로 건너세요.
            </p>
            <div className="p-3 bg-[#FAF7F0] rounded-xl text-[11px] text-[#7A695A] border border-[#EADECE]">
              * 횡단보도 신호 대기 시간 포함 약 1분 소요.
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-[#5B8266] text-white flex items-center justify-center font-bold text-base">
              3
            </div>
            <h4 className="font-bold text-base text-[#231A14]">
              TRY 매장 오른쪽 옆건물 도착!
            </h4>
            <p className="text-xs sm:text-sm text-[#615347] leading-relaxed">
              횡단보도를 건너면 왼편에 TRY 매장이 보이며, 바로 <strong>오른쪽 옆건물</strong>이 카페조선입니다. (도보 1분)
            </p>
            <div className="p-3 bg-[#FAF7F0] rounded-xl text-[11px] text-[#5B8266] font-semibold border border-[#EADECE]">
              * 단아한 원목 간판과 '朝鮮' 현판을 확인해 주세요.
            </div>
          </div>

        </div>
      </section>

      {/* Visual Map Mockup & Landmark Diagram */}
      <section className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E2D6C5] shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-[#E4D9C8] pb-4">
          <div>
            <h4 className="font-serif-kr text-xl font-bold text-[#231A14]">
              대전역 3번 출구 랜드마크 안내도
            </h4>
            <p className="text-xs text-[#706254]">
              직관적인 약도로 길을 잃지 않고 바로 찾아오실 수 있습니다.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C4A2F] bg-white px-3 py-1 rounded-full border border-[#D8C7B4]">
              <Navigation className="w-3.5 h-3.5" />
              실제 보행 거리 도보 1분
            </span>
          </div>
        </div>

        {/* Illustrated Map graphic representation */}
        <div className="bg-white rounded-2xl p-6 border border-[#DFCBB5] relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Daejeon Station block */}
            <div className="md:col-span-4 bg-[#2C241E] text-white p-5 rounded-xl space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-white/10 mx-auto flex items-center justify-center">
                <Train className="w-5 h-5 text-[#E6A65C]" />
              </div>
              <div className="font-bold text-base">KTX 대전역</div>
              <div className="text-xs text-[#E6A65C] font-semibold">서광장 3번 출구</div>
              <p className="text-[10px] text-[#C0B3A3]">에스컬레이터 타고 도보 1분</p>
            </div>

            {/* Path & Crosswalk arrow */}
            <div className="md:col-span-4 flex flex-col items-center justify-center py-4 space-y-2">
              <span className="text-xs font-bold text-[#8C4A2F] bg-[#FAF1E3] px-3 py-1 rounded-full border border-[#DECFB8]">
                횡단보도 1회 건너기 (도보 1분)
              </span>
              <div className="w-full flex items-center justify-center gap-2 text-[#8C4A2F]">
                <div className="h-0.5 flex-1 bg-dashed border-t-2 border-dashed border-[#8C4A2F]" />
                <ArrowRight className="w-5 h-5 animate-pulse" />
                <div className="h-0.5 flex-1 bg-dashed border-t-2 border-dashed border-[#8C4A2F]" />
              </div>
              <span className="text-[11px] text-[#7A6C5F]">TRY 매장 바로 오른쪽 옆건물</span>
            </div>

            {/* Cafe Josun block */}
            <div className="md:col-span-4 bg-[#8C4A2F] text-white p-5 rounded-xl space-y-2 text-center shadow-md">
              <div className="w-10 h-10 rounded-lg bg-white text-[#8C4A2F] mx-auto flex items-center justify-center font-serif-kr font-bold text-lg">
                朝鮮
              </div>
              <div className="font-bold text-base">카페조선 (Cafe Josun)</div>
              <div className="text-xs text-[#F5DEB3] font-semibold">동구 대전로813번길 5</div>
              <p className="text-[10px] text-white/80">1F 카페 & 눈꽃빙수 / 2F 회의실 대관</p>
            </div>

          </div>
        </div>
      </section>

      {/* Parking, Operating Hours & Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Hours */}
        <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-[#8C4A2F]">
            <Clock className="w-5 h-5" />
            <h4 className="font-bold text-base text-[#231A14]">영업시간</h4>
          </div>
          <ul className="text-xs text-[#5D4E41] space-y-2">
            <li className="flex justify-between border-b border-[#F2ECE1] pb-1.5">
              <span>매일 (월~일)</span>
              <span className="font-bold text-[#231A14]">10:00 ~ 22:00</span>
            </li>
            <li className="flex justify-between border-b border-[#F2ECE1] pb-1.5">
              <span>라스트오더 (마지막 주문)</span>
              <span className="font-semibold text-[#8C4A2F]">21:30</span>
            </li>
            <li className="text-[11px] text-[#8C7D6E] pt-1">
              * 명절 연휴 및 특별 휴무는 사전 공지사항을 통해 안내해 드립니다.
            </li>
          </ul>
        </div>

        {/* Parking */}
        <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-[#8C4A2F]">
            <Car className="w-5 h-5" />
            <h4 className="font-bold text-base text-[#231A14]">주차 안내</h4>
          </div>
          <p className="text-xs text-[#5D4E41] leading-relaxed">
            대전역 바로 앞 초역세권에 위치하여 <strong>대중교통(KTX, 지하철, 시내버스)</strong> 이용을 적극 권장합니다.
          </p>
          <div className="p-3 bg-[#FAF7F0] rounded-xl text-[11px] text-[#695A4D] border border-[#EADECE] space-y-1">
            <p className="font-semibold text-[#2C241E]">인근 유료 주차장 이용 시:</p>
            <p>· 대전역 서광장 코레일 제1·제2 공영주차장 (도보 3분)</p>
            <p>· 주변 민영 유료 주차장 다수 완비</p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#8C4A2F]">
              <Phone className="w-5 h-5" />
              <h4 className="font-bold text-base text-[#231A14]">전화 및 온라인 문의</h4>
            </div>
            <p className="text-xs text-[#5D4E41] leading-relaxed">
              매장 이용, 테이크아웃 사전 주문, 회의실 대관 등 궁금하신 사항은 언제든 편하게 연락 주세요.
            </p>
            <div className="text-xl font-bold text-[#8C4A2F]">
              042-222-8818
            </div>
          </div>
          <a
            href="tel:042-222-8818"
            className="w-full py-2.5 rounded-xl bg-[#2C241E] hover:bg-[#40342A] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E6A65C]" />
            <span>매장으로 전화 연결</span>
          </a>
        </div>

      </div>

    </div>
  );
};
