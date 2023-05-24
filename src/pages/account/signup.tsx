import Seo from "@/components/Seo";
import styles from "./signup.module.css";
import Link from "next/link";

export default function signup() {
    return (
        <div>
            <Seo title="main" />
            <p className={`section-title ${styles.sectionTitle}`}>AI CFO 회원가입</p>
            <div className={styles.socialBtnWrap}>
                <Link href="/" className={`btn-type01 ${styles.naver} ${styles.socialBtn}`}>네이버로 회원가입</Link>
                <Link href="/" className={`btn-type01 ${styles.kakao} ${styles.socialBtn}`}>카카오로 회원가입</Link>
                <Link href="/" className={`btn-type01 ${styles.google} ${styles.socialBtn}`}>Google로 회원가입</Link>
                <Link href="/" className={`btn-type01 ${styles.apple} ${styles.socialBtn}`}>Apple로 회원가입</Link>
            </div>
            <div className={styles.signupEmailWrap}>

            </div>
        </div>
    );
}