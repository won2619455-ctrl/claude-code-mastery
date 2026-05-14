# 개발자 웹 이력서 개발 로드맵

## 프로젝트 개요

**목표:** 반응형 개발자 웹 이력서 제작  
**기술스택:** HTML5, CSS3, JavaScript (Vanilla), TailwindCSS  
**배포:** GitHub Pages (정적 호스팅)

---

## 단계별 로드맵

### Phase 1 — 프로젝트 초기 설정

- [ ] 디렉토리 구조 설계
- [ ] TailwindCSS CDN 또는 CLI 설정
- [ ] `index.html` 기본 골격 작성 (DOCTYPE, meta, viewport)
- [ ] 폰트 설정 (Google Fonts — Inter 또는 Noto Sans KR)
- [ ] 파비콘 추가

**결과물:** 빈 페이지에 TailwindCSS가 적용된 초기 템플릿

---

### Phase 2 — 레이아웃 설계

- [ ] 전체 페이지 섹션 구성 확정
  - Hero (소개)
  - About (자기소개)
  - Skills (기술 스택)
  - Experience (경력)
  - Projects (프로젝트)
  - Education (학력)
  - Contact (연락처)
- [ ] 네비게이션 바 (고정형, 스크롤 시 축소)
- [ ] 반응형 그리드 레이아웃 설계 (모바일 / 태블릿 / 데스크톱)

**결과물:** 와이어프레임 수준의 레이아웃 구조

---

### Phase 3 — 섹션별 마크업 및 스타일링

#### 3-1. Hero 섹션
- [ ] 이름, 직함, 한 줄 소개
- [ ] CTA 버튼 (이력서 다운로드, 연락하기)
- [ ] 프로필 이미지 또는 아바타

#### 3-2. About 섹션
- [ ] 자기소개 텍스트 (3~4문장)
- [ ] GitHub / LinkedIn / 이메일 링크

#### 3-3. Skills 섹션
- [ ] 기술 카테고리별 뱃지 (Frontend / Backend / Tools)
- [ ] 숙련도 표시 (바 차트 또는 태그 형식)

#### 3-4. Experience 섹션
- [ ] 타임라인 형식 레이아웃
- [ ] 회사명, 직책, 기간, 주요 업무 불릿

#### 3-5. Projects 섹션
- [ ] 카드 그리드 레이아웃
- [ ] 프로젝트명, 설명, 사용 기술, GitHub / 데모 링크

#### 3-6. Education 섹션
- [ ] 학교명, 전공, 졸업 연도

#### 3-7. Contact 섹션
- [ ] 이메일, GitHub, LinkedIn 아이콘 링크
- [ ] 간단한 문의 폼 (선택)

**결과물:** 모든 섹션이 스타일링된 완성 페이지

---

### Phase 4 — JavaScript 인터랙션

- [ ] 네비게이션 스크롤 하이라이트 (IntersectionObserver)
- [ ] 햄버거 메뉴 (모바일 토글)
- [ ] 섹션 진입 시 페이드인 애니메이션
- [ ] 상단으로 이동 버튼 (Scroll to Top)
- [ ] 다크 모드 토글 (선택)

**결과물:** 인터랙티브한 UX가 적용된 페이지

---

### Phase 5 — 콘텐츠 작성

이력서에 들어갈 일반적인 샘플 내용:

```
이름:        김개발
직함:        Frontend Developer
경력:        3년
이메일:      dev.kim@email.com
GitHub:      github.com/devkim
LinkedIn:    linkedin.com/in/devkim

자기소개:
사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
React와 TypeScript를 주력으로 사용하며, 성능 최적화와 접근성에 관심이 많습니다.

기술 스택:
- Frontend: HTML, CSS, JavaScript, TypeScript, React, TailwindCSS
- Backend:  Node.js, Express, REST API
- Tools:    Git, GitHub, Figma, VS Code

경력:
- 2023.03 ~ 현재  |  (주)테크스타트업  |  Frontend Developer
  · React 기반 SPA 개발 및 유지보수
  · TailwindCSS 도입으로 스타일 개발 속도 40% 향상

- 2022.01 ~ 2023.02  |  프리랜서  |  Web Developer
  · 중소기업 랜딩페이지 및 쇼핑몰 제작 다수

프로젝트:
1. 포트폴리오 웹사이트
   - 기술: HTML, TailwindCSS, JavaScript
   - GitHub: github.com/devkim/portfolio

2. 날씨 대시보드
   - 기술: React, OpenWeather API, Chart.js
   - GitHub: github.com/devkim/weather-app

학력:
- 2018.03 ~ 2022.02  |  한국대학교  |  컴퓨터공학과  |  학사
```

---

### Phase 6 — 최적화 및 마무리

- [ ] 이미지 최적화 (WebP 변환, 적절한 크기)
- [ ] 시맨틱 HTML 검토 (접근성)
- [ ] Open Graph / Twitter Card 메타태그 추가 (SNS 공유 미리보기)
- [ ] Lighthouse 점수 확인 (Performance / Accessibility / SEO)
- [ ] Cross-browser 테스트 (Chrome / Firefox / Safari)
- [ ] 모바일 반응형 최종 점검

---

### Phase 7 — 배포

- [ ] GitHub 저장소 생성
- [ ] 코드 푸시
- [ ] GitHub Pages 활성화 (`Settings > Pages > main branch`)
- [ ] 커스텀 도메인 연결 (선택)

**결과물:** 공개 URL로 접근 가능한 배포된 이력서

---

## 디렉토리 구조

```
resume/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css          # TailwindCSS 커스텀 확장
│   ├── js/
│   │   └── main.js            # 인터랙션 로직
│   └── images/
│       └── profile.webp
└── ROADMAP.md
```

---

## 개발 순서 요약

```
Phase 1 (초기 설정) → Phase 2 (레이아웃) → Phase 3 (마크업/스타일)
→ Phase 4 (JS 인터랙션) → Phase 5 (콘텐츠) → Phase 6 (최적화) → Phase 7 (배포)
```

예상 총 개발 시간: **8~12시간**
