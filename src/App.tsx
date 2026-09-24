/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, type User } from './lib/firebase';
import { TabType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { SignatureSection } from './components/SignatureSection';
import { MeetingRoomSection } from './components/MeetingRoomSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ReviewSection } from './components/ReviewSection';
import { NewsContactSection } from './components/NewsContactSection';
import { Phone, Users, ArrowUp, Train } from 'lucide-react';

export default function App() {
  const getInitialTab = (): TabType => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab') as TabType;
      const validTabs: TabType[] = ['home', 'about', 'menu', 'signature', 'meeting', 'gallery', 'location', 'reviews', 'news'];
      if (tabParam && validTabs.includes(tabParam)) {
        return tabParam;
      }
      const hash = window.location.hash.replace('#', '') as TabType;
      if (hash && validTabs.includes(hash)) {
        return hash;
      }
    }
    return 'home';
  };

  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);
  const [user, setUser] = useState<User | null>(null);
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = (params.get('tab') || 'home') as TabType;
      const validTabs: TabType[] = ['home', 'about', 'menu', 'signature', 'meeting', 'gallery', 'location', 'reviews', 'news'];
      if (validTabs.includes(tabParam)) {
        setCurrentTab(tabParam);
      }
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: TabType) => {
    setCurrentTab(tab);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (tab === 'home') {
        url.searchParams.delete('tab');
      } else {
        url.searchParams.set('tab', tab);
      }
      window.history.pushState({}, '', url.toString());
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2C241E]">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleTabChange}
        user={user}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeSection onSelectTab={handleTabChange} lang={lang} />
        )}
        {currentTab === 'about' && (
          <AboutSection onSelectTab={handleTabChange} lang={lang} />
        )}
        {currentTab === 'menu' && (
          <MenuSection onSelectTab={handleTabChange} />
        )}
        {currentTab === 'signature' && (
          <SignatureSection onSelectTab={handleTabChange} />
        )}
        {currentTab === 'meeting' && (
          <MeetingRoomSection />
        )}
        {currentTab === 'gallery' && (
          <GallerySection />
        )}
        {currentTab === 'location' && (
          <LocationSection />
        )}
        {currentTab === 'reviews' && (
          <ReviewSection user={user} />
        )}
        {currentTab === 'news' && (
          <NewsContactSection onSelectTab={handleTabChange} />
        )}
      </main>

      {/* Floating Bottom Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full bg-white border border-[#D8C7B4] text-[#4A3E35] shadow-lg flex items-center justify-center hover:bg-[#FAF6EE] transition-all hover:scale-105 cursor-pointer"
            title="맨 위로 가기"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <div className="pointer-events-auto flex items-center gap-2 bg-[#2C241E]/95 backdrop-blur-md p-1.5 rounded-full shadow-2xl border border-[#483B31]">
          <a
            href="tel:042-222-8818"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#8C4A2F] text-white text-xs font-semibold hover:bg-[#743A23] transition-colors shadow-xs"
            title="전화 문의"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">042-222-8818</span>
            <span className="sm:hidden">전화</span>
          </a>

          <button
            onClick={() => handleTabChange('meeting')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
            title="회의실 대관 문의"
          >
            <Users className="w-3.5 h-3.5 text-[#E6A65C]" />
            <span>대관 문의</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer onSelectTab={handleTabChange} />
    </div>
  );
}
