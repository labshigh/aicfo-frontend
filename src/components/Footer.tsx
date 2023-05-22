import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="footer-area">
            <div className="footer-top">
                <Link href="/">회사소개</Link>
                <Link href="/">이용약관</Link>
                <Link href="/">개인정보처리방침</Link>
                <Link href="/">법적책임</Link>
                <Link href="/">운영정책</Link>
                <Link href="/">고객센터</Link>
            </div>
            <div className="footer-bottom">
                <div className="footer-left">
                    <div className="company-wrap">
                        <p className="txt-footer company-name">㈜씨에프오컴퍼니</p>
                        <p className="txt-footer company-info">
                            <span>서울시 성동구 성수동길 59번길 30 (성수지식타워 100호)</span>
                            <span>대표자 : 대한민국</span>
                            <span>대표번호 : 02-2222-2222</span>
                            <span>이메일 : cfokorea@korea.co.kr</span>
                        </p>
                    </div>
                </div>
                <div className="footer-right">
                    <Image src={logo} alt="logo"/>
                </div>
            </div>
        </footer>
    );
}