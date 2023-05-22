import Seo from "@/components/Seo";
import mainCss from "./main.module.css";
export default function main() {
    return (
        <div>
            <Seo title="main" />
            <div className={mainCss.mainVisual}>
                <div className={mainCss.dummyBox}></div>
                <div className={mainCss.btnList}>
                    <div className={mainCss.btnItem01}>
                        <p>빠른 상담 예약</p>
                        <span>(화상 / 전화 / 방문)</span>
                    </div>
                    <div className={mainCss.btnItem02}>
                        <span>상담 글 쓰기</span>
                        <span>(비공개 상담)</span>
                    </div>
                    <div className={mainCss.btnItem03}>
                        <div className={mainCss.btnItem03Left}>
                            <span>1:1 문의</span>
                        </div>
                        <div className={mainCss.btnItem03Right}>
                            <div className={mainCss.radioGroup}>
                                <input type="radio" id="contactChoice1"
                                       name="contact" value="wait"/>
                                <label htmlFor="Choice1">대기중</label>
                            </div>
                            <div className={mainCss.radioGroup}>
                                <input type="radio" id="contactChoice2"
                                       name="contact" value="ing"/>
                                <label htmlFor="Choice2">상담중</label>
                            </div>
                            <div className={mainCss.radioGroup}>
                                <input type="radio" id="contactChoice3"
                                       name="contact" value="no"/>
                                <label htmlFor="Choice3">자리비움</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={mainCss.sectionWh}></div>
        </div>
    );
}