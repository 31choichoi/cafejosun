import React from 'react';
import { Sparkles, Heart, Coffee, Check, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { TabType } from '../types';

interface SignatureSectionProps {
  onSelectTab: (tab: TabType) => void;
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({ onSelectTab }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D3] text-[#7C472A] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>SIGNATURE 4 STORIES</span>
        </span>
        <h1 className="font-serif-kr text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231A14]">
          카페조선 대표 메뉴
        </h1>
        <p className="text-sm sm:text-base text-[#6C5E51] leading-relaxed">
          카페조선에서만 만날 수 있는 네 가지 깊은 이야기
        </p>
      </div>

      {/* Story 1: 조선빙수 (대전빙수 명소) */}
      <section className="bg-white rounded-3xl overflow-hidden border border-[#E5DACB] shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#8C4A2F] text-white text-xs font-bold">
                #대전빙수 명소
              </span>
              <span className="text-xs font-semibold text-[#8C7D6E]">사계절 설산 눈꽃빙수</span>
            </div>

            <div>
              <div className="flex items-baseline gap-3">
                <h2 className="font-serif-kr text-2xl sm:text-3xl lg:text-4xl font-bold text-[#231A14]">
                  조선빙수 (대전빙수 대표)
                </h2>
                <span className="text-2xl font-bold text-[#8C4A2F]">14,900원</span>
              </div>
              <p className="text-base sm:text-lg font-serif-kr text-[#7C4328] mt-1">
                "조선에서 만나는 히말라야 설산의 절경, 대전빙수 원탑"
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#56493D] leading-relaxed">
              하얗게 쌓아 올린 순백의 눈꽃 얼음이 히말라야 설산처럼 우뚝 솟아 있습니다.
              어떠한 과한 토핑 없이 눈꽃만 가볍게 떠먹어도 입안에서 사르르 부드럽게 녹아내리는 감동적인 맛으로, 대전을 방문하는 여행객들이 가장 먼저 찾는 <strong className="text-[#8C4A2F]">대표 대전빙수</strong>입니다.
            </p>

            <div className="space-y-2 p-4 rounded-xl bg-[#FAF6EE] border border-[#EADBCE] text-xs sm:text-sm text-[#67574B]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#8C4A2F] shrink-0 mt-0.5" />
                <span>둘이 먹기에도 부담스러울 수 있을 만큼 푸짐하고 넉넉한 2~3인용 대용량</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#8C4A2F] shrink-0 mt-0.5" />
                <span>여름뿐 아니라 봄, 가을, 겨울 사계절 언제 오셔도 한결같은 품질로 준비되는 대전빙수</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#8C4A2F] shrink-0 mt-0.5" />
                <span>기호에 따라 전통 팥과 떡 고명을 함께 즐기는 깊은 조화</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onSelectTab('gallery')}
                className="px-5 py-2.5 rounded-xl bg-[#2C241E] text-white text-xs font-semibold hover:bg-[#3F342B] transition-colors cursor-pointer"
              >
                빙수 갤러리 사진 보기
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1000&auto=format&fit=crop&q=80"
                alt="조선빙수 히말라야 설산"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-md border border-[#E5DACB] text-center">
                <div className="text-[10px] text-[#8C4A2F] font-bold">BEST SELLER</div>
                <div className="text-xs font-extrabold text-[#231A14]">재주문율 1위</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 2: 십억차 */}
      <section className="bg-white rounded-3xl overflow-hidden border border-[#E5DACB] shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=1000&auto=format&fit=crop&q=80"
                alt="십억차 시그니처 비타민차"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#C59B27] text-white px-3 py-1 rounded-xl shadow-md text-xs font-bold">
                비타민나무열매 & 카이스트 원료
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C59B27] text-white text-xs font-bold">
                대표 02
              </span>
              <span className="text-xs font-semibold text-[#8C7D6E]">비타민 & 생기 충전</span>
            </div>

            <div>
              <div className="flex items-baseline gap-3">
                <h2 className="font-serif-kr text-2xl sm:text-3xl lg:text-4xl font-bold text-[#231A14]">
                  십억차 (十億茶)
                </h2>
                <span className="text-2xl font-bold text-[#8C4A2F]">8,900원</span>
              </div>
              <p className="text-base sm:text-lg font-serif-kr text-[#7C4328] mt-1">
                "상큼하고 산뜻하게 즐기는 카페조선 시그니처 티"
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#56493D] leading-relaxed">
              십억차는 한방 원료를 사용하지 않았습니다. 자연의 비타민 보고로 손꼽히는 <strong>비타민나무열매</strong>를 기본으로 사용하고, <strong>카이스트 교수가 만든 이엠생명과학연구원에서 개발한 특별한 원료</strong>를 더해 상큼하고 산뜻하게 즐기는 카페조선만의 독보적인 시그니처 티입니다.
            </p>

            <div className="space-y-2 p-4 rounded-xl bg-[#FAF6EE] border border-[#EADBCE] text-xs sm:text-sm text-[#67574B]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>비타민나무열매의 풍부한 자연 비타민으로 긴 여정에 지친 몸을 기분 좋게 리프레시</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>카이스트 교수가 설립한 이엠생명과학연구원에서 개발한 특별 원료 함유</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>한방 향이나 떫은맛 없이, 입안 가득 감도는 상큼하고 산뜻한 청량감</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>따뜻한 온차와 시원한 아이스(ICE) 모두 상쾌하고 깔끔하게 완성</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 3: 이백곡차 */}
      <section className="bg-white rounded-3xl overflow-hidden border border-[#E5DACB] shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#5B8266] text-white text-xs font-bold">
                대표 03
              </span>
              <span className="text-xs font-semibold text-[#8C7D6E]">든든한 영양 곡물차</span>
            </div>

            <div>
              <div className="flex items-baseline gap-3">
                <h2 className="font-serif-kr text-2xl sm:text-3xl lg:text-4xl font-bold text-[#231A14]">
                  이백곡차 (二百穀茶)
                </h2>
                <span className="text-2xl font-bold text-[#8C4A2F]">7,900원</span>
              </div>
              <p className="text-base sm:text-lg font-serif-kr text-[#7C4328] mt-1">
                "200여 가지 영양을 한 잔에"
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#56493D] leading-relaxed">
              200여 가지 귀한 곡물과 씨앗, 뿌리 재료의 영양을 한 잔에 고스란히 담아낸 든든한 건강차입니다.
              첫 모금은 고소하고 진하며, 목을 넘어간 뒤에는 은은하게 달큰한 여운이 맴돕니다. 바쁜 여행 중 가벼운 식사 대용으로도 손색이 없습니다.
            </p>

            <div className="space-y-2 p-4 rounded-xl bg-[#FAF6EE] border border-[#EADBCE] text-xs sm:text-sm text-[#67574B]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#5B8266] shrink-0 mt-0.5" />
                <span>속이 쓰리지 않고 편안해 어르신부터 아이까지 온 가족이 함께</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#5B8266] shrink-0 mt-0.5" />
                <span>아침 첫 기차를 타기 전 빈속을 따뜻하게 달래주는 든든함</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#5B8266] shrink-0 mt-0.5" />
                <span>인공 감미료를 넣지 않은 자연 그대로의 구수한 풍미</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1000&auto=format&fit=crop&q=80"
                alt="이백곡차 고소한 건강차"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#231A14] border border-[#E5DACB]">
                🌾 200여 가지 곡물 영양의 조화
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 4: 두바이조선떡 */}
      <section className="bg-white rounded-3xl overflow-hidden border border-[#E5DACB] shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=1000&auto=format&fit=crop&q=80"
                alt="두바이조선떡 퓨전 디저트"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-[#8C4A2F] text-white px-3 py-1 rounded-xl shadow-md text-xs font-bold">
                HOT DESSERT
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#8C4A2F] text-white text-xs font-bold">
                대표 04
              </span>
              <span className="text-xs font-semibold text-[#8C7D6E]">트렌디 퓨전 디저트</span>
            </div>

            <div>
              <div className="flex items-baseline gap-3">
                <h2 className="font-serif-kr text-2xl sm:text-3xl lg:text-4xl font-bold text-[#231A14]">
                  두바이조선떡
                </h2>
                <span className="text-2xl font-bold text-[#8C4A2F]">3,800원</span>
              </div>
              <p className="text-base sm:text-lg font-serif-kr text-[#7C4328] mt-1">
                "두바이에서 온 유행, 조선의 떡을 만나다"
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#56493D] leading-relaxed">
              바삭바삭하게 볶아낸 버터 카다이프와 고소한 피스타치오 원물 크림, 진한 고급 초콜릿.
              전 세계적으로 가장 사랑받는 두바이 디저트의 황홀한 맛을 쫀득쫀득한 우리 전통 찹쌀떡으로 부드럽게 감쌌습니다.
            </p>

            <div className="space-y-2 p-4 rounded-xl bg-[#FAF6EE] border border-[#EADBCE] text-xs sm:text-sm text-[#67574B]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#8C4A2F] shrink-0 mt-0.5" />
                <span>겉은 말랑 쫀득, 속은 바삭 고소한 중독성 넘치는 텍스처</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#8C4A2F] shrink-0 mt-0.5" />
                <span>아메리카노 및 전통차와 최고의 궁합을 자랑하는 티 푸드</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#8C4A2F] shrink-0 mt-0.5" />
                <span>선물용 4구 / 8구 포장 박스 제공 (기차 여행 선물로 인기)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onSelectTab('news')}
                className="px-5 py-2.5 rounded-xl bg-[#FAF1E3] hover:bg-[#F2E5D0] text-[#7C442A] text-xs font-semibold transition-colors cursor-pointer"
              >
                포토 리뷰 이벤트로 1개 무료 받기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <div className="text-center pt-4">
        <button
          onClick={() => onSelectTab('menu')}
          className="px-8 py-3.5 rounded-xl bg-[#8C4A2F] hover:bg-[#723922] text-white font-semibold text-sm shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
        >
          <span>전체 메뉴 및 음료 리스트 보기</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
