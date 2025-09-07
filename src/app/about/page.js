import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <h1 className={styles.title}>페이지 정보</h1>
      <p className={styles.description}>
        여기는 <strong>haruyes</strong> 프로젝트의 소개 페이지입니다 🚀
      </p>
      <img
        src="/haruyes.png"
        alt="HARUYES 로고"
        className={styles.image}
      />
    </div>
  );
}
