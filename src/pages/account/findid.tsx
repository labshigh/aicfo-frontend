import Seo from "@/components/Seo";
import styles from "./findid.module.css";
import Link from "next/link";

export default function findId() {
    return (
        <div>
            <Seo title="main" />
            <p className={`section-title ${styles.sectionTitle}`}>AI CFO 아이디 찾기</p>
            <div className={`inpWrap`}>
                <label htmlFor="inp_phone">전화번호</label>
                <input type="text" id="inp_phone" className={`inpBox`}/>
                <button className={`btn-type01 certification-type`}>인증번호 발송</button>
            </div>
            <div className={`inpWrap`}>
                <label htmlFor="inp_certification_num">인증번호</label>
                <input type="text" id="inp_certification_num" className={`inpBox`}/>
                <button className={`btn-type01 certification-type`} disabled={true}>인증번호 확인</button>
            </div>
            <p className={`.txt-small ${styles.certificationDescription}`}>입력하신 전화번호는 회원가입 내역이 없습니다.</p>
            <div className={styles.findIdSuccessWrap}>
                <div className={`boxWrap ${styles.findIdBox}`}>
                    <p className={`txt-normal`}>회원님의 아이디</p>
                    <p className={`txt-large`}>Sta*****@gmail.com</p>
                </div>
                <button className={`btn-type01 ${styles.findIdLogin}`}>로그인 하러 가기</button>
            </div>
        </div>
    );
}