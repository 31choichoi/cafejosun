import React from 'react';
import { MapPin, Phone, Clock, Instagram, ExternalLink, Train, ShieldCheck } from 'lucide-react';
import { TabType } from '../types';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-[#231C17] text-[#D8CFC3] border-t border-[#3D332B] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3B3026]">
          
          {/* Brand & Story Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#8C4A2F] text-[#FDF9F3] flex items-center justify-center font-serif-kr text-xl font-bold border border-[#A65B3D]">
                朝鮮
              </div>
              <div>
                <span className="font-serif-kr text-xl font-bold tracking-tight text-[#F7F2EA]">
                  카페조선
                </span>
                <p className="text-[10px] text-[#A69988] tracking-widest uppercase">CAFE JOSUN · DAEJEON</p>
              </div>
            </div>
            <p className="text-xs text-[#AEA393] leading-relaxed">
              조선에서의 차 한 잔, 대전역 도보 1분.<br />
              기차를 기다리는 짧은 시간도 여행의 따뜻한 추억이 되는 공간. 깊은 전통차와 눈꽃 대전빙수, 최대 60인 대전역회의실 대관을 함께 운영합니다.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://map.naver.com"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded bg-[#2D603A] text-white text-[11px] font-medium flex items-center gap-1 hover:bg-[#255231] transition-colors"
              >
                <span>네이버 플레이스</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded bg-[#3D3127] text-[#EFE7D8] text-[11px] font-medium flex items-center gap-1 hover:bg-[#4E3F32] transition-colors"
              >
                <Instagram className="w-3 h-3 text-[#E6A65C]" />
                <span>인스타그램</span>
              </a>
            </div>
          </div>

          {/* Location & Station Guide */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#F7F2EA] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C59B27]" />
              오시는 길 & 매장 정보
            </h4>
            <div className="text-xs text-[#B8ACA0] space-y-2 leading-relaxed">
              <p className="font-medium text-[#EFE7D8]">대전광역시 동구 대전로813번길 5 (정동)</p>
              <div className="p-2.5 rounded bg-[#2E241E] border border-[#3E3228] text-[11px] space-y-1">
                <p className="text-[#E6A65C] font-semibold flex items-center gap-1">
                  <Train className="w-3 h-3" />
                  대전역 서광장 3번 출구 도보 1분
                </p>
                <p className="text-[#A69988]">출구 앞 횡단보도 건너편, TRY 매장 오른쪽 옆건물</p>
              </div>
              <p className="text-[11px] text-[#8C7D6E]">
                * 대전역 초역세권으로 대중교통 이용을 적극 권장합니다.
              </p>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#F7F2EA] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C59B27]" />
              영업시간 & 문의
            </h4>
            <ul className="text-xs text-[#B8ACA0] space-y-2">
              <li className="flex justify-between border-b border-[#362A22] pb-1.5">
                <span>매일 (월~일)</span>
                <span className="text-[#EFE7D8] font-medium">10:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-[#362A22] pb-1.5">
                <span>마지막 주문 (라스트오더)</span>
                <span className="text-[#E6A65C]">21:30</span>
              </li>
              <li className="flex justify-between border-b border-[#362A22] pb-1.5">
                <span>전화 문의</span>
                <a href="tel:042-222-8818" className="text-[#EFE7D8] hover:text-[#E6A65C] font-bold">
                  042-222-8818
                </a>
              </li>
              <li className="text-[11px] text-[#A69988] pt-1">
                * 명절 및 임시 휴무는 공지사항을 통해 미리 안내드립니다.
              </li>
            </ul>
          </div>

          {/* Quick Sitemap Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#F7F2EA]">바로가기</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => onSelectTab('menu')} className="text-left text-[#B8ACA0] hover:text-[#E6A65C] transition-colors cursor-pointer">
                · 전체 메뉴
              </button>
              <button onClick={() => onSelectTab('signature')} className="text-left text-[#B8ACA0] hover:text-[#E6A65C] transition-colors cursor-pointer">
                · 대표 메뉴 4종
              </button>
              <button onClick={() => onSelectTab('meeting')} className="text-left text-[#B8ACA0] hover:text-[#E6A65C] transition-colors cursor-pointer">
                · 회의실 대관·케이터링
              </button>
              <button onClick={() => onSelectTab('gallery')} className="text-left text-[#B8ACA0] hover:text-[#E6A65C] transition-colors cursor-pointer">
                · 포토 갤러리
              </button>
              <button onClick={() => onSelectTab('location')} className="text-left text-[#B8ACA0] hover:text-[#E6A65C] transition-colors cursor-pointer">
                · 오시는 길 & 지도
              </button>
              <button onClick={() => onSelectTab('reviews')} className="text-left text-[#B8ACA0] hover:text-[#E6A65C] transition-colors cursor-pointer">
                · 방문객 솔직 후기
              </button>
              <button onClick={() => onSelectTab('news')} className="text-left text-[#B8ACA0] hover:text-[#E6A65C] transition-colors cursor-pointer">
                · 공지 & 할인쿠폰
              </button>
              <button onClick={() => onSelectTab('about')} className="text-left text-[#B8ACA0] hover:text-[#E6A65C] transition-colors cursor-pointer">
                · 카페조선 이야기
              </button>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Bar */}
        <div className="py-4 border-b border-[#362B22] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-[#A69988]">
            <span className="text-[#E6A65C] font-semibold">빅데이터 검색 키워드:</span>
            <button onClick={() => onSelectTab('about')} className="hover:text-white transition-colors cursor-pointer">#대전역카페</button>
            <span className="text-[#4E3F32]">·</span>
            <button onClick={() => onSelectTab('meeting')} className="hover:text-white transition-colors cursor-pointer">#대전역회의실</button>
            <span className="text-[#4E3F32]">·</span>
            <button onClick={() => onSelectTab('signature')} className="hover:text-white transition-colors cursor-pointer">#대전빙수</button>
            <span className="text-[#4E3F32]">·</span>
            <button onClick={() => onSelectTab('location')} className="hover:text-white transition-colors cursor-pointer">#대전역3번출구</button>
            <span className="text-[#4E3F32]">·</span>
            <button onClick={() => onSelectTab('signature')} className="hover:text-white transition-colors cursor-pointer">#십억차</button>
            <span className="text-[#4E3F32]">·</span>
            <button onClick={() => onSelectTab('meeting')} className="hover:text-white transition-colors cursor-pointer">#대전세미나실대관</button>
            <span className="text-[#4E3F32]">·</span>
            <button onClick={() => onSelectTab('signature')} className="hover:text-white transition-colors cursor-pointer">#두바이조선떡</button>
          </div>
          <span className="text-[11px] text-[#7A6C5E]">다이닝코드 & 네이버 플레이스 공식 등록 매장</span>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7E7163] gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5B8266]" />
            <span>상호명: 카페조선 | 주소: 대전광역시 동구 대전로813번길 5 | 문의: 042-222-8818</span>
          </div>
          <p>© 2026 Cafe Josun. All rights reserved. Korean Traditional Tea & Space.</p>
        </div>
      </div>
    </footer>
  );
};
