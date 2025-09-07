// src/app/products/page.js
import styles from "./products.module.css";

export default function Products() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📦 Products</h1>
      <p className={styles.description}>
        여기는 <strong>haruyes</strong> 프로젝트의 제품 소개 페이지입니다.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>AI 스토리북</h2>
          <p>아이들을 위한 맞춤형 AI 동화책 서비스 📚</p>
        </div>
        <div className={styles.card}>
          <h2>쇼핑몰 솔루션</h2>
          <p>위탁/도매 연동이 가능한 자동화 스토어 🛒</p>
        </div>
        <div className={styles.card}>
          <h2>디자인 패키지</h2>
          <p>브랜딩을 위한 고급 이미지 & 로고 패키지 🎨</p>
        </div>
      </div>
    </div>
  );
}
