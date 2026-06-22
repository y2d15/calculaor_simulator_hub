# 업무 히스토리 관리 시스템

팀 업무 히스토리를 효율적으로 관리하고 시각화하는 웹 애플리케이션입니다.

## 🚀 기능

- **로그인/회원가입**: 이메일 + 비밀번호, Google OAuth 지원
- **조직 관리**: 팀/조직 별 데이터 분리
- **프로젝트 관리**: 프로젝트 CRUD
- **업무 히스토리 입력**: 날짜, 제목, 내용 기록
- **필터 & 검색**: 프로젝트, 기간, 키워드 필터
- **일 단위 잔디**: GitHub 기여도 그래프 스타일 시각화
- **CSV 내보내기**: 데이터 다운로드
- **멤버 관리**: 팀 멤버 초대 및 권한 관리

## 📦 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth)
- **Visualization**: recharts, react-calendar-heatmap
- **Deployment**: Vercel

## 🛠️ 설치

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일 수정 (Supabase 정보 입력)

# 개발 서버 실행
npm run dev
```

## 📝 환경 변수

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-secret
```

## 🗄️ 데이터베이스 스키마

자세한 스키마는 `database/schema.sql` 참고

## 📄 라이선스

MIT
