# 웹 이력서 모던 다크 리디자인 계획

## Context

현재 이력서는 라이트/다크 토글 방식의 파란색 계열 디자인이다.  
사용자가 제공한 참고 이미지(Jensen Omega 스타일)는:
- 항상 어두운 배경 (`#0f1117` 계열)
- 빨간색 Accent (`#e63946`)
- Hero: 좌측 텍스트 + 우측 프로필(글로우 링)
- About: 좌측 서비스 카드 + 우측 소개글+통계 수치

목표: 전체 디자인을 다크 퍼스트로 전환하고 레이아웃·색상·간격을 일관되게 정비한다.

---

## 변경 대상 파일

- `resume/index.html` — 구조 + 색상 클래스 전면 교체
- `resume/assets/css/style.css` — navbar, active 링크, 글로우 효과 추가
- `resume/assets/js/main.js` — 1줄 변경 (dark 기본값)

---

## 단계별 구현 계획

### 1. tailwind.config 색상 교체 (index.html `<script>`)

`primary`를 파란→빨간 계열로 교체. `surface`와 `ink` 색상 그룹 추가.

```js
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Noto Sans KR', 'sans-serif'] },
      colors: {
        primary: {
          50:  '#fff1f2',
          100: '#ffe4e6',
          400: '#fb7185',
          600: '#e63946',  // 핵심 accent
          700: '#c1121f',
          900: '#7f1d1d',
        },
        surface: {
          base: '#0f1117',
          card: '#161b22',
        },
        ink: {
          primary: '#f0f6fc',
          muted:   '#8b949e',
        },
      },
    },
  },
}
```

### 2. main.js — 1줄 변경

`main.js:12`의 `prefersDark` → `true`로 교체. localStorage가 없으면 무조건 dark.

```js
// 변경 전
const isDark = saved !== null ? saved === 'true' : prefersDark;
// 변경 후
const isDark = saved !== null ? saved === 'true' : true;
```

`prefersDark` 변수 선언(11번째 줄)도 제거한다.

### 3. `<body>` 클래스 변경

```html
<!-- 기존 -->
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
<!-- 변경 후 -->
<body class="bg-surface-base text-ink-primary font-sans">
```

### 4. style.css 교체

다음을 수정/추가한다:

**navbar scrolled**: 흰색 배경→ 어두운 반투명
```css
#navbar.scrolled {
  background-color: rgba(15, 17, 23, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
}
.dark #navbar.scrolled { background-color: rgba(15, 17, 23, 0.92); }
```

**active 링크 색상**: `#2563eb` → `#e63946`

**스크롤바 thumb**: `#d1d5db` → `#30363d`, hover `#9ca3af` → `#e63946`

**새로 추가**:
```css
/* 프로필 글로우 링 */
.profile-glow-ring { position: relative; display: inline-block; }
.profile-glow-ring::before {
  content: ''; position: absolute; inset: -8px; border-radius: 50%;
  border: 2px solid rgba(230, 57, 70, 0.4);
  animation: glow-pulse 2.5s ease-in-out infinite;
}
.profile-glow-ring::after {
  content: ''; position: absolute; inset: -20px; border-radius: 50%;
  border: 1px solid rgba(230, 57, 70, 0.15);
  animation: glow-pulse 2.5s ease-in-out infinite 0.8s;
}
@keyframes glow-pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.03); }
}
.profile-glow-ring > div {
  box-shadow: 0 0 40px rgba(230,57,70,0.2), 0 0 80px rgba(230,57,70,0.08);
}

/* 서비스 카드 호버 */
.service-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
.service-card:hover { transform: translateX(4px); box-shadow: -4px 0 12px rgba(230,57,70,0.15); }
```

### 5. 네비게이션 HTML

`dark:` prefix 클래스 제거, `text-ink-muted hover:text-ink-primary`로 통일.  
모바일 메뉴 배경: `bg-surface-card border-t border-white/10`.

### 6. Hero 섹션 전면 재구성

**기존**: 단일 컬럼, 가운데 정렬  
**변경**: 2컬럼 grid (`grid md:grid-cols-2 gap-12 items-center`)

좌측 컬럼:
```
Hello<span class="text-primary-600">.</span>
I'm 김개발  (h1, font-black)
Frontend Developer (text-primary-600)
소개 한 줄 (text-ink-muted)
CTA 버튼 2개
기술 스택 태그 한 줄 (border border-white/10 rounded-full)
```

우측 컬럼:
```html
<div class="profile-glow-ring">
  <div class="w-72 h-72 rounded-full bg-surface-card border-4 border-primary-600/30 ...">김</div>
</div>
<!-- 장식 다각형 absolute 요소들 -->
```

모바일 순서: `order-2 md:order-1` (좌측), `order-1 md:order-2` (우측).  
SNS 아이콘: Hero 하단으로 이동, 좌측 정렬.  
배경: `bg-gradient-to-br from-primary-50 to-blue-100 dark:...` 제거 → `bg-surface-base`.

### 7. About 섹션 재구성

**기존**: 좌=소개글, 우=소셜 링크  
**변경**: 좌=서비스 카드 4개, 우=소개글+통계

서비스 카드 구조 (`border-l-4 border-primary-600`):
1. 프론트엔드 개발 (코드 아이콘)
2. UI/UX 구현 (레이아웃 아이콘)
3. 성능 최적화 (번개 아이콘)
4. 협업 & 코드 리뷰 (사람 아이콘)

통계 수치 3칸:
```
120+ 완료 프로젝트 | 95% 고객 만족도 | 3+ 년 경력
```
각 수치: `text-3xl font-black text-primary-600`

소셜 링크는 Contact 섹션으로 통합 (About 우측에서 제거).

### 8. Skills 섹션 스타일 조정

구조 유지. 카드 배경/테두리 변경:
- `bg-white dark:bg-gray-900` → `bg-surface-base border border-white/5 hover:border-primary-600/30`
- 카테고리 점 → `w-2 h-4 rounded-sm` 직사각형으로 변경
- Frontend 뱃지: `bg-primary-600/10 text-primary-400`
- Backend/Tools 뱃지: `bg-white/5 text-ink-muted`

### 9. Experience/Projects/Education/Contact 색상 일괄 교체

전체 `dark:` prefix 패턴 제거, surface/ink 커스텀 색상으로 교체:

| 기존 | 변경 후 |
|---|---|
| `bg-white dark:bg-gray-900` | `bg-surface-base` |
| `bg-gray-50 dark:bg-gray-800` | `bg-surface-card` |
| `text-gray-900 dark:text-white` | `text-ink-primary` |
| `text-gray-600 dark:text-gray-300` | `text-ink-muted` |
| `border-gray-200 dark:border-gray-700` | `border-white/10` |
| `hover:bg-gray-100 dark:hover:bg-gray-800` | `hover:bg-white/5` |
| `text-primary-600 dark:text-primary-400` | `text-primary-600` |

Experience 타임라인 선: `bg-white/10`  
Projects 카드 상단 그라디언트: `from-primary-600 to-primary-400`으로 통일  
Contact 카드: `border border-white/5 hover:border-primary-600/40`  
Footer: `bg-surface-card`

---

## 검증 방법

1. `python -m http.server 8080` 실행 후 `http://localhost:8080/resume/` 열기
2. localStorage 지우고 새로고침 → 다크모드 기본 적용 확인
3. 다크 토글로 라이트 전환 → 새로고침 → 라이트 유지 확인 (localStorage)
4. 데스크톱(1280px): Hero 2컬럼 좌우 배치 확인, 글로우 링 애니메이션 확인
5. 모바일(375px): 프로필 위→텍스트 아래 순서, 햄버거 메뉴 동작 확인
6. 스크롤 20px 이상: navbar 반투명 어두운 배경 전환 확인
7. 스크롤 스파이: nav active 링크가 빨간색으로 표시 확인
8. About 서비스 카드 호버: 우측으로 4px 이동하는 효과 확인
9. 모든 accent 색상(`primary-600`)이 `#e63946` 계열인지 확인
