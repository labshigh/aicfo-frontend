import Seo from "@/components/Seo";
import styles from "./login.module.css";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {APIService, UserAPIService} from "@/api/index";
import { userState, UserInfo } from "@/atoms";
import { useRecoilState, useResetRecoilState } from "recoil";
import {useRouter} from "next/router";


declare global {
    interface Window {
        naver: any;
    }
}

export default function login() {
    const router = useRouter();
    const [loginInfo, setLoginInfo] = useState({email: "", password: "", snsFlag:false});
    const [userStatus, setUserStatus] = useRecoilState(userState);
    const reset = useResetRecoilState(userState);
    const changeData = (e: any) => {
        if (e.currentTarget.name === 'email') {
            setLoginInfo({
                ...loginInfo,
                email: e.currentTarget.value,
            })
            const emailPattern = '^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$';

        } else if(e.currentTarget.name === 'password') {
            setLoginInfo({
                ...loginInfo,
                password: e.currentTarget.value
            })
        }
    }

    const naverLoginPopup = () => {
        let uri = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=NAVER_LOGIN&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}`;
        // window.open(uri, "_black", "width=450, height=600");
        window.location.href=uri;
    }

    const kakaoLoginPopup = () => {
        let uri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`;
        // window.open(uri, "_black", "width=450, height=600");
        window.location.href=uri;
    }

    const googleLoginPopup = () => {
        let uri = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}`;
        // window.open(uri, "_black", "width=450, height=600");
        window.location.href=uri;
    }

    async function loginRequest() {
        console.info('loginInfo', loginInfo)
        try {
            const {data} = await APIService.login(loginInfo);

            console.info('data', data);
            if (data.data.jwtToken) {

                UserAPIService.setToken(data.data.jwtToken.accessToken);
                window.localStorage.setItem(
                    "access_token",
                    data.data.jwtToken.accessToken
                );
                window.localStorage.setItem(
                    "refresh_token",
                    data.data.jwtToken.refreshToken
                );
                setUserStatus((prevState) => {
                    return {
                        ...prevState,
                        isLoggedIn: true,
                        current: data.data.referrerCode,
                        showTempPopup: true,
                    };
                });
                // requestSubAccount();
                router.push({pathname:'/'})
            }

            // if(data.status === 200) {
            //     alert('로그인 완료');
            // } else {
            //     alert('로그인 실패');
            // }
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async function memberRequest() {
        try {
            const {data} = await UserAPIService.getMember();
            console.info('data22', data);
            if(data.status === 200) {
                alert('로그인 완료22');
            } else {
                alert('로그인 실패22');
            }
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    useEffect( () => {
        window.localStorage.setItem("access_token", "");
        window.localStorage.setItem("refresh_token", "");
        window.localStorage.setItem("current_referrer", "");
        reset();

    }, [reset]);
    return (
        <div>
            <Seo title="main" />
            <p className={`section-title ${styles.sectionTitle}`}>AI CFO 아이디 찾기</p>
            <div className={`inpWrap`}>
                <label htmlFor="inp_email">이메일</label>
                <input type="text" id="inp_email" className={`inpBox`} name="email" onChange={changeData}/>
            </div>
            <div className={`chkWrap ${styles.chkRemember}`}>
                <input type="checkbox" id="inp_remember"/>
                <label htmlFor="inp_remember" className={`txt-small`}>아이디 기억하기</label>
            </div>
            <div className={`inpWrap`}>
                <label htmlFor="inp_passwd">비밀번호</label>
                <input type="password" id="inp_passwd" className={`inpBox`} name="password" onChange={changeData}/>
            </div>
            <div className={styles.findWrap}>
                <Link href="/account/findpwd" className={`txt-small`}>비밀번호 찾기</Link> / <Link href="/account/findid" className={`txt-small`}>아이디 찾기</Link>
            </div>
            <button className={`btn-type01 ${styles.loginBtn}`} onClick={loginRequest}>로그인</button>
            <button className={`btn-type01 ${styles.loginBtn}`} onClick={memberRequest}>회원조회</button>
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