import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
import {useRouter} from "next/router";

export default function FooterNew() {
    const router = useRouter();
    return (
        <footer className={`footer-wrap ${router.pathname === '/' ? 'mainPage' : 'subPage'}`}>
            <div className={`footer-info-wrap`}>
                <div className={`footer-info`}>
                    <span>회사소개</span>
                    <span>이용약관</span>
                    <span>개인정보처리방침</span>
                </div>
            </div>
            <div className={`footer-top`}>
                <div className={`footer-text`}>(주)포부앤컴퍼니</div>
                <p className={`footer-text copy-right`}>Copyright. 2023 Fobu&Company All right reserved</p>
            </div>
            <div className={`footer-bottom`}>
                <div className={`footer-contact`}>
                    <p className={`footer-text`}>서울특별시 강남구 테헤란로 415, 218호</p>
                    <p className={`footer-text`}>대표이사: 이상진</p>
                    <p className={`footer-text`}>대표번호: 02-2222-2222</p>
                    <p className={`footer-text`}>이메일 : <a href="javascript:;" className={`footer-text`}>cfokorea@korea.co.kr</a></p>
                </div>
            </div>
        </footer>
    );
}