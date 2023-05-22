import {AppProps} from "next/app";
import Layout from "@/components/Layout";
import "@/styles/global.css";
import "@/styles/reset.css";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className="defaultBg">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>);
}