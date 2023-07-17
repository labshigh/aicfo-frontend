import { useRouter } from "next/router";
import Image from "next/image";
import logoBlack from "@/assets/fobu/logo/header_logo.png";
import logo from "@/assets/fobu/logo/header_logo_white.png";
import Link from "next/link";
import icoSearch from "@/assets/ico/ico_search.png";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {userState} from "@/atoms";
import { useLayoutEffect, useState } from "react";
export default function HeaderNew() {
    const router = useRouter();
    const userInfo = useRecoilValue(userState);
    console.info('userInfo', userInfo)

    const [loginFlag, setFLoginFlag] = useState(false);
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        const updateSize = () => {
            console.info(window.innerWidth)
            setSize(window.innerWidth);
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div className={`header-wrap ${router.pathname === '/' ? 'mainPage' : 'subPage'}`}>
            <div className={`logo-wrap`}>
                <Link href="/">
                    <Image src={router.pathname === '/' ? logo : logoBlack} alt="" />
                </Link>
            </div>
            <div className={`menu-wrap`}>
                <Link href="/" className={`header-text`}>Company</Link>
                <Link href="/" className={`header-text`}>Service</Link>
                <Link href="/" className={`header-text`}>Cousulting</Link>
                <Link href="/" className={`header-text`}>Information</Link>
            </div>
            {
                loginFlag ?
                    <div className={`user-wrap`}></div>
                    :
                    <div className={`login-wrap`}>
                        {/*<Link href="/account/login" className={`btn-login header-text`}>Login</Link>*/}
                        {/* <Link href="/" className={`btn-register`}>Register</Link> */}
                        {
                            userInfo.isLoggedIn ? <Link href="/mypage" className={`btn-login header-text`}></Link> : <Link href="/account/login" className={`btn-login header-text`}>Login</Link>
                        }
                    </div>
            }
        </div>
    );
}