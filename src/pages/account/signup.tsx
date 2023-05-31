import Seo from "@/components/Seo";
import styles from "./signup.module.css";
import Link from "next/link";
import React, { useState } from 'react';

export default function signup() {
    const [allTerm, setAllTerm] = useState(false);
    const [signUp, setSignUp] = useState<any>({email: "", password: "", passwordRe: "", mobile: "", certificationNum: "", certificationFlag: false, smsFlag: false, termsService: false, privacyPoliceFlag: false, privacyUsageFlag: false, verificationAgeFlag: false});
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [passPatternLength, setPassPatternLength] = useState(false);
    const [passPatternMix, setPassPatternMix] = useState(false);
    const [passPatternSpecial, setPassPatternSpecial] = useState(false);

    const changeSmsFlag = () => {
        setSignUp({
            ...signUp,
            smsFlag: signUp.smsFlag ? false : true
        })
    }

    const changeCertificationFlag = () => {
        setSignUp({
            ...signUp,
            certificationFlag: true
        })
    }

    const changeData = (e: any) => {
        if (e.currentTarget.name === 'email') {
            setSignUp({
                ...signUp,
                email: e.currentTarget.value
            })
            setCheckEmail(true);
            const emailPattern = '^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$';

        } else if(e.currentTarget.name === 'password') {
            setSignUp({
                ...signUp,
                password: e.currentTarget.value
            })

            // 비밀번호 유효성 검증

            const specialPattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

            if(e.currentTarget.value.length > 6 && e.currentTarget.value.length <= 16) {
                setPassPatternLength(true);
            } else {
                setPassPatternLength(false);
            }

            if (e.currentTarget.value.match(specialPattern)) {
                setPassPatternSpecial(true);
            } else {
                setPassPatternSpecial(false);
            }

            if(/[a-z]/gi.test(e.currentTarget.value) && /[0-9]/g.test(e.currentTarget.value)) {
                setPassPatternMix(true);
            } else {
                setPassPatternMix(false);
            }



            // 비밀번호와 비밀번호 재확인이 같은지 체크
            if(signUp.passwordRe === e.currentTarget.value) {
                setCheckPassword(true);
            } else {
                setCheckPassword(false);
            }
        } else if(e.currentTarget.name === 'passwordRe') {
            setSignUp({
                ...signUp,
                passwordRe: e.currentTarget.value
            })
            if(signUp.password === e.currentTarget.value) {
                setCheckPassword(true);
            } else {
                setCheckPassword(false);
            }
        } else if(e.currentTarget.name === 'mobile') {
            setSignUp({
                ...signUp,
                mobile: e.currentTarget.value
            })

        } else if(e.currentTarget.name === 'certificationNum') {
            setSignUp({
                ...signUp,
                certificationNum: e.currentTarget.value,
                certificationFlag: true
            })

        } else if(e.currentTarget.name === 'smsFlag') {
            setSignUp({
                ...signUp,
                smsFlag: signUp.smsFlag ? false : true
            })
        } else if(e.currentTarget.name === 'termsService') {
            if(signUp.termsService) {
                setAllTerm(false);
            } else if(!signUp.termsService && signUp.privacyPoliceFlag && signUp.privacyUsageFlag) {
                setAllTerm(true);
            }
            setSignUp({
                ...signUp,
                termsService: signUp.termsService ? false : true,
            })
        } else if(e.currentTarget.name === 'privacyPolice') {
            if(signUp.privacyPoliceFlag) {
                setAllTerm(false);
            } else if(signUp.termsService && !signUp.privacyPoliceFlag && signUp.privacyUsageFlag) {
                setAllTerm(true);
            }
            setSignUp({
                ...signUp,
                privacyPoliceFlag: signUp.privacyPoliceFlag ? false : true,
            })
        } else if(e.currentTarget.name === 'privacyUsage') {
            if(signUp.privacyUsageFlag) {
                setAllTerm(false);
            }else if(signUp.termsService && signUp.privacyPoliceFlag && !signUp.privacyUsageFlag) {
                setAllTerm(true);
            }
            setSignUp({
                ...signUp,
                privacyUsageFlag: signUp.privacyUsageFlag ? false : true,
            })
        } else if(e.currentTarget.name === 'allTerms') {
            if (!allTerm) {
                setAllTerm(true);
                setSignUp({
                    ...signUp,
                    termsService: true,
                    privacyPoliceFlag: true,
                    privacyUsageFlag: true,
                })
            } else {

                setAllTerm(false);
                setSignUp({
                    ...signUp,
                    termsService: false,
                    privacyPoliceFlag: false,
                    privacyUsageFlag: false,
                })
            }
        } else if(e.currentTarget.name === 'verificationAge') {
            setSignUp({
                ...signUp,
                verificationAgeFlag: signUp.verificationAgeFlag ? false : true,
            })
            console.info(signUp.verificationAgeFlag)
        }

        console.info('signUp', signUp)

    }
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
                    <input type="text" id="inp_email" className={`inpBox`} value={signUp.email} name="email" onChange={changeData}/>
                </div>
                {
                    checkEmail && <p className={`txt-small ${styles.signupDesc}`}>가입 가능한 이메일입니다.</p>
                }
                <div className={`inpWrap`}>
                    <label htmlFor="inp_passwd">비밀번호</label>
                    <input type="password" id="inp_passwd" className={`inpBox`}value={signUp.password} name="password" onChange={changeData}/>
                </div>
                <p className={passPatternLength ? `${styles.checkPattern} ${styles.passPattern}` : `${styles.checkPattern} ${styles.failPattern}`}>6~16자 이내</p>
                <p className={passPatternMix ? `${styles.checkPattern} ${styles.passPattern}` : `${styles.checkPattern} ${styles.failPattern}`}>영문 그리고 숫자</p>
                <p className={passPatternSpecial ? `${styles.checkPattern} ${styles.passPattern}` : `${styles.checkPattern} ${styles.failPattern}`}>괄호 안 특수문자 1개 이상(!@#$%)</p>

                <div className={`inpWrap`}>
                    <label htmlFor="inp_passwd_re">비밀번호 재확인</label>
                    <input type="password" id="inp_passwd_re" className={`inpBox`}value={signUp.passwordRe} name="passwordRe" onChange={changeData}/>
                </div>
                {
                    signUp.passwordRe === '' && signUp.password === '' ? '' :
                        checkPassword ?
                                <p className={`txt-small ${styles.signupDesc}`}>입력하신 비밀번호가 일치합니다.</p> : <p className={`txt-small ${styles.signupDescFail}`}>입력하신 비밀번호가 일치하지 않습니다.</p>
                }
                <div className={`inpWrap`}>
                    <label htmlFor="inp_phone">전화번호 인증하기</label>
                    <input type="text" id="inp_phone" className={`inpBox`}value={signUp.mobile} name="mobile" onChange={changeData} disabled={signUp.certificationFlag}/>
                    <button className={`btn-type01 certification-type`} disabled={signUp.certificationFlag}>인증번호 발송</button>
                </div>
                {
                    signUp.mobile.length > 0 &&
                        <p className={`txt-small ${styles.signupDesc}`}>발송된 인증번호를 입력하시고 인증 버튼을 클릭해주세요.</p>
                }
                {
                    !signUp.certificationFlag &&
                  <div className={`inpWrap ${styles.smsWrap}`}>
                    <label htmlFor="inp_certification"></label>
                    <input type="text" id="inp_certification" className={`inpBox`}value={signUp.certificationNum} name="certificationNum" onChange={changeData}/>
                    <button className={`btn-type01 certification-type`} onClick={changeCertificationFlag}>인증</button>
                  </div>
                }
                {
                    signUp.certificationFlag &&
                    <p>인증되었습니다.</p>
                }
                <div className={`inpWrap ${styles.smsWrap}`}>
                    <label htmlFor="inp_certification">안내문자 수신</label>
                    <div className={`${styles.customSwitch}`}>
                        <input role="switch" type="checkbox" className="sticky" name="smsFlag" checked={signUp.smsFlag} onChange={changeData} />
                    </div>
                </div>
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
                            <input type="checkbox" id="inp_term01" name="termsService" checked={signUp.termsService} onChange={changeData} />
                            <label htmlFor="inp_term01" className={`txt-small`}>서비스 이용약관 동의 (필수)</label>
                        </div>
                        <div className={styles.termItem}>
                            <input type="checkbox" id="inp_term02" name="privacyPolice" checked={signUp.privacyPoliceFlag} onChange={changeData}/>
                            <label htmlFor="inp_term02" className={`txt-small`}>개인정보 취급방침 동의 (필수)</label>
                        </div>
                        <div className={styles.termItem}>
                            <input type="checkbox" id="inp_term03" name="privacyUsage" checked={signUp.privacyUsageFlag} onChange={changeData}/>
                            <label htmlFor="inp_term03" className={`txt-small`}>개인정보 이용/수집 동의 (필수)</label>
                        </div>
                    </div>
                </div>
                <div className={`inpWrap`}>
                    <label htmlFor="inp_terms">이용자 연령 확인</label>
                    <div className={`${styles.termItem}`}>
                        <input type="checkbox" id="inp_age_terms" checked={signUp.verificationAgeFlag} name="verificationAge" onChange={changeData}/>
                        <label htmlFor="inp_age_terms" className={`txt-small ${styles.termAge}`}>만 14세 이상입니다. (필수)</label>
                    </div>
                </div>
                <div className={`inpWrap ${styles.btnSignup}`}>
                    <button className={`btn-type01`} disabled={!signUp.certificationFlag || !signUp.privacyUsageFlag || !signUp.privacyPoliceFlag || !signUp.termsService || !signUp.verificationAgeFlag || !checkEmail || !checkPassword}>회원가입</button>
                </div>
            </div>
        </div>
    );
}