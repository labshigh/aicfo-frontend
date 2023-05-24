import Seo from "@/components/Seo";
import styles from "./findpwd.module.css";
import Link from "next/link";

export default function findPwd() {
    return (
        <div className={styles.findPwdWrap}>
            <Seo title="main" />
            <p className={`section-title ${styles.sectionTitle}`}>AI CFO 비밀번호 찾기</p>
            <div className={`inpWrap`}>
                <label htmlFor="inp_email">이메일 아이디</label>
                <input type="text" id="inp_email" className={`inpBox`}/>
                <button className={`btn-type01 certification-type`}>임시 비밀번호 발송</button>
            </div>
            <p className={`.txt-small ${styles.successDescription}`}>임시 비밀번호가 이메일로 발송되었습니다.</p>
            <div className={`inpWrap`}>
                <label htmlFor="inp_certification_num">비밀번호</label>
                <input type="password" id="inp_certification_num" className={`inpBox`}/>
            </div>
            <p className={`.txt-small ${styles.failDescription}`}>입력하신 비밀번호가 일치하지 않습니다.</p>
            <button className={`btn-type01 ${styles.findPwdLogin}`}>로그인</button>
            <button className={`btn-type01 ${styles.findPwdLogin}`} disabled={true}>로그인</button>
        </div>
    );
}