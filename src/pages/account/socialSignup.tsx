import Seo from "@/components/Seo";
import styles from "./signup.module.css";
import Link from "next/link";
import React, {useEffect, useState} from 'react';
import {APIService, UserAPIService} from "@/api/index";
import {useRouter} from "next/router";

import kakaoLogo from "@/assets/logo/Kakao_Logo.png";
import googleLogo from "@/assets/logo/Google_Logo.png";
import naverLogo from "@/assets/logo/NAVER_Logo.png";
import Image from "next/image";
import {useRecoilState} from "recoil";
import {userState} from "@/atoms";

export default function signup() {
    const router = useRouter();
    const [userStatus, setUserStatus] = useRecoilState(userState);

    const [allTerm, setAllTerm] = useState(false);
    const [signUp, setSignUp] = useState<any>({email: "", password: "", passwordRe: "", phoneNumber: "", phoneVerifiedFlag: false, certificationNum: "", certificationFlag: false, smsSendFlag: false, termsOfUse: false, privacyPolicy: false, personalInfoUse: false, userAgeVerification: false, emailVerifiedFlag: false, snsId: '', snsName: ''});

    useEffect(() => {
        setSignUp({
            ...signUp,
            email: router.query.email,
            snsId: router.query.id,
            snsName: router.query.snsName

        });
        console.info('signUp', router.query.email != undefined && router.query.email != '' )
        console.info('router', router);
    }, []);

    useEffect(() => {
        if(signUp.email === undefined) {
            alert('잘못된 접근입니다.');
            window.location.href="/";
        }
    }, [signUp]);

    async function signUpRequest() {
        try {
            const {signUpData} = await APIService.signUp(signUp);
            console.info('data', signUpData);
            if(signUpData.status === 200) {

                const {data} = await APIService.login({email: signUp.email, password: '', snsFlag:true});

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
                }

                alert('가입완료');
            } else {
                alert('가입 실패');
            }
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }
    // const signUpRequest = () => {
    //     alert();
    // }

    const changeData = (e: any) => {
        if(e.currentTarget.name === 'termsOfUse') {
            if(signUp.termsOfUse) {
                setAllTerm(false);
            } else if(!signUp.termsOfUse && signUp.privacyPolicy && signUp.personalInfoUse) {
                setAllTerm(true);
            }
            setSignUp({
                ...signUp,
                termsOfUse: signUp.termsOfUse ? false : true,
            })
        } else if(e.currentTarget.name === 'privacyPolice') {
            if(signUp.privacyPolicy) {
                setAllTerm(false);
            } else if(signUp.termsOfUse && !signUp.privacyPolicy && signUp.personalInfoUse) {
                setAllTerm(true);
            }
            setSignUp({
                ...signUp,
                privacyPolicy: signUp.privacyPolicy ? false : true,
            })
        } else if(e.currentTarget.name === 'privacyUsage') {
            if(signUp.personalInfoUse) {
                setAllTerm(false);
            }else if(signUp.termsOfUse && signUp.privacyPolicy && !signUp.personalInfoUse) {
                setAllTerm(true);
            }
            setSignUp({
                ...signUp,
                personalInfoUse: signUp.personalInfoUse ? false : true,
            })
        } else if(e.currentTarget.name === 'allTerms') {
            if (!allTerm) {
                setAllTerm(true);
                setSignUp({
                    ...signUp,
                    termsOfUse: true,
                    privacyPolicy: true,
                    personalInfoUse: true,
                })
            } else {

                setAllTerm(false);
                setSignUp({
                    ...signUp,
                    termsOfUse: false,
                    privacyPolicy: false,
                    personalInfoUse: false,
                })
            }
        } else if(e.currentTarget.name === 'verificationAge') {
            setSignUp({
                ...signUp,
                userAgeVerification: signUp.userAgeVerification ? false : true,
            })
            console.info(signUp.userAgeVerification)
        }

        console.info('signUp', signUp)

    }
    return (
        <div>
            <Seo title="main" />
            <p className={`section-title ${styles.sectionTitle}`}>AI CFO 간편 회원가입</p>
            <div className={styles.signupEmailWrap}>
                <div className={`${styles.socialSignupHeader}`}>
                    <Image src={signUp.snsName == 'kakao' ? kakaoLogo : signUp.snsName == 'google' ? googleLogo : naverLogo} alt='socialLogo' />
                    <p className={`txt-normal ${styles.socialSignupDesc}`}>소셜 계정으로 회원가입을 진행합니다.<br/>
                        약관동의 후 AI CFO 회원으로 가입됩니다.<br/>
                        이후, 소셜계정으로 간편로그인하세요</p>
                    <p className={`${styles.socialEmail}`}>{signUp.email}Sta*****@gmail.com</p>
                </div>

                <p>{signUp.snsName}</p>
                <p>{signUp.email}</p>
                <div className={`${styles.termWrap}`}>
                    <div className={`inpWrap ${styles.allTerm}`}>
                        <label htmlFor="inp_terms">약관동의</label>
                        <div className={`${styles.termItem}`}>
                            <input type="checkbox" id="inp_all_terms" onChange={changeData} name="allTerms" checked={allTerm}/>
                            <label htmlFor="inp_all_terms" className={`txt-normal`}>다음에 모두 동의합니다.</label>
                        </div>
                    </div>
                    <div className={`inpWrap ${styles.termItemWrap}`}>
                        <label></label>
                        <div className={styles.termGroup}>
                            <div className={styles.termItem}>
                                <input type="checkbox" id="inp_term01" name="termsOfUse" checked={signUp.termsOfUse} onChange={changeData} />
                                <label htmlFor="inp_term01" className={`txt-small`}>서비스 이용약관 동의 (필수)</label>
                            </div>
                            <div className={styles.termItem}>
                                <input type="checkbox" id="inp_term02" name="privacyPolice" checked={signUp.privacyPolicy} onChange={changeData}/>
                                <label htmlFor="inp_term02" className={`txt-small`}>개인정보 취급방침 동의 (필수)</label>
                            </div>
                            <div className={styles.termItem}>
                                <input type="checkbox" id="inp_term03" name="privacyUsage" checked={signUp.personalInfoUse} onChange={changeData}/>
                                <label htmlFor="inp_term03" className={`txt-small`}>개인정보 이용/수집 동의 (필수)</label>
                            </div>
                        </div>
                    </div>
                    <div className={`inpWrap`}>
                        <label htmlFor="inp_terms">이용자 연령 확인</label>
                        <div className={`${styles.termItem}`}>
                            <input type="checkbox" id="inp_age_terms" checked={signUp.userAgeVerification} name="verificationAge" onChange={changeData}/>
                            <label htmlFor="inp_age_terms" className={`txt-small ${styles.termAge}`}>만 14세 이상입니다. (필수)</label>
                        </div>
                    </div>
                    <div className={`inpWrap ${styles.btnSignup}`}>
                        {/*<button className={`btn-type01`} disabled={!signUp.certificationFlag || !signUp.personalInfoUse || !signUp.privacyPolicy || !signUp.termsOfUse || !signUp.userAgeVerification } onClick={signUpRequest}>회원가입</button>*/}
                        <button className={`btn-type01`} disabled={!signUp.personalInfoUse || !signUp.privacyPolicy || !signUp.termsOfUse || !signUp.userAgeVerification } onClick={signUpRequest}>회원가입</button>
                    </div>
                </div>

            </div>
        </div>
    );
}