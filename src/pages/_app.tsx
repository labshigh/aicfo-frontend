import {AppProps} from "next/app";
import Layout from "@/components/Layout";
import "@/styles/global.css";
import "@/styles/reset.css";
import {SessionProvider} from "next-auth/react";;
import { RecoilRoot } from "recoil";

export default function App({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
        <div className="defaultBg">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
        </RecoilRoot>
    );
}