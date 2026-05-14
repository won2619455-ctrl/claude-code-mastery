# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

---

## 프로젝트 개요

반응형 개발자 웹 이력서 (단일 페이지 정적 사이트)

- **기술스택**: HTML5, CSS3, Vanilla JavaScript, TailwindCSS (CDN)
- **빌드 도구 없음**: 별도 번들러나 패키지 매니저 없이 순수 정적 파일로 구성
- **배포**: GitHub Pages

---

## 개발 명령어

빌드 도구가 없으므로 브라우저에서 직접 열거나 로컬 서버를 사용한다.

```bash
# 로컬 개발 서버 (Python)
python -m http.server 8080

# 로컬 개발 서버 (Node.js live-server)
npx live-server

# 로컬 개발 서버 (VS Code / Cursor)
# Live Server 확장 설치 후 index.html에서 우클릭 → "Open with Live Server"
```

---

## 아키텍처 구조

```
resume/
├── index.html          # 단일 페이지 — 모든 섹션 포함
├── assets/
│   ├── css/
│   │   └── style.css   # TailwindCSS로 커버되지 않는 커스텀 스타일만 작성
│   ├── js/
│   │   └── main.js     # 인터랙션 전담 (스크롤, 애니메이션, 메뉴 토글)
│   └── images/
│       └── profile.webp
└── ROADMAP.md
```

### 핵심 설계 원칙

- **스타일 우선순위**: TailwindCSS 유틸리티 클래스를 최우선 사용. `style.css`는 Tailwind로 표현 불가능한 경우에만 작성 (예: 커스텀 keyframe 애니메이션, 스크롤바 스타일).
- **JS 범위**: `main.js`는 DOM 조작과 이벤트 처리만 담당. 외부 라이브러리 의존 없이 Vanilla JS로 구현.
- **단일 HTML 파일**: 모든 섹션(`#hero`, `#about`, `#skills`, `#experience`, `#projects`, `#education`, `#contact`)은 `index.html` 안에 존재. 라우팅 없음.

### TailwindCSS 설정

CDN 방식 사용 시 `index.html` `<head>`에 아래 태그 포함:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

커스텀 색상/폰트 확장이 필요하면 인라인 `tailwind.config` 스크립트로 추가한다.

---

## 섹션 구성 및 콘텐츠

| 섹션 ID | 역할 |
|---|---|
| `#hero` | 이름, 직함, CTA 버튼 |
| `#about` | 자기소개, 소셜 링크 |
| `#skills` | 기술 스택 뱃지 (카테고리별) |
| `#experience` | 경력 타임라인 |
| `#projects` | 프로젝트 카드 그리드 |
| `#education` | 학력 |
| `#contact` | 연락처 링크 |

샘플 인물 정보는 `ROADMAP.md` Phase 5 섹션을 참고한다.

---

## 주요 JS 동작

- **스크롤 스파이**: `IntersectionObserver`로 현재 뷰포트 섹션을 감지해 네비게이션 링크 활성화
- **모바일 메뉴**: 햄버거 아이콘 클릭 시 `nav` 토글 (`hidden` 클래스 제어)
- **진입 애니메이션**: `IntersectionObserver`로 섹션 진입 시 `opacity-0 → opacity-100` 전환
- **Scroll to Top**: 스크롤 위치가 300px 초과 시 버튼 노출

---

## 배포

```bash
# GitHub Pages 배포
git init
git add .
git commit -m "최초 배포: 개발자 웹 이력서"
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
# GitHub 저장소 Settings > Pages > Branch: main / root 선택 후 저장
```
