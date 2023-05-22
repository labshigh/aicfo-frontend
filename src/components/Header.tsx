import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
import icoSearch from "@/assets/ico/ico_search.png";
export default function Header() {
    const router = useRouter();
    return (
        <div className="header-wrap">
            <div className="header-left">
                <Link href="/" className="logo-wrap">
                    <Image src={logo} alt="logo"/>
                </Link>
                <div className="search-wrap">
                    <input type="text" className="search" placeholder="Search"/>
                </div>
            </div>
            <div className="menu-wrap">
                <Link href="/account/login">로그인</Link>
                <Link href="/account/signup">가입</Link>
                <Link href="/">고객지원</Link>
            </div>

        </div>
    );
}