import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from 'axios';
import {APIService, UserAPIService} from "@/api";
import {UserInfo, userState} from "@/atoms";
import {useRecoilState} from "recoil";

interface KakaoLogin {
    code: string;
}
const kakaoLogin = () => {
    const router = useRouter();
    const [loginInfo, setLoginInfo] = useState({email: "", password: ""});
    const [userStatus, setUserStatus] = useRecoilState(userState);
    useEffect(() => {
        if (router.isReady) {
            const code = router.query.code as string; // 카카오에서 query문자열로 넘겨준 로그인 code값 추출
            getToken(code);
        }
    }, [router.isReady]);
    const getToken = async(code: string) => {
        const kakaoLogin: KakaoLogin = {
            code
        };
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/account/callback?state=KAKAO_LOGIN&code=${kakaoLogin.code}`); // 스프링 API서버에 code값을 담아 로그인 요청
            console.info('resr', res)
            if (res.data) {
                if(res.data.status === 200) {
                    if(res.data.data.newFlag) {
                        // 신규가입
                        router.push({
                            pathname: "/account/socialSignup",
                            query: {
                                email: res.data.data.email,
                                id: res.data.data.id,
                                snsName: res.data.data.snsName,
                                nickname: res.data.data.nickname
                            }
                        })
                    } else {
                        try {
                            const {data} = await APIService.login({email: res.data.data.email, password: '', snsFlag:true});

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

                            alert('인증완료');
                            // 로그인 컨트롤러에서 로그인 처리 후 화면에서는 페이지 이동
                            router.push({pathname:'/'})
                        } catch (e) {
                            console.info('e', e);
                        }
                    }
                } else {
                    alert('인증실패');
                }
                window.close();
            }
        } catch (e:any) {
            console.info('e', e)
            alert(e.response.data.message);
            router.push({
                pathname: "/account/login",
            })
        }


    }
    return <></>;
}

export default kakaoLogin;