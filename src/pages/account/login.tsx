import Seo from "@/components/Seo";
import styles from "./login.module.css";

export default function login() {
    return (
        <div>
            <Seo title="main" />
            <div>
                <p className={`section-title ${styles.sectionTitle}`}>AI CFO 아이디 찾기</p>
                <div className={`inpWrap`}>
                    <label htmlFor="imp_email">이메일</label>
                    <input type="text" id="inp_email" className={`inpBox`}/>
                </div>
                <div className={`inpWrap`}>
                    <label htmlFor="imp_email">비밀번호</label>
                    <input type="password" id="inp_email" className={`inpBox`}/>
                </div>
                <div className={`inpBtn`}>로그인</div>
            </div>
        </div>
    );
}