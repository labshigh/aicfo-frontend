import {useRouter} from "next/router";
import {useEffect} from "react";
import axios from 'axios';
import {APIService, UserAPIService} from "@/api";
import {useRecoilState} from "recoil";
import {userState} from "@/atoms";

interface KakaoLogin {
    code: string;
}
const kakaoLogin = () => {
    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            const code = router.query.code as string;
            getToken(code);
        }
    }, [router.isReady]);
    const [userStatus, setUserStatus] = useRecoilState(userState);
    const getToken = async(code: string) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/account/callback?state=NAVER_LOGIN&code=${code}`); // 스프링 API서버에 code값을 담아 로그인 요청
            if (res.data) {
                console.log(res.data);
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

                        const {data} = await APIService.login({email: res.data.data.email, password: '', snsFlag:true});

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
                        }

                        // 로그인 컨트롤러에서 로그인 처리 후 화면에서는 페이지 이동
                        router.push({pathname:'/'})
                    }
                    alert('인증완료');

                } else {
                    alert('인증실패');
                }
            }
        } catch (e:any) {
            alert(e.response.data.message);
            router.push({
                pathname: "/account/login",
            })
        }


    }
    return <></>;
}

export default kakaoLogin;