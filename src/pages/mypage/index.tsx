import Seo from "@/components/Seo";
import React from "react";
import styles from "./mypage.module.css";
import Image from "next/image";
import headerBg from "@/assets/bg/mypage/bg_mypage.png";

export default function mypage() {
    return (
        <div>
            <Seo title="mypage" />
            <div className={`boardHeaderWrap`}>
                <p className={`section-title`}>마이페이지</p>
                <Image src={headerBg} alt=""/>
            </div>
            <div className={`${styles.sectionWrap} ${styles.account}`}>
                <p className={`${styles.sectionTitle}`}>개인정보</p>
                <ul className={`${styles.sectionContent}`}>
                    <li>
                        <span className={`${styles.label}`}>회원가입</span>
                        <span className={`${styles.value}`}>[이메일가입] aaa@aaa.com</span>
                        <button className={`btn-type02 small ${styles.actionBtn}`}>비밀번호 수정</button>
                    </li>
                    <li>
                        <span className={`${styles.label}`}>전화번호</span>
                        <span className={`${styles.value}`}>02-2222-3333</span>
                        <button className={`btn-type02 small ${styles.actionBtn}`}>등록/수정</button>
                    </li>
                    <li>
                        <span className={`${styles.label}`}>기업 포트폴리오</span>
                        <span className={`${styles.value}`}>등록됨</span>
                        <button className={`btn-type02 small ${styles.actionBtn}`}>등록/수정</button>
                    </li>
                </ul>
            </div>
            <div className={`${styles.sectionWrap} ${styles.history}`}>
                <p className={`${styles.sectionTitle}`}>히스토리 관리</p>
                <div className={`${styles.sectionContent}`}>
                    <button className={`btn-type02`}>예약/상담 내역</button>
                    <button className={`btn-type02`}>1:1 상담 내역</button>
                    <button className={`btn-type02`}>결제내역</button>
                </div>
            </div>

        </div>
    )
}