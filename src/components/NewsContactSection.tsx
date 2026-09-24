import React, { useState } from 'react';
import { 
  Bell, 
  Sparkles, 
  Gift, 
  Tag, 
  Phone, 
  Package, 
  Briefcase, 
  CheckCircle2, 
  Send, 
  Train, 
  ArrowRight,
  ExternalLink,
  QrCode
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { NOTICES } from '../data/mockData';
import { TabType } from '../types';

interface NewsContactSectionProps {
  onSelectTab: (tab: TabType) => void;
}

export const NewsContactSection: React.FC<NewsContactSectionProps> = ({ onSelectTab }) => {
  const [activeTab, setActiveTab] = useState<'notices' | 'coupons' | 'group' | 'partnership'>('notices');
  const [selectedNotice, setSelectedNotice] = useState<string | null>(null);

  // Group Order form state
  const [groupForm, setGroupForm] = useState({
    name: '',
    phone: '',
    datetime: '',
    menuItems: '조선빙수 3개, 십억차 5잔, 두바이조선떡 10개',
    isTakeout: '포장 (기차용)',
    request: ''
  });
  const [groupSubmitted, setGroupSubmitted] = useState(false);
  const [groupSubmitting, setGroupSubmitting] = useState(false);

  // Partnership form state
  const [partnerForm, setPartnerForm] = useState({
    company: '',
    manager: '',
    phone: '',
    email: '',
    proposal: '',
    link: ''
  });
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerSubmitting, setPartnerSubmitting] = useState(false);

  // Coupon state
  const [claimedCoupon, setClaimedCoupon] = useState<string | null>(null);

  const handleClaimCoupon = async (couponName: string) => {
    try {
      const code = `JOSUN-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      await addDoc(collection(db, 'claimed_coupons'), {
        name: couponName,
        couponCode: code,
        claimedAt: serverTimestamp()
      });
      setClaimedCoupon(code);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.error(e);
      setClaimedCoupon(`JOSUN-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
    }
  };

  const handleGroupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupForm.name || !groupForm.phone || !groupForm.datetime) {
      alert('신청자 이름, 연락처, 수령 일시를 입력해 주세요.');
      return;
    }
    setGroupSubmitting(true);
    try {
      await addDoc(collection(db, 'group_orders'), {
        ...groupForm,
        createdAt: serverTimestamp(),
        status: 'received'
      });
      confetti({ particleCount: 70 });
      setGroupSubmitted(true);
    } catch (e) {
      console.error(e);
      alert('접수 중 오류가 발생했습니다. 전화(042-222-8818)로 직접 문의해 주셔도 됩니다.');
    } finally {
      setGroupSubmitting(false);
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.manager || !partnerForm.phone || !partnerForm.proposal) {
      alert('담당자명, 연락처, 제안 내용을 모두 입력해 주세요.');
      return;
    }
    setPartnerSubmitting(true);
    try {
      await addDoc(collection(db, 'partnerships'), {
        ...partnerForm,
        createdAt: serverTimestamp(),
        status: 'received'
      });
      confetti({ particleCount: 70 });
      setPartnerSubmitted(true);
    } catch (e) {
      console.error(e);
      alert('접수 중 오류가 발생했습니다. 이메일 또는 전화로 문의해 주세요.');
    } finally {
      setPartnerSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* 1. Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D3] text-[#7C472A] text-xs font-semibold uppercase tracking-wider">
          <Bell className="w-3.5 h-3.5 text-[#8C4A2F]" />
          <span>NEWS & CONTACT</span>
        </span>
        <h1 className="font-serif-kr text-3xl sm:text-4xl font-bold text-[#231A14]">
          소식 및 문의
        </h1>
        <p className="text-sm sm:text-base text-[#6C5E51] leading-relaxed">
          카페조선의 새로운 소식, 이벤트, 혜택을 전하고 여러분의 다양한 문의와 협업 제안을 기다립니다.
        </p>
      </div>

      {/* 2. Top Fast Phone Call Banner */}
      <div className="bg-[#2C241E] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xs text-[#E6A65C] font-semibold">매일 오전 10시 ~ 오후 10시 친절 상담</div>
          <h3 className="font-serif-kr text-2xl font-bold">
            빠른 전화 문의: 042-222-8818
          </h3>
          <p className="text-xs text-[#C8BAA8]">
            영업 중 바쁜 시간대에는 연결이 다소 지연될 수 있습니다. 회의실 대관은 온라인 문의로도 언제든 가능합니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:042-222-8818"
            className="px-5 py-3 rounded-xl bg-[#8C4A2F] text-white hover:bg-[#743A23] text-xs font-bold flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#F5DEB3]" />
            <span>지금 전화 걸기</span>
          </a>
          <button
            onClick={() => onSelectTab('meeting')}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors cursor-pointer"
          >
            회의실 대관 바로가기
          </button>
        </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#E0D4C3] pb-4">
        <button
          onClick={() => setActiveTab('notices')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'notices'
              ? 'bg-[#8C4A2F] text-white shadow-xs'
              : 'bg-white border border-[#DFD5C5] text-[#5A4D42] hover:bg-[#FAF6EE]'
          }`}
        >
          공지·신메뉴·이벤트 ({NOTICES.length})
        </button>

        <button
          onClick={() => setActiveTab('coupons')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'coupons'
              ? 'bg-[#8C4A2F] text-white shadow-xs'
              : 'bg-white border border-[#DFD5C5] text-[#5A4D42] hover:bg-[#FAF6EE]'
          }`}
        >
          할인 및 특별 혜택 (쿠폰 받기)
        </button>

        <button
          onClick={() => setActiveTab('group')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'group'
              ? 'bg-[#8C4A2F] text-white shadow-xs'
              : 'bg-white border border-[#DFD5C5] text-[#5A4D42] hover:bg-[#FAF6EE]'
          }`}
        >
          음료·디저트 단체 주문
        </button>

        <button
          onClick={() => setActiveTab('partnership')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'partnership'
              ? 'bg-[#8C4A2F] text-white shadow-xs'
              : 'bg-white border border-[#DFD5C5] text-[#5A4D42] hover:bg-[#FAF6EE]'
          }`}
        >
          협업 및 제휴 문의
        </button>
      </div>

      {/* Tab 1: 공지사항 & 신메뉴 & 이벤트 */}
      {activeTab === 'notices' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NOTICES.map((n) => (
              <div
                key={n.id}
                className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-3 hover:border-[#8C4A2F]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    n.type === 'notice'
                      ? 'bg-[#FAF0E1] text-[#8C4A2F]'
                      : n.type === 'new_menu'
                      ? 'bg-[#EBF5EE] text-[#2E7D32]'
                      : n.type === 'event'
                      ? 'bg-[#FDF0ED] text-[#C55A11]'
                      : 'bg-[#F0F4FF] text-[#1E40AF]'
                  }`}>
                    {n.badge}
                  </span>
                  <span className="text-[11px] text-[#8C7D6E]">{n.date}</span>
                </div>

                <h3 className="font-serif-kr text-lg font-bold text-[#231A14]">
                  {n.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C4D40] leading-relaxed">
                  {n.summary}
                </p>

                <div className="pt-2 border-t border-[#F2ECE1] text-xs text-[#706254] leading-relaxed">
                  {n.content}
                </div>

                {n.period && (
                  <div className="text-[10px] text-[#8C7D6E] font-medium pt-1">
                    진행 기간: {n.period}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: 할인 및 특별 쿠폰 (Interactive Claim) */}
      {activeTab === 'coupons' && (
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-serif-kr text-2xl font-bold text-[#231A14]">
              알고 오면 더 좋은 카페조선의 혜택
            </h3>
            <p className="text-xs sm:text-sm text-[#6C5E51]">
              버튼을 눌러 모바일 쿠폰 번호를 발급받으시고 매장 결제 시 제시해 주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Coupon 1: KTX 승차권 10% 할인 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8C4A2F] bg-[#FAF0E1] px-2.5 py-0.5 rounded-full">
                  <Train className="w-3.5 h-3.5" />
                  <span>열차 승차권 특별 할인</span>
                </div>
                <h4 className="font-serif-kr text-lg font-bold text-[#231A14]">
                  당일 KTX·SRT 승차권 10% 할인
                </h4>
                <p className="text-xs text-[#625447] leading-relaxed">
                  대전역 출도착 당일 승차권을 카운터 결제 시 보여주시면 제조 음료 전체 10% 현장 할인을 적용해 드립니다.
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0E6D8] space-y-2">
                <button
                  onClick={() => handleClaimCoupon('당일 승차권 10% 현장 할인')}
                  className="w-full py-2.5 rounded-xl bg-[#8C4A2F] hover:bg-[#723922] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>승차권 할인 혜택 확인</span>
                </button>
              </div>
            </div>

            {/* Coupon 2: 리뷰 작성 시 두바이조선떡 증정 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C55A11] bg-[#FDF0ED] px-2.5 py-0.5 rounded-full">
                  <Gift className="w-3.5 h-3.5" />
                  <span>포토 리뷰 선물</span>
                </div>
                <h4 className="font-serif-kr text-lg font-bold text-[#231A14]">
                  두바이조선떡 1개 무료 교환권
                </h4>
                <p className="text-xs text-[#625447] leading-relaxed">
                  네이버 영수증 포토 리뷰 또는 인스타그램에 #카페조선 태그 후 작성 화면을 직원에게 보여주시면 즉시 디저트를 드립니다.
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0E6D8] space-y-2">
                <button
                  onClick={() => handleClaimCoupon('두바이조선떡 1개 무료 교환권')}
                  className="w-full py-2.5 rounded-xl bg-[#C59B27] hover:bg-[#b0881d] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Gift className="w-3.5 h-3.5" />
                  <span>리뷰 쿠폰 발급받기</span>
                </button>
              </div>
            </div>

            {/* Coupon 3: 회의실 첫 대관 혜택 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1E40AF] bg-[#F0F4FF] px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>회의실 첫 대관 프로모션</span>
                </div>
                <h4 className="font-serif-kr text-lg font-bold text-[#231A14]">
                  회의실 첫 대관 시 다과 10% 지원
                </h4>
                <p className="text-xs text-[#625447] leading-relaxed">
                  카페조선 회의실을 처음 예약하시는 기업 및 모임 고객님께 음료/다과 패키지 10% 지원 혜택을 드립니다.
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0E6D8] space-y-2">
                <button
                  onClick={() => handleClaimCoupon('회의실 첫 대관 다과 10% 지원권')}
                  className="w-full py-2.5 rounded-xl bg-[#2C241E] hover:bg-[#40342A] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>첫 대관 쿠폰 받기</span>
                </button>
              </div>
            </div>

          </div>

          {/* Claimed coupon notification */}
          {claimedCoupon && (
            <div className="bg-[#FAF4EC] rounded-2xl p-6 border border-[#DFCBB5] text-center space-y-2 animate-in zoom-in-95">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#8C4A2F]">
                <CheckCircle2 className="w-4 h-4" />
                <span>모바일 쿠폰이 발급되었습니다!</span>
              </div>
              <div className="text-2xl font-mono font-bold tracking-widest text-[#231A14] bg-white py-3 px-6 rounded-xl border border-[#D5C2AB] inline-block shadow-xs">
                {claimedCoupon}
              </div>
              <p className="text-xs text-[#706254]">
                위 쿠폰 번호 또는 캡처 화면을 매장 주문 시 카운터 바리스타에게 보여주세요.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: 음료·디저트 단체 주문 양식 */}
      {activeTab === 'group' && (
        <div className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-10 border border-[#E2D4C2] space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold text-[#8C4A2F] uppercase tracking-wider">GROUP ORDER</span>
            <h3 className="font-serif-kr text-2xl font-bold text-[#231A14]">
              회사 행사 및 기차 단체 여행객 대량 주문
            </h3>
            <p className="text-xs sm:text-sm text-[#6C5E51]">
              기차 탑승 시간에 맞춰 한 방울도 흐르지 않게 완벽하게 포장하여 바로 픽업하실 수 있도록 준비해 드립니다.
            </p>
          </div>

          {groupSubmitted ? (
            <div className="bg-white p-8 rounded-2xl border border-[#5B8266] text-center space-y-3 max-w-lg mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#5B8266] mx-auto" />
              <h4 className="font-serif-kr text-xl font-bold text-[#231A14]">단체 주문 신청 완료</h4>
              <p className="text-xs text-[#635549]">
                수령 희망 일시에 맞춰 재료를 준비하겠습니다. 확인 전화를 남겨주신 번호로 드리겠습니다.
              </p>
              <button
                onClick={() => setGroupSubmitted(false)}
                className="px-5 py-2 rounded-lg bg-[#8C4A2F] text-white text-xs font-semibold"
              >
                추가 주문하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleGroupSubmit} className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-[#D5C2AB] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3F332A]">주문자 성함</label>
                  <input
                    type="text"
                    required
                    value={groupForm.name}
                    onChange={(e) => setGroupForm({...groupForm, name: e.target.value})}
                    placeholder="홍길동"
                    className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3F332A]">연락처</label>
                  <input
                    type="tel"
                    required
                    value={groupForm.phone}
                    onChange={(e) => setGroupForm({...groupForm, phone: e.target.value})}
                    placeholder="010-0000-0000"
                    className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3F332A]">수령 날짜 및 시간</label>
                  <input
                    type="datetime-local"
                    required
                    value={groupForm.datetime}
                    onChange={(e) => setGroupForm({...groupForm, datetime: e.target.value})}
                    className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3F332A]">포장 / 매장 이용 여부</label>
                  <select
                    value={groupForm.isTakeout}
                    onChange={(e) => setGroupForm({...groupForm, isTakeout: e.target.value})}
                    className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs bg-white"
                  >
                    <option value="포장 (기차용 캐리어)">포장 (기차용 안심 캐리어 포장)</option>
                    <option value="매장 이용 (단체석 착석)">매장 이용 (단체석 착석)</option>
                    <option value="회의실 전달">회의실로 직접 전달</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#3F332A]">주문 메뉴 및 수량</label>
                <textarea
                  rows={3}
                  required
                  value={groupForm.menuItems}
                  onChange={(e) => setGroupForm({...groupForm, menuItems: e.target.value})}
                  placeholder="예: 십억차 10잔 (HOT 5, ICE 5), 두바이조선떡 20개, 아메리카노 5잔"
                  className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#3F332A]">추가 요청사항</label>
                <input
                  type="text"
                  value={groupForm.request}
                  onChange={(e) => setGroupForm({...groupForm, request: e.target.value})}
                  placeholder="빨대 개수, 기차 시간 기재 등"
                  className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={groupSubmitting}
                className="w-full py-3 rounded-xl bg-[#8C4A2F] text-white font-semibold text-xs hover:bg-[#723922] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Package className="w-4 h-4" />
                <span>{groupSubmitting ? '신청 중...' : '단체 주문 신청 접수하기'}</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* Tab 4: 협업 및 제휴 문의 */}
      {activeTab === 'partnership' && (
        <div className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-10 border border-[#E2D4C2] space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold text-[#8C4A2F] uppercase tracking-wider">PARTNERSHIP</span>
            <h3 className="font-serif-kr text-2xl font-bold text-[#231A14]">
              카페조선과 함께할 파트너를 환영합니다
            </h3>
            <p className="text-xs sm:text-sm text-[#6C5E51]">
              지역 브랜드, 대전 관광 콘텐츠, 기업 굿즈, 인플루언서 협업, 팝업 행사 등 다양한 제안을 편하게 보내주세요.
            </p>
          </div>

          {partnerSubmitted ? (
            <div className="bg-white p-8 rounded-2xl border border-[#5B8266] text-center space-y-3 max-w-lg mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#5B8266] mx-auto" />
              <h4 className="font-serif-kr text-xl font-bold text-[#231A14]">제휴 제안 접수 완료</h4>
              <p className="text-xs text-[#635549]">
                보내주신 소중한 제안을 내부 검토 후 기재해 주신 연락처로 회신드리겠습니다.
              </p>
              <button
                onClick={() => setPartnerSubmitted(false)}
                className="px-5 py-2 rounded-lg bg-[#8C4A2F] text-white text-xs font-semibold"
              >
                새로운 제휴 제안하기
              </button>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-[#D5C2AB] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3F332A]">회사명 / 채널명</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.company}
                    onChange={(e) => setPartnerForm({...partnerForm, company: e.target.value})}
                    placeholder="예: 대전관광공사 / 브랜드명"
                    className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3F332A]">담당자 성함</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.manager}
                    onChange={(e) => setPartnerForm({...partnerForm, manager: e.target.value})}
                    placeholder="홍길동 팀장"
                    className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3F332A]">연락처</label>
                  <input
                    type="tel"
                    required
                    value={partnerForm.phone}
                    onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                    placeholder="010-0000-0000"
                    className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3F332A]">이메일 주소</label>
                  <input
                    type="email"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                    placeholder="partner@example.com"
                    className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#3F332A]">제안 내용</label>
                <textarea
                  rows={4}
                  required
                  value={partnerForm.proposal}
                  onChange={(e) => setPartnerForm({...partnerForm, proposal: e.target.value})}
                  placeholder="협업 목적, 구체적인 제휴 방식, 일정 등을 기재해 주세요."
                  className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#3F332A]">참고 자료 링크 (선택)</label>
                <input
                  type="url"
                  value={partnerForm.link}
                  onChange={(e) => setPartnerForm({...partnerForm, link: e.target.value})}
                  placeholder="https://drive.google.com/... 또는 SNS 링크"
                  className="w-full p-2.5 border border-[#D5C2AB] rounded-xl text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={partnerSubmitting}
                className="w-full py-3 rounded-xl bg-[#2C241E] text-white font-semibold text-xs hover:bg-[#423529] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Briefcase className="w-4 h-4" />
                <span>{partnerSubmitting ? '전송 중...' : '제휴 제안하기'}</span>
              </button>
            </form>
          )}
        </div>
      )}

    </div>
  );
};
