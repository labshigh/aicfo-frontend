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
                <p className={`section-sub-title ${styles.subTitle}`}>이메일 회원가입</p>
                <div className={`inpWrap`}>
                    <label htmlFor="inp_email">이메일</label>
                    <input type="text" id="inp_email" className={`inpBox`}/>
                </div>
                <div className={`inpWrap`}>
                    <label htmlFor="inp_passwd">비밀번호</label>
                    <input type="password" id="inp_passwd" className={`inpBox`}/>
                </div>
                <div className={`inpWrap`}>
                    <label htmlFor="inp_passwd_re">비밀번호 재확인</label>
                    <input type="password" id="inp_passwd_re" className={`inpBox`}/>
                </div>
                <div className={`inpWrap`}>
                    <label htmlFor="inp_phone">전화번호 인증하기</label>
                    <input type="text" id="inp_phone" className={`inpBox`}/>
                    <button className={`btn-type01 certification-type`}>인증번호 발송</button>
                </div>
                <div className={`inpWrap`}>
                    <label htmlFor="inp_certification"></label>
                    <input type="text" id="inp_certification" className={`inpBox`}/>
                    <button className={`btn-type01 certification-type`}>인증</button>
                </div>
                <div className={`inpWrap`}>
                    <label htmlFor="inp_certification">안내문자 수신</label>
                    <div className={`${styles.customSwitch}`}>
                        <input role="switch" type="checkbox" className="sticky" name="sticky" checked={true}/>
                    </div>
                </div>

            </div>
        </div>
    );
}