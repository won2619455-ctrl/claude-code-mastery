// 다크 모드 아이콘 업데이트
const updateDarkIcons = (isDark) => {
  ['', 'Mobile'].forEach(suffix => {
    document.getElementById(`sunIcon${suffix}`)?.classList.toggle('hidden', !isDark);
    document.getElementById(`moonIcon${suffix}`)?.classList.toggle('hidden', isDark);
  });
};

// 다크 모드 초기화 (저장값 또는 시스템 설정 따름)
const initDarkMode = () => {
  const saved = localStorage.getItem('darkMode');
  const isDark = saved !== null ? saved === 'true' : true;
  document.documentElement.classList.toggle('dark', isDark);
  updateDarkIcons(isDark);
};

const toggleDark = () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark);
  updateDarkIcons(isDark);
};

document.getElementById('darkToggle')?.addEventListener('click', toggleDark);
document.getElementById('darkToggleMobile')?.addEventListener('click', toggleDark);

// 햄버거 메뉴
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

menuToggle?.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  menuIcon.classList.toggle('hidden', !isOpen);
  closeIcon.classList.toggle('hidden', isOpen);
});

// 모바일 메뉴 링크 클릭 시 닫기
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// 스크롤 시 네비게이션 배경 처리
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// 스크롤 스파이 — 현재 뷰포트 섹션의 nav 링크 활성화
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.35, rootMargin: '-64px 0px 0px 0px' });

sections.forEach(section => spyObserver.observe(section));

// 섹션 진입 시 페이드인 애니메이션
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-section').forEach(el => fadeObserver.observe(el));

// Scroll to Top 버튼
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 초기화
initDarkMode();
