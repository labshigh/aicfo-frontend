import {useRouter} from "next/router";
import {useEffect} from "react";
import axios from 'axios';

interface KakaoLogin {
    code: string;
}
const kakaoLogin = () => {
    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            const code = router.query.code as string;
            console.log(`code= ${code}`);
            getToken(code);
        }
    }, [router.isReady]);
    const getToken = async(code: string) => {

        const res = await axios.get('http://localhost:35100/api/account/callback?state=NAVER_LOGIN&code='+code); // 스프링 API서버에 code값을 담아 로그인 요청
        if (res.data) {
            console.log(res.data);
            console.info(res.data.status);
            if(res.data.status === 200) {
                alert('인증완료');
            } else {
                alert('인증실패');
            }
            window.close();
        }

    }
    return <></>;
}

export default kakaoLogin;