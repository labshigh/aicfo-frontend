import {AppProps} from "next/app";
import Layout from "@/components/Layout";
import "@/styles/global.css";
import "@/styles/reset.css";
import {SessionProvider} from "next-auth/react";;

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className="defaultBg">
            <Layout>
                <SessionProvider session={pageProps.session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </Layout>
        </div>);
}