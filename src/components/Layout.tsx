import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Component} from "react";
import {useRouter} from "next/router";
import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
    // Your other props here.
}
export default function Layout({ children, ...props }: LayoutProps) {
    const router = useRouter();
    return (
        <div className="wrap">
            <Header/>
            <div className={router.pathname === '/' ? 'containerWrap main' : 'containerWrap sub'}>{children}</div>
            <Footer/>
        </div>
    );
}