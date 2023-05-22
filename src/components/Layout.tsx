import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Component} from "react";

export default class Layout extends Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div className="wrap">
                <Header/>
                <div className='containerWrap'>{children}</div>
                <Footer/>
            </div>
        );
    }
}