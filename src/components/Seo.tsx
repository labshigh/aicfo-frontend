import Head from "next/head";
import {Component} from "react";


export default class Seo extends Component<{ title: any }> {
    render() {
        let {title} = this.props;
        return (
            <Head>
                <title>{title} | AI CFO</title>
            </Head>
        );
    }
}