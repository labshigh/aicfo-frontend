import Seo from "@/components/Seo";
import styles from "./login.module.css";
import Link from "next/link";
import {useSession, signIn, signOut} from 'next-auth/react';
import React, {useEffect} from "react";


declare global {
    interface Window {
        naver: any;
    }
}

export default function login() {
    const {data: session} = useSession();
    if( session ) {
        console.info('yes')
    } else {
        console.info('no')
    }
    useEffect(() => {
        // initNaverLogin();
    })

    // const initNaverLogin = () => {
    //     const naverLogin = new window.naver.LoginWithNaverId({
    //         clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    //         callbackUrl: 'http://localhost:3000/account/login',
    //         isPopup: false,
    //         loginButton: { color: "green", type: 1, height: 60 },
    //         callbackHandle: true,
    //     });
    //     naverLogin.init();
    // };

    const naverLoginPopup = () => {
        let uri = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=NAVER_LOGIN&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}`;

        window.open(uri, "_black", "width=450, height=600");
    }

    const kakaoLoginPopup = () => {
        let uri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`;
        window.open(uri, "_black", "width=450, height=600");
    }

    const googleLoginPopup = () => {
        let uri = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}`;
        window.open(uri, "_black", "width=450, height=600");
    }

    if( session ) {
        console.info('yes', session)
    } else {
        console.info('no')
    }
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
                <button className={`btn-type01 ${styles.naver} ${styles.socialBtn}`} onClick={() => naverLoginPopup()}>네이버로 로그인</button>
                <button className={`btn-type01 ${styles.kakao} ${styles.socialBtn}`} onClick={() => kakaoLoginPopup()}>카카오로 로그인</button>
                <button className={`btn-type01 ${styles.google} ${styles.socialBtn}`} onClick={() => googleLoginPopup()}>구글로 로그인</button>

            </div>
            <div className={`txt-normal ${styles.infoWrap}`}>
                <Link href="/account/signup">회원가입</Link> 후, AI CFO 서비스를 이용해보세요.
            </div>
        </div>
    );
}