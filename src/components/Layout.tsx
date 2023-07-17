import Header from "@/components/HeaderNew";
import Footer from "@/components/FooterNew";
import {Component} from "react";
import {useRouter} from "next/router";
import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
    // Your other props here.
}
export default function Layout({ children, ...props }: LayoutProps) {
    const router = useRouter();
    let classNm = '';
    if(router.pathname == '/mypage') {
        classNm = 'bgBlue';
    }
    return (
        <div className="fobu-wrap">
            <div className={`layer-wrap`}>
                <Header/>
                <div className={router.pathname === '/' ? `containerWrap main ${classNm}` : `containerWrap sub ${classNm}`}>{children}</div>
            </div>
            <Footer/>
        </div>
    );
}