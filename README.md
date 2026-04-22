# Vercel Frontend (Headless WordPress)

## 1) Cai dat

```bash
npm install
cp .env.example .env.local
```

## 2) Chay local

```bash
npm run dev
```

Mo: `http://localhost:3000`

## 3) Bien moi truong

`NEXT_PUBLIC_WP_API_URL` tro den endpoint REST cua WordPress, vi du:

`https://ten-mien-wordpress-cua-ban.com/wp-json/wp/v2`

## 4) Deploy Vercel

- Push folder nay len GitHub.
- Import repo vao Vercel.
- Dat env var `NEXT_PUBLIC_WP_API_URL` trong Vercel Project Settings.
- Redeploy.
