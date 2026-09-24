import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  MapPin, 
  Tv, 
  Mic, 
  Wifi, 
  Coffee, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  Send, 
  CheckCircle2, 
  Phone, 
  Calculator,
  Calendar,
  Layers,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { MEETING_LAYOUTS, CATERING_PACKAGES, FAQS } from '../data/mockData';
import { MeetingInquiryForm } from '../types';

export const MeetingRoomSection: React.FC = () => {
  // Calculator state
  const [calcDuration, setCalcDuration] = useState<'2h' | '4h' | '8h'>('4h');
  const [calcPeople, setCalcPeople] = useState<number>(20);
  const [calcCatering, setCalcCatering] = useState<'none' | 'drinks' | 'dessert' | 'signature'>('dessert');
  const [calcNeedProjector, setCalcNeedProjector] = useState(true);

  // Layout Tab
  const [selectedLayout, setSelectedLayout] = useState(MEETING_LAYOUTS[0].id);

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Inquiry Form state
  const [form, setForm] = useState<MeetingInquiryForm>({
    company: '',
    contactPerson: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '14:00 - 18:00 (오후 반일)',
    durationHours: '4시간',
    peopleCount: 20,
    purpose: '회의 / 세미나',
    seatingLayout: '강의식 (최대 60인)',
    equipment: ['빔프로젝터 및 대형 스크린', '무선 마이크 2기', '무료 와이파이'],
    cateringPackage: '다과 패키지 (음료 + 전통 디저트 3종)',
    taxInvoice: true,
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calculate estimated price
  const basePrice = calcDuration === '2h' ? 60000 : calcDuration === '4h' ? 110000 : 200000;
  const cateringCost = 
    calcCatering === 'none' 
      ? 0 
      : calcCatering === 'drinks' 
      ? calcPeople * 4000 
      : calcCatering === 'dessert' 
      ? calcPeople * 6500 
      : calcPeople * 8900;
  const totalEstimatedPrice = basePrice + cateringCost;

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.contactPerson || !form.phone || !form.date) {
      alert('담당자명, 연락처, 희망 날짜를 모두 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'meeting_inquiries'), {
        ...form,
        createdAt: serverTimestamp(),
        totalEstimate: totalEstimatedPrice,
        status: 'pending'
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('대관 문의 접수 중 오류가 발생했습니다. 전화(042-222-8818)로 직접 연락 주셔도 즉시 접수 가능합니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEquipmentToggle = (item: string) => {
    setForm(prev => {
      const exists = prev.equipment.includes(item);
      return {
        ...prev,
        equipment: exists ? prev.equipment.filter(e => e !== item) : [...prev.equipment, item]
      };
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      
      {/* 1. Header Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C4A2F] text-white text-xs font-bold shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#F5DEB3]" />
            <span>#대전역회의실 대관 전문</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF0E1] text-[#7C472A] text-xs font-semibold">
            <span>KTX 도보 1분 · 8인~60인 완비</span>
          </span>
        </div>
        <h1 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231A14] leading-tight">
          대전역회의실 대관 (도보 1분, 최대 60인)<br />
          <span className="text-[#8C4A2F]">전국이 모이는 비즈니스 세미나실</span>
        </h1>
        <p className="text-base sm:text-lg text-[#635549] leading-relaxed">
          전국 어디서 오셔도 KTX 대전역에서 내려 도보 1분(TRY 매장 옆)이면 바로 회의를 시작할 수 있는 최적의 <strong>대전역회의실</strong>입니다.
          서울, 부산, 대구, 광주에서 1시간대! 카페조선의 정갈한 전통차·떡 다과 케이터링과 함께 성공적인 비즈니스를 지원합니다.
        </p>
      </div>

      {/* 2. Key Advantages 4 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#E5DACB] shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center font-bold">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#231A14]">초역세권 대전역회의실</h3>
          <p className="text-xs text-[#6A5B4F] leading-relaxed">
            대전역 3번 출구 도보 1분(TRY 오른쪽 옆건물). 지방 지사 및 전국 임직원이 길을 헤매지 않고 바로 집결할 수 있는 최고의 회의 공간입니다.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E5DACB] shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#231A14]">최대 60인 유연한 배치</h3>
          <p className="text-xs text-[#6A5B4F] leading-relaxed">
            강의식 최대 60인부터 ㄷ자 임원 회의식, 분임 조별 실습식까지 행사 목적에 딱 맞춰 사전에 완벽히 세팅해 드립니다.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E5DACB] shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center font-bold">
            <Coffee className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#231A14]">카페와 한 공간에 (원스톱)</h3>
          <p className="text-xs text-[#6A5B4F] leading-relaxed">
            카페조선 바리스타의 스페셜티 커피, 40년 전통차, 3종 전통 찰떡 다과 케이터링을 회의실로 직접 세팅해 드립니다.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E5DACB] shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#231A14]">넉넉한 운영 시간</h3>
          <p className="text-xs text-[#6A5B4F] leading-relaxed">
            매일 오전 10시부터 밤 10시까지 주말/공휴일 상관없이 운영되며, 전후 15분 준비 및 정리 시간을 무료 제공합니다.
          </p>
        </div>
      </div>

      {/* 3. 공간 안내 & 좌석 배치 형태 (Seating Layouts) */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DACB] shadow-xs space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#8C4A2F] tracking-widest uppercase">SPACE & LAYOUTS</span>
          <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            행사 성격에 맞춘 최적의 좌석 배치
          </h2>
          <p className="text-xs sm:text-sm text-[#6C5E51]">
            필요하신 배치 형태를 알려주시면 행사 시작 전 완벽하게 책상과 의자를 정돈해 둡니다.
          </p>
        </div>

        {/* Layout Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {MEETING_LAYOUTS.map((layout) => {
            const isSelected = selectedLayout === layout.id;
            return (
              <button
                key={layout.id}
                onClick={() => setSelectedLayout(layout.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#8C4A2F] bg-[#FAF3E8] shadow-2xs'
                    : 'border-[#E6DDD0] bg-[#FAF8F5] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[#231A14]">{layout.name}</span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-[#8C4A2F] text-white' : 'bg-[#EFE7D8] text-[#7A4B2F]'
                  }`}>
                    {layout.capacity}
                  </span>
                </div>
                <p className="text-xs text-[#68594D] line-clamp-2">{layout.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Layout Detailed View */}
        {(() => {
          const current = MEETING_LAYOUTS.find(l => l.id === selectedLayout) || MEETING_LAYOUTS[0];
          return (
            <div className="bg-[#FAF7F0] rounded-2xl p-6 sm:p-8 border border-[#E2D5C3] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <div className="inline-block px-2.5 py-0.5 rounded bg-[#8C4A2F] text-white text-xs font-bold">
                  {current.capacity} 수용
                </div>
                <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#231A14]">
                  {current.name} 구조 안내
                </h3>
                <p className="text-sm text-[#5C4D40] leading-relaxed">
                  {current.desc}
                </p>
                <div className="pt-1">
                  <span className="text-xs font-bold text-[#8C4A2F]">추천 행사: </span>
                  <span className="text-xs text-[#2C241E] font-medium">{current.recommended}</span>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden border border-[#D9CCBA] shadow-sm aspect-[16/10] bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })()}

        {/* Equipment & Facilities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#EADBCE]">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#231A14] flex items-center gap-2">
              <Tv className="w-4 h-4 text-[#8C4A2F]" />
              무료 제공 비치 장비
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#5D4E41]">
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 4K 고화질 빔프로젝터
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 120인치 전동 스크린
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 무선 마이크 2기 & 앰프
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 대형 화이트보드 & 마커
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 기가비트 초고속 와이파이
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ HDMI & C타입 젠더 케이블
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#231A14] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8C4A2F]" />
              회의 편의 시설
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#5D4E41]">
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 개별 냉난방 시스템 (쾌적 온도)
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 전 좌석 멀티탭 & USB 충전
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 남/녀 구분 깨끗한 실내 화장실
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 여행용 대형 캐리어 보관 구역
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 앞뒤 15분 준비/정리 무료 제공
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F0] border border-[#EADBCE]">
                ✓ 전자세금계산서·카드결제 완비
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 다과 케이터링 패키지 안내 */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#8C4A2F] tracking-widest uppercase">CATERING PACKAGES</span>
          <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            정갈한 음료 & 다과 케이터링
          </h2>
          <p className="text-xs sm:text-sm text-[#6C5E51]">
            회의의 시작부터 쉬는 시간까지, 카페조선이 참석자분들을 정성껏 대접합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl p-6 border shadow-xs flex flex-col justify-between space-y-5 ${
                pkg.badge ? 'border-[#8C4A2F] ring-1 ring-[#8C4A2F]/20' : 'border-[#E6DDD0]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-kr text-lg font-bold text-[#231A14]">{pkg.name}</h3>
                  {pkg.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-[#8C4A2F] text-white text-[10px] font-bold">
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <div className="text-2xl font-bold text-[#8C4A2F]">{pkg.price}</div>
                <ul className="space-y-2 text-xs text-[#5C4F44] pt-2 border-t border-[#F0E8DC]">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-[11px] text-[#8C7D6E] pt-2 border-t border-[#F2ECE1]">
                * 회의 시작 시간에 맞춰 사전 세팅 완료
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 실시간 대관 & 케이터링 요금 계산기 (Interactive Quote Estimator) */}
      <section className="bg-gradient-to-br from-[#FAF3E8] to-[#F5ECE0] rounded-3xl p-6 sm:p-10 border border-[#DECFB8] shadow-sm">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          
          {/* Controls */}
          <div className="flex-1 space-y-6 w-full">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#8C4A2F]" />
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#231A14]">
                회의실 대관 & 다과 실시간 예상 견적기
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Duration select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#4A3E35]">대관 시간 단위</label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setCalcDuration('2h')}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      calcDuration === '2h' ? 'bg-[#8C4A2F] text-white border-[#8C4A2F]' : 'bg-white text-[#4A3E35] border-[#D5C4B0]'
                    }`}
                  >
                    2시간 기본
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcDuration('4h')}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      calcDuration === '4h' ? 'bg-[#8C4A2F] text-white border-[#8C4A2F]' : 'bg-white text-[#4A3E35] border-[#D5C4B0]'
                    }`}
                  >
                    반일 (4시간)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcDuration('8h')}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      calcDuration === '8h' ? 'bg-[#8C4A2F] text-white border-[#8C4A2F]' : 'bg-white text-[#4A3E35] border-[#D5C4B0]'
                    }`}
                  >
                    종일 (8시간)
                  </button>
                </div>
              </div>

              {/* People count slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-[#4A3E35]">
                  <span>예상 참석 인원</span>
                  <span className="text-[#8C4A2F]">{calcPeople}명</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={calcPeople}
                  onChange={(e) => setCalcPeople(Number(e.target.value))}
                  className="w-full accent-[#8C4A2F] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8C7D6E]">
                  <span>소규모 5명</span>
                  <span>최대 60명</span>
                </div>
              </div>
            </div>

            {/* Catering selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#4A3E35]">다과 케이터링 선택</label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcCatering('none')}
                  className={`p-2.5 text-xs rounded-xl border text-left cursor-pointer transition-colors ${
                    calcCatering === 'none' ? 'bg-[#2C241E] text-white border-[#2C241E]' : 'bg-white text-[#4A3E35] border-[#D5C4B0]'
                  }`}
                >
                  <div className="font-bold">케이터링 없음</div>
                  <div className="text-[10px] opacity-80">공간만 단독 대관</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCalcCatering('drinks')}
                  className={`p-2.5 text-xs rounded-xl border text-left cursor-pointer transition-colors ${
                    calcCatering === 'drinks' ? 'bg-[#8C4A2F] text-white border-[#8C4A2F]' : 'bg-white text-[#4A3E35] border-[#D5C4B0]'
                  }`}
                >
                  <div className="font-bold">음료 패키지</div>
                  <div className="text-[10px] opacity-80">1인 4,000원</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCalcCatering('dessert')}
                  className={`p-2.5 text-xs rounded-xl border text-left cursor-pointer transition-colors ${
                    calcCatering === 'dessert' ? 'bg-[#8C4A2F] text-white border-[#8C4A2F]' : 'bg-white text-[#4A3E35] border-[#D5C4B0]'
                  }`}
                >
                  <div className="font-bold">다과 패키지 (인기)</div>
                  <div className="text-[10px] opacity-80">1인 6,500원</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCalcCatering('signature')}
                  className={`p-2.5 text-xs rounded-xl border text-left cursor-pointer transition-colors ${
                    calcCatering === 'signature' ? 'bg-[#8C4A2F] text-white border-[#8C4A2F]' : 'bg-white text-[#4A3E35] border-[#D5C4B0]'
                  }`}
                >
                  <div className="font-bold">대표 시그니처</div>
                  <div className="text-[10px] opacity-80">1인 8,900원</div>
                </button>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="w-full lg:w-80 bg-white rounded-2xl p-6 border border-[#DFCBB5] shadow-md space-y-4 shrink-0">
            <div className="flex items-center justify-between border-b border-[#F0E6D8] pb-3">
              <span className="text-xs font-bold text-[#6D5E50]">예상 견적 요약</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#FAF1E3] text-[#8C4A2F] font-semibold">
                부가세 별도
              </span>
            </div>

            <div className="space-y-2 text-xs text-[#5D4E41]">
              <div className="flex justify-between">
                <span>회의실 대관료 ({calcDuration === '2h' ? '2시간' : calcDuration === '4h' ? '반일 4시간' : '종일 8시간'})</span>
                <span className="font-semibold">{basePrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between">
                <span>케이터링 ({calcPeople}인)</span>
                <span className="font-semibold">{cateringCost.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-[#8C7D6E]">
                <span>빔프로젝터/음향 장비</span>
                <span className="text-[#5B8266] font-semibold">무료 (0원)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F0E6D8]">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-[#231A14]">총 예상 금액</span>
                <span className="text-2xl font-bold text-[#8C4A2F]">
                  {totalEstimatedPrice.toLocaleString()}원
                </span>
              </div>
              <p className="text-[10px] text-[#918171] mt-1">
                * 상세 견적 및 시간 추가는 협의 가능합니다.
              </p>
            </div>

            <a
              href="#inquiry-form"
              className="w-full py-2.5 rounded-xl bg-[#8C4A2F] hover:bg-[#723922] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>이 견적으로 대관 문의하기</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. 예약 절차 5단계 */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#8C4A2F] tracking-widest uppercase">BOOKING PROCESS</span>
          <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            간편한 예약 절차 5단계
          </h2>
          <p className="text-xs sm:text-sm text-[#6C5E51]">
            접수 즉시 전문 매니저가 유선 혹은 이메일로 꼼꼼하게 응대해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#E5DACB] text-center space-y-2 shadow-2xs relative">
            <span className="w-8 h-8 rounded-full bg-[#FAF0E1] text-[#8C4A2F] font-bold text-sm inline-flex items-center justify-center">1</span>
            <h4 className="font-bold text-sm text-[#231A14]">문의 접수</h4>
            <p className="text-xs text-[#6C5E51]">온라인 양식 또는 전화로 일정 및 인원 문의</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5DACB] text-center space-y-2 shadow-2xs relative">
            <span className="w-8 h-8 rounded-full bg-[#FAF0E1] text-[#8C4A2F] font-bold text-sm inline-flex items-center justify-center">2</span>
            <h4 className="font-bold text-sm text-[#231A14]">견적 안내</h4>
            <p className="text-xs text-[#6C5E51]">일정 가능 여부 및 맞춤 견적서 발송</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5DACB] text-center space-y-2 shadow-2xs relative">
            <span className="w-8 h-8 rounded-full bg-[#FAF0E1] text-[#8C4A2F] font-bold text-sm inline-flex items-center justify-center">3</span>
            <h4 className="font-bold text-sm text-[#231A14]">예약 확정</h4>
            <p className="text-xs text-[#6C5E51]">일정 확인 후 최종 대관 확정</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5DACB] text-center space-y-2 shadow-2xs relative">
            <span className="w-8 h-8 rounded-full bg-[#FAF0E1] text-[#8C4A2F] font-bold text-sm inline-flex items-center justify-center">4</span>
            <h4 className="font-bold text-sm text-[#231A14]">행사 진행</h4>
            <p className="text-xs text-[#6C5E51]">사전 세팅된 회의실에서 바로 행사 시작</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5DACB] text-center space-y-2 shadow-2xs relative">
            <span className="w-8 h-8 rounded-full bg-[#FAF0E1] text-[#8C4A2F] font-bold text-sm inline-flex items-center justify-center">5</span>
            <h4 className="font-bold text-sm text-[#231A14]">정산 및 증빙</h4>
            <p className="text-xs text-[#6C5E51]">전자세금계산서 또는 법인카드 결제</p>
          </div>
        </div>

        {/* Cancel policy card */}
        <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#E5DACB] text-xs text-[#68594D] text-center">
          <strong>취소 및 환불 규정:</strong> 이용일 7일 전 100% 전액 환불, 3일 전 50% 환불, 당일 취소는 재료 준비로 인해 환불이 불가합니다.
        </div>
      </section>

      {/* 7. FAQ 아코디언 */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DACB] shadow-xs space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#8C4A2F] tracking-widest uppercase">FAQ</span>
          <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            자주 묻는 질문
          </h2>
          <p className="text-xs sm:text-sm text-[#6C5E51]">
            대관 전 고객님들께서 가장 많이 문의해 주시는 질문들을 정리했습니다.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#EADBCE] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left bg-[#FAF8F5] hover:bg-[#FAF4EC] flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#231A14] flex items-center gap-2">
                    <span className="text-[#8C4A2F] font-bold">Q.</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#8C7D6E] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-[#5D4E41] leading-relaxed border-t border-[#EADBCE]">
                    <span className="text-[#5B8266] font-bold mr-1.5">A.</span>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. 대관 문의 양식 (Firestore 연동) */}
      <section id="inquiry-form" className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 border border-[#E2D4C2] shadow-sm space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADECE] text-[#7C472A] text-xs font-semibold">
            <Send className="w-3.5 h-3.5" />
            <span>ONLINE INQUIRY</span>
          </span>
          <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#231A14]">
            회의실 대관 및 케이터링 빠른 문의
          </h2>
          <p className="text-xs sm:text-sm text-[#6C5E51]">
            아래 정보를 남겨주시면 영업일 기준 2시간 이내에 담당자가 상세 견적과 함께 연락드립니다.<br />
            당일 및 긴급 문의는 전화(<a href="tel:042-222-8818" className="text-[#8C4A2F] font-bold underline">042-222-8818</a>)로 주시면 가장 빠릅니다.
          </p>
        </div>

        {submitSuccess ? (
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 border border-[#5B8266] text-center space-y-4 shadow-sm animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#EBF5EE] text-[#2E7D32] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-kr text-2xl font-bold text-[#231A14]">
              대관 문의가 성공적으로 접수되었습니다!
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5144] leading-relaxed">
              남겨주신 연락처({form.phone})로 담당 매니저가 확인 후 신속하게 연락드리겠습니다. 대전역 2분 카페조선과 함께해 주셔서 감사합니다.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-2.5 rounded-xl bg-[#8C4A2F] text-white text-xs font-semibold hover:bg-[#723922] transition-colors cursor-pointer"
              >
                새로운 문의 작성하기
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitInquiry} className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-[#DFCBB5] shadow-xs space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">단체 / 회사명</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({...form, company: e.target.value})}
                  placeholder="예: (주)한국에너지연구소 / 동문회"
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">
                  담당자 성함 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.contactPerson}
                  onChange={(e) => setForm({...form, contactPerson: e.target.value})}
                  placeholder="예: 홍길동 팀장"
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  placeholder="예: 010-1234-5678"
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">이메일 주소</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  placeholder="견적서 수신용 이메일"
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">
                  희망 날짜 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({...form, date: e.target.value})}
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">이용 시간대</label>
                <select
                  value={form.timeSlot}
                  onChange={(e) => setForm({...form, timeSlot: e.target.value})}
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none bg-white"
                >
                  <option value="오전 (10:00 - 14:00)">오전 10:00 - 14:00 (4시간)</option>
                  <option value="오후 (14:00 - 18:00)">오후 14:00 - 18:00 (4시간)</option>
                  <option value="저녁 (18:00 - 22:00)">저녁 18:00 - 22:00 (4시간)</option>
                  <option value="종일 (10:00 - 18:00)">종일 10:00 - 18:00 (8시간)</option>
                  <option value="2시간 기본 협의">2시간 기본 (시간 협의)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">예상 참석 인원</label>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={form.peopleCount}
                  onChange={(e) => setForm({...form, peopleCount: Number(e.target.value)})}
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">희망 좌석 배치</label>
                <select
                  value={form.seatingLayout}
                  onChange={(e) => setForm({...form, seatingLayout: e.target.value})}
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none bg-white"
                >
                  <option value="강의식 (최대 60인)">강의식 (최대 60인 - 세미나/설명회)</option>
                  <option value="회의식 (ㄷ자/원탁 28인)">회의식 (ㄷ자·원탁 28인 - 임원회의)</option>
                  <option value="그룹식 (분임 테이블 35인)">그룹식 (분임 테이블 35인 - 워크숍)</option>
                  <option value="자유식 (네트워킹 45인)">자유식 (네트워킹/소규모 파티)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3F332A]">케이터링 희망 패키지</label>
                <select
                  value={form.cateringPackage}
                  onChange={(e) => setForm({...form, cateringPackage: e.target.value})}
                  className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none bg-white"
                >
                  <option value="다과 패키지 (1인 6,500원)">다과 패키지 (음료 + 전통 3종 디저트 - 인기)</option>
                  <option value="음료 패키지 (1인 4,000원)">음료 패키지 (아메리카노 or 전통차)</option>
                  <option value="대표 시그니처 패키지 (1인 8,900원)">대표 메뉴 패키지 (십억차 + 두바이조선떡)</option>
                  <option value="케이터링 미신청">케이터링 미신청 (공간만 대관)</option>
                </select>
              </div>
            </div>

            {/* Equipment checkboxes */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#3F332A]">필요 무료 장비 (중복 선택)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {['빔프로젝터 및 스크린', '무선 마이크 2기', '화이트보드', '캐리어 짐 보관'].map((eq) => (
                  <label key={eq} className="flex items-center gap-2 p-2 rounded-lg border border-[#E2D5C3] hover:bg-[#FAF6EE] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.equipment.includes(eq)}
                      onChange={() => handleEquipmentToggle(eq)}
                      className="accent-[#8C4A2F]"
                    />
                    <span className="text-[11px] text-[#4A3E35]">{eq}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tax invoice checkbox */}
            <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#E7DCCE] flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold text-[#3F332A] cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.taxInvoice}
                  onChange={(e) => setForm({...form, taxInvoice: e.target.checked})}
                  className="accent-[#8C4A2F]"
                />
                <span>전자세금계산서 발행 희망 (사업자등록번호 제출 필요)</span>
              </label>
              <span className="text-[10px] text-[#8C7D6E]">법인카드 현장 결제 가능</span>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3F332A]">추가 요청사항</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({...form, notes: e.target.value})}
                placeholder="현수막 설치, 도시락 연계, 주차 안내 등 필요하신 사항을 자유롭게 적어주세요."
                className="w-full p-3 rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3.5 rounded-xl bg-[#8C4A2F] hover:bg-[#733A23] text-white font-semibold text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? '대관 문의 전송 중...' : '대관 문의 접수하기'}</span>
              </button>
              <a
                href="tel:042-222-8818"
                className="px-6 py-3.5 rounded-xl border border-[#D5C2AB] hover:bg-[#FAF6EE] text-[#4A3E35] font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#8C4A2F]" />
                <span>전화 빠른 상담</span>
              </a>
            </div>
          </form>
        )}
      </section>

    </div>
  );
};
