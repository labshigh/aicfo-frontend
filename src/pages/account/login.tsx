import Seo from "@/components/Seo";
import styles from "./login.module.css";
import Link from "next/link";

export default function login() {
    return (
        <div>
            <Seo title="main" />
            <p className={`section-title ${styles.sectionTitle}`}>AI CFO 아이디 찾기</p>
            <div className={`inpWrap`}>
                <label htmlFor="inp_email">이메일</label>
                <input type="text" id="inp_email" className={`inpBox`}/>
            </div>
            <div className={`chkWrap ${styles.chkRemember}`}>
                <input type="checkbox" id="inp_remember"/>
                <label htmlFor="inp_remember" className={`txt-small`}>아이디 기억하기</label>
            </div>
            <div className={`inpWrap`}>
                <label htmlFor="inp_passwd">비밀번호</label>
                <input type="password" id="inp_passwd" className={`inpBox`}/>
            </div>
            <div className={styles.findWrap}>
                <Link href="/account/findpwd" className={`txt-small`}>비밀번호 찾기</Link> / <Link href="/account/findid" className={`txt-small`}>아이디 찾기</Link>
            </div>
            <Link href="/" className={`btn-type01 ${styles.loginBtn}`}>로그인</Link>
            <div className={`${styles.socialBtnWrap}`}>
                <Link href="/" className={`btn-type01 ${styles.naver} ${styles.socialBtn}`}>네이버로 로그인</Link>
                <Link href="/" className={`btn-type01 ${styles.kakao} ${styles.socialBtn}`}>카카오로 로그인</Link>
                <Link href="/" className={`btn-type01 ${styles.google} ${styles.socialBtn}`}>Google로 로그인</Link>
                <Link href="/" className={`btn-type01 ${styles.apple} ${styles.socialBtn}`}>Apple로 로그인</Link>
            </div>
            <div className={`txt-normal ${styles.infoWrap}`}>
                <Link href="/account/signup">회원가입</Link> 후, AI CFO 서비스를 이용해보세요.
            </div>
        </div>
    );
}