import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
import icoSearch from "@/assets/ico/ico_search.png";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {userState} from "@/atoms";
export default function Header() {
    const router = useRouter();
    const userInfo = useRecoilValue(userState);
    return (
        <div className="header-wrap">
            <div className="header-left">
                <Link href="/" className="logo-wrap">
                    <Image src={logo} alt="logo"/>
                </Link>
                <div className="search-wrap">
                    <input type="text" className="search txt-normal" placeholder="무엇을 해결할까요?"/>
                </div>
            </div>
            <div className="menu-wrap">
                <Link href="/" className={`consult`}></Link>
                <Link href="/account/login" className={`login`}></Link>
                {userInfo.isLoggedIn ? 'yes' : 'no'}
            </div>

        </div>
    );
}