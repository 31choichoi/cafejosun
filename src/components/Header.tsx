import React, { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  User as UserIcon, 
  LogOut, 
  Globe, 
  Sparkles,
  Train
} from 'lucide-react';
import { TabType } from '../types';
import { type User, signInWithGoogle, logout } from '../lib/firebase';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  user: User | null;
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  user,
  lang,
  setLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { key: TabType; labelKo: string; labelEn: string; highlight?: boolean }[] = [
    { key: 'home', labelKo: '홈', labelEn: 'Home' },
    { key: 'about', labelKo: '카페 소개', labelEn: 'About' },
    { key: 'menu', labelKo: '메뉴', labelEn: 'Menu' },
    { key: 'signature', labelKo: '대표 메뉴', labelEn: 'Signatures', highlight: true },
    { key: 'meeting', labelKo: '회의실 대관', labelEn: 'Meeting Room', highlight: true },
    { key: 'gallery', labelKo: '갤러리', labelEn: 'Gallery' },
    { key: 'location', labelKo: '오시는 길', labelEn: 'Location' },
    { key: 'reviews', labelKo: '고객 후기', labelEn: 'Reviews' },
    { key: 'news', labelKo: '소식·문의', labelEn: 'News & Contact' },
  ];

  const handleAuth = async () => {
    if (user) {
      await logout();
    } else {
      setAuthLoading(true);
      try {
        await signInWithGoogle();
      } catch (e) {
        console.error(e);
      } finally {
        setAuthLoading(false);
      }
    }
  };

  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = currentTab === 'home';
  const isTransparent = isHome && !isScrolled;

  return (
    <header className={`${
      isHome ? 'fixed top-0 left-0 right-0 z-50' : 'sticky top-0 z-50'
    } transition-all duration-300 ${
      isTransparent 
        ? 'bg-gradient-to-b from-black/85 via-black/45 to-transparent border-b border-white/10 text-white'
        : 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E3DAC9] shadow-xs text-[#2C241E]'
    }`}>
      {/* Top micro bar for station status & quick telephone */}
      <div className={`${
        isTransparent
          ? 'bg-black/40 backdrop-blur-xs text-[#EFE7D8] border-b border-white/10'
          : 'bg-[#2C241E] text-[#EFE7D8]'
      } text-xs py-1.5 px-4 transition-colors`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#F5DEB3] font-medium">
              <Train className="w-3.5 h-3.5 text-[#E6A65C]" />
              <span>대전역 3번 출구 도보 1분 (TRY 오른쪽 옆건물)</span>
            </span>
            <span className="hidden sm:inline-block text-[#887868]">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#D3C7B6]">
              <Clock className="w-3 h-3 text-[#A89886]" />
              매일 10:00 - 22:00 (연중무휴)
            </span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#3D5A45] text-[#86EFAC] text-[10px] font-semibold">
              영업 중
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className="flex items-center gap-1 text-xs hover:text-[#E6A65C] transition-colors cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'ko' ? 'ENG' : '한국어'}</span>
            </button>
            <span className="opacity-50">|</span>
            <a 
              href="tel:042-222-8818" 
              className="flex items-center gap-1 hover:text-[#E6A65C] font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>042-222-8818</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Traditional Seal Brand Mark */}
            <div className="w-11 h-11 rounded-lg bg-[#8C4A2F] text-[#FDF9F3] flex items-center justify-center font-serif-kr text-xl font-bold shadow-sm border border-[#6B341E] group-hover:scale-105 transition-transform duration-200">
              朝鮮
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-serif-kr text-2xl font-bold tracking-tight transition-colors ${
                  isTransparent ? 'text-white group-hover:text-[#F5DEB3]' : 'text-[#2C241E] group-hover:text-[#8C4A2F]'
                }`}>
                  카페조선
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${
                  isTransparent 
                    ? 'bg-white/20 text-[#F5DEB3] border-white/20' 
                    : 'bg-[#F1E8D9] text-[#7C4E29] border-[#DECFB8]'
                }`}>
                  대전역 도보 1분
                </span>
              </div>
              <p className={`text-[11px] tracking-wider uppercase font-medium ${
                isTransparent ? 'text-[#D5C7B7]' : 'text-[#7C7063]'
              }`}>
                CAFE JOSUN · TRADITIONAL TEA & DESSERT
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative cursor-pointer ${
                    isTransparent
                      ? isActive
                        ? 'text-[#F5DEB3] bg-white/20 font-bold shadow-2xs'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      : isActive 
                        ? 'text-[#8C4A2F] bg-[#F3ECE0] font-semibold shadow-2xs' 
                        : 'text-[#4A3E35] hover:text-[#8C4A2F] hover:bg-[#F7F2E9]'
                  }`}
                >
                  <span>{lang === 'ko' ? item.labelKo : item.labelEn}</span>
                  {item.highlight && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#C59B27] rounded-full animate-pulse" />
                  )}
                  {isActive && (
                    <span className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                      isTransparent ? 'bg-[#F5DEB3]' : 'bg-[#8C4A2F]'
                    }`} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action & User Profile */}
          <div className="hidden sm:flex items-center gap-3">
            {user ? (
              <div className={`flex items-center gap-2 border py-1.5 px-3 rounded-full text-xs ${
                isTransparent 
                  ? 'bg-black/40 border-white/20 text-white' 
                  : 'bg-[#F3EDE3] border-[#DFCBB5] text-[#3F332A]'
              }`}>
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || '사용자'} className="w-6 h-6 rounded-full object-cover" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#8C4A2F] text-white flex items-center justify-center font-bold text-[10px]">
                    {(user.displayName || user.email || 'U').charAt(0)}
                  </div>
                )}
                <span className="font-medium truncate max-w-[90px]">
                  {user.displayName || user.email?.split('@')[0]}
                </span>
                <button 
                  onClick={handleAuth}
                  title="로그아웃"
                  className="opacity-70 hover:opacity-100 hover:text-red-400 ml-1 p-0.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuth}
                disabled={authLoading}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors shadow-2xs cursor-pointer ${
                  isTransparent
                    ? 'bg-white/15 hover:bg-white/25 border-white/25 text-white'
                    : 'border-[#D5C2AB] bg-white text-[#4A3E35] hover:bg-[#F7F2E9]'
                }`}
              >
                <UserIcon className="w-3.5 h-3.5 text-[#E6A65C]" />
                <span>{authLoading ? '연결 중...' : 'Google 로그인'}</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('meeting')}
              className="flex items-center gap-1.5 bg-[#8C4A2F] hover:bg-[#733A23] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer hover:shadow-md active:scale-98 border border-[#B86846]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5DEB3]" />
              <span>회의실 대관 문의</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isTransparent ? 'text-white hover:bg-white/20' : 'text-[#3E342B] hover:bg-[#EFE7D8]'
              }`}
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6EE] text-[#2C241E] border-b border-[#DFCBB5] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`flex items-center justify-between p-3 rounded-lg text-sm text-left font-medium transition-colors ${
                  currentTab === item.key
                    ? 'bg-[#8C4A2F] text-white font-semibold'
                    : 'bg-white text-[#3E342B] border border-[#E8DFD1]'
                }`}
              >
                <span>{lang === 'ko' ? item.labelKo : item.labelEn}</span>
                {item.highlight && currentTab !== item.key && (
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#F3ECE0] text-[#8C4A2F] rounded font-bold">
                    HOT
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8DFD1] flex flex-col gap-2">
            {user ? (
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#E8DFD1]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#8C4A2F] text-white flex items-center justify-center text-xs font-bold">
                    {(user.displayName || 'U').charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#2C241E]">{user.displayName || user.email}</p>
                    <p className="text-[10px] text-[#7C7063]">인증된 계정</p>
                  </div>
                </div>
                <button
                  onClick={handleAuth}
                  className="text-xs text-red-600 px-2 py-1 bg-red-50 rounded"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuth}
                className="w-full py-2.5 px-4 bg-white border border-[#D5C2AB] rounded-lg text-xs font-semibold text-[#3E342B] flex items-center justify-center gap-2"
              >
                <UserIcon className="w-4 h-4 text-[#8C4A2F]" />
                <span>Google 계정으로 로그인</span>
              </button>
            )}

            <div className="flex gap-2">
              <a
                href="tel:042-222-8818"
                className="flex-1 py-2.5 bg-[#44382F] text-[#F9F6F0] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#E6A65C]" />
                <span>전화 042-222-8818</span>
              </a>
              <button
                onClick={() => handleNavClick('meeting')}
                className="flex-1 py-2.5 bg-[#8C4A2F] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F5DEB3]" />
                <span>회의실 대관</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

