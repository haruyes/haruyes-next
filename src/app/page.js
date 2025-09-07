// src/app/page.js
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>메인 페이지</h1>
      <p className={styles.description}>
        여기는 <strong>haruyes</strong> 프로젝트의 메인 페이지입니다 🚀
      </p>
      <img
        src="/haruyes.png"
        alt="HARUYES 로고"
        className={styles.image}
      />
    </div>
  );
}
