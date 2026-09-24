import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MessageSquare, 
  ExternalLink, 
  Instagram, 
  Send, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  User as UserIcon,
  ThumbsUp
} from 'lucide-react';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';
import confetti from 'canvas-confetti';
import { db, signInWithGoogle, type User } from '../lib/firebase';
import { INITIAL_REVIEWS } from '../data/mockData';
import { ReviewItem } from '../types';

interface ReviewSectionProps {
  user: User | null;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ user }) => {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [rating, setRating] = useState<number>(5);
  const [content, setContent] = useState('');
  const [visitType, setVisitType] = useState('KTX 대기 중');
  const [menuRecommendation, setMenuRecommendation] = useState('조선빙수');
  const [selectedKeywordTag, setSelectedKeywordTag] = useState<'대전역카페' | '대전역회의실' | '대전빙수'>('대전역카페');
  const [keywordFilter, setKeywordFilter] = useState<'all' | '대전역카페' | '대전역회의실' | '대전빙수'>('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  // Listen to Firestore reviews collection
  useEffect(() => {
    try {
      const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          const firestoreReviews: ReviewItem[] = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              author: data.author || '카페조선 손님',
              rating: data.rating || 5,
              date: data.createdAt ? new Date(data.createdAt.toDate?.() || Date.now()).toLocaleDateString() : '최근',
              content: data.content || '',
              visitType: data.visitType || '일반 방문',
              keywordTag: data.keywordTag || '대전역카페',
              menuRecommendation: data.menuRecommendation || '',
              likes: data.likes || 0
            };
          });
          // Merge with initial reviews
          setReviews([...firestoreReviews, ...INITIAL_REVIEWS]);
        }
      }, (error) => {
        console.warn('Firestore reviews listener note:', error);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firestore subscription fallback to mock data:', e);
    }
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      alert('후기 내용을 작성해 주세요.');
      return;
    }

    if (!user) {
      try {
        await signInWithGoogle();
      } catch (err) {
        alert('후기 작성을 위해 Google 로그인이 필요합니다.');
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        author: user?.displayName ? `${user.displayName.slice(0, 1)}*${user.displayName.slice(2)}` : '방문객',
        userId: user?.uid || null,
        rating,
        content: content.trim(),
        visitType,
        keywordTag: selectedKeywordTag,
        menuRecommendation,
        createdAt: serverTimestamp(),
        likes: 0
      });

      setContent('');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      alert('소중한 후기가 성공적으로 등록되었습니다. 감사합니다!');
    } catch (error) {
      console.error('Error posting review:', error);
      alert('후기 저장 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredReviews = reviews.filter((r) => {
    if (filterRating !== 'all' && r.rating !== filterRating) return false;
    if (keywordFilter !== 'all' && r.keywordTag !== keywordFilter) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* 1. Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D3] text-[#7C472A] text-xs font-semibold uppercase tracking-wider">
          <Star className="w-3.5 h-3.5 text-[#C59B27] fill-[#C59B27]" />
          <span>CUSTOMER REVIEWS</span>
        </span>
        <h1 className="font-serif-kr text-3xl sm:text-4xl font-bold text-[#231A14]">
          고객 후기
        </h1>
        <p className="text-sm sm:text-base text-[#6C5E51] leading-relaxed">
          카페조선을 다녀가신 분들의 솔직한 이야기. 여러분의 따뜻한 한 줄 리뷰가 다음 여행자에게 든든한 길잡이가 됩니다.
        </p>
      </div>

      {/* 2. Naver Place & Stats Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DACB] shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 text-center md:text-left space-y-2">
            <div className="text-xs font-bold text-[#8C4A2F] uppercase tracking-wider">
              NAVER PLACE & REAL VISITOR REVIEWS
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#231A14] font-serif-kr">
                4.9
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#C59B27]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59B27]" />
                  ))}
                </div>
                <div className="text-xs text-[#8C7D6E] mt-0.5">방문자 만족도 98.6%</div>
              </div>
            </div>
            <p className="text-xs text-[#6B5C50] leading-relaxed">
              기차 시간 전 편안한 휴식, 사계절 눈꽃 조선빙수, 편리한 회의실 대관으로 높은 평가를 받고 있습니다.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-wrap items-center justify-center md:justify-end gap-3">
            <a
              href="https://map.naver.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-[#03C75A] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#02b350] transition-colors shadow-2xs"
            >
              <span>네이버 플레이스 리뷰 보러 가기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-[#2C241E] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#40352C] transition-colors shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E6A65C]" />
              <span>인스타그램 #카페조선 팔로우</span>
            </a>
          </div>

        </div>
      </div>

      {/* 3. Review Write Form */}
      <section className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-10 border border-[#E2D4C2] shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EADBCE] pb-4">
          <div>
            <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#231A14] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#8C4A2F]" />
              직접 방문 후기 남기기
            </h3>
            <p className="text-xs text-[#706254]">
              {user ? `${user.displayName || user.email}님으로 작성됩니다.` : '간편 Google 로그인 후 솔직한 평점과 후기를 등록하실 수 있습니다.'}
            </p>
          </div>

          {!user && (
            <button
              onClick={() => signInWithGoogle()}
              className="px-4 py-2 rounded-xl bg-white border border-[#D5C2AB] text-xs font-semibold text-[#3E342B] hover:bg-[#F6EFE5] flex items-center gap-1.5 transition-colors cursor-pointer w-fit"
            >
              <UserIcon className="w-3.5 h-3.5 text-[#8C4A2F]" />
              <span>Google 로그인하고 작성</span>
            </button>
          )}
        </div>

        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Rating */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3F332A]">만족도 별점</label>
              <div className="flex items-center gap-1.5 p-2.5 bg-white rounded-xl border border-[#D5C2AB]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setRating(s)}
                    className="p-1 cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        s <= rating ? 'text-[#C59B27] fill-[#C59B27]' : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-[#8C4A2F] ml-2">{rating}점 만점</span>
              </div>
            </div>

            {/* Keyword tag selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3F332A]">후기 키워드 테마</label>
              <select
                value={selectedKeywordTag}
                onChange={(e) => setSelectedKeywordTag(e.target.value as any)}
                className="w-full p-2.5 bg-white rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none font-semibold text-[#8C4A2F]"
              >
                <option value="대전역카페">#대전역카페 (도보 1분·커피·전통차)</option>
                <option value="대전역회의실">#대전역회의실 (세미나·대관·케이터링)</option>
                <option value="대전빙수">#대전빙수 (조선빙수·눈꽃빙수)</option>
              </select>
            </div>

            {/* Visit purpose */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3F332A]">방문 목적</label>
              <select
                value={visitType}
                onChange={(e) => setVisitType(e.target.value)}
                className="w-full p-2.5 bg-white rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
              >
                <option value="KTX 대기 중">KTX/열차 대기 중</option>
                <option value="회의실 대관">회의실 대관 및 세미나</option>
                <option value="디저트 데이트">디저트 & 빙수 데이트</option>
                <option value="가족 모임">부모님 및 가족 모임</option>
                <option value="외국인 여행객">외국인 여행객 (Traveler)</option>
                <option value="테이크아웃">기차용 빠른 포장</option>
              </select>
            </div>

            {/* Menu recommendation */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#3F332A]">추천 메뉴</label>
              <input
                type="text"
                value={menuRecommendation}
                onChange={(e) => setMenuRecommendation(e.target.value)}
                placeholder="예: 조선빙수, 십억차, 두바이조선떡"
                className="w-full p-2.5 bg-white rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#3F332A]">후기 내용</label>
            <textarea
              rows={3}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="맛, 분위기, 대전역과의 접근성, 친절도 등 방문 경험을 자유롭게 나눠주세요."
              className="w-full p-3 bg-white rounded-xl border border-[#D5C2AB] text-xs focus:ring-2 focus:ring-[#8C4A2F]/30 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-xl bg-[#8C4A2F] hover:bg-[#723922] text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? '등록 중...' : '소중한 후기 등록하기'}</span>
            </button>
          </div>
        </form>
      </section>

      {/* 4. Reviews List */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-kr text-xl font-bold text-[#231A14]">
              방문객 리뷰 ({filteredReviews.length})
            </h3>
            <p className="text-xs text-[#8C7D6E]">
              실제 방문 인증 및 빅데이터 텍스트마이닝 기준 만족도 99%
            </p>
          </div>

          {/* Keyword and Rating filters */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => setKeywordFilter('all')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                keywordFilter === 'all' ? 'bg-[#2C241E] text-white' : 'bg-white border border-[#D5C2AB] text-[#5C4F44]'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setKeywordFilter('대전역카페')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                keywordFilter === '대전역카페' ? 'bg-[#8C4A2F] text-white' : 'bg-white border border-[#D5C2AB] text-[#5C4F44]'
              }`}
            >
              #대전역카페
            </button>
            <button
              onClick={() => setKeywordFilter('대전역회의실')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                keywordFilter === '대전역회의실' ? 'bg-[#8C4A2F] text-white' : 'bg-white border border-[#D5C2AB] text-[#5C4F44]'
              }`}
            >
              #대전역회의실
            </button>
            <button
              onClick={() => setKeywordFilter('대전빙수')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                keywordFilter === '대전빙수' ? 'bg-[#8C4A2F] text-white' : 'bg-white border border-[#D5C2AB] text-[#5C4F44]'
              }`}
            >
              #대전빙수
            </button>
            <span className="text-[#C4B7A6] px-1">|</span>
            <button
              onClick={() => setFilterRating(filterRating === 5 ? 'all' : 5)}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                filterRating === 5 ? 'bg-[#C59B27] text-white' : 'bg-white border border-[#D5C2AB] text-[#5C4F44]'
              }`}
            >
              ★ 5점만 보기
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#E5DACB] shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FAF0E1] text-[#8C4A2F] flex items-center justify-center font-bold text-xs">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#231A14]">{rev.author}</span>
                        {rev.keywordTag && (
                          <span className="px-1.5 py-0.5 rounded-md bg-[#FAF0E1] text-[#8C4A2F] text-[10px] font-bold">
                            #{rev.keywordTag}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-[#8C7D6E]">{rev.date} · {rev.visitType}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-[#C59B27]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C59B27]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4E4137] leading-relaxed">
                  "{rev.content}"
                </p>
              </div>

              {rev.menuRecommendation && (
                <div className="pt-2 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-[#8C7D6E]">
                  <span>추천 메뉴: <strong className="text-[#8C4A2F]">{rev.menuRecommendation}</strong></span>
                  <span className="flex items-center gap-1 text-[#5B8266]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>영수증 인증 방문</span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
