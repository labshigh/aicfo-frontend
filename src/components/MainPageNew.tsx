import Seo from "@/components/Seo";
import mainCss from "@/pages/main.module.css";
import Image from "next/image";
import {dummyData} from "@/dummy/dummyData";
import {useRecoilValue} from "recoil";
import {userState} from "@/atoms";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import styles from "./main.module.css";

import firstBg from "@/assets/fobu/main/main_top_bg.png";
import firstBgCover from "@/assets/fobu/main/main_top_bg_cover.png";
import firstBgBottom from "@/assets/fobu/main/main_top_bg_bottom.png";
import firstCenter from "@/assets/fobu/main/main_top_center.png";

// second
import secondPerson from "@/assets/fobu/main/main_second_person.png";
import secondPersonBg from "@/assets/fobu/main/main_second_person_bg.png";
import secondQuoteTop from "@/assets/fobu/main/main_second_quote_top.png";
import secondQuoteBottom from "@/assets/fobu/main/main_second_quote_bottom.png";


// third
import thirdBg from "@/assets/fobu/main/main_third_bg.png";
import thirdContent from "@/assets/fobu/main/main_third_content.png";
import fourthConFirst from "@/assets/fobu/main/main_fourth_con_first.png";
import fourthConSecond from "@/assets/fobu/main/main_fourth_con_second.png";

//fifth
import fifthBgBottom from "@/assets/fobu/main/main_fifth_bg_bottom.png";
import fifthBg from "@/assets/fobu/main/main_fifth_bg.png";
import fifthBgVid from "@/assets/fobu/main/main_fifth_vid.png";

export default function mainPage() {
    const router = useRouter();
    const {dummyCard01, dummyCard02} = dummyData();
    const userInfo = useRecoilValue(userState);

    return (
        <div className={`fobu-main-page`}>
            <Seo title="main" />
            <div className={`${styles.firstWrap}`}>
                <Image className={`${styles.firstBgCover}`} src={firstBgCover} alt="" />
                <Image className={`${styles.firstBg}`} src={firstBg} alt="" />
                <Image className={`${styles.firstBgBottom}`} src={firstBgBottom} alt="" />
                <Image className={`${styles.firstCenter}`} src={firstCenter} alt="" />
                <p className={`${styles.firstText}`}>포부를 현실화하는 길을 제공하겠습니다.<br/>기업의 가치를 최우선으로 시장과 고객에게 선택받을 수 있는 최선의 경로를 만들고자 합니다.</p>
            </div>
            <div className={`${styles.secondWrap}`}>
                <div className={`${styles.seconfSubLeft}`}>
                    <Image className={`${styles.secondPerson}`} src={secondPerson} alt="" />
                    <Image className={`${styles.secondPersonBg}`} src={secondPersonBg} alt="" />
                </div>
                <div className={`${styles.seconfSubRight}`}>
                    <Image className={`${styles.secondQuoteTop}`} src={secondQuoteTop} alt="" />
                    <p className={`${styles.fontMedium}`}>기업의 재무 고민을 해결하고자 최선의<br/>경로를 선정해드리고자 합니다.</p>
                    <Image className={`${styles.secondQuoteBottom}`} src={secondQuoteBottom} alt="" />
                    <p className={`${styles.fontSmall}`}>모든 기업들은 각자의 현황,목표,환경에 따라 결정해야 할 요소들이 다르고 최적의 길이 다르기에<br/>이를 충분히 분석하고 외부 환경을 최대한 활용해 목표에 다다르는데  일조하고자 합니다.</p>
                </div>
            </div>
            <div className={`${styles.thirdWrap}`}>
                {/* <div className={`${styles.thirdBg}`}></div> */}
                <Image className={`${styles.thirdBg}`} src={thirdBg} alt=""/>
                <Image className={`${styles.thirdContent}`} src={thirdContent} alt=""/>
                <div className={`${styles.thirdTextWrap}`}>
                    <p className={`${styles.thirdTextTitle}`}>상담을 통해 귀사의 성공을 위한 경로의 동반자가 되겠습니다.</p>
                    <button className={`${styles.thirdTextButton}`}>상담 예약하러 가기</button>
                </div>
            </div>
            <div className={`${styles.fourthWrap}`}>
                <Image src={fourthConFirst} alt="" className={`${styles.fourthConFirst}`}/>
                <div className={`${styles.fourthConText}`}>
                    <p className={`${styles.fourthConTextTitle}`}>Best Solutuin for success</p>
                    <p className={`${styles.fourthConTextDesc}`}>고객사의 목표를 실현하기 위해<br/>계획을 수립하고 실행, 점검,<br/>자문 업무를 수행합니다.</p>
                    <button className={`${styles.fourthConTextButton}`}>View more {`>`}</button>
                </div>
                <Image src={fourthConSecond} alt="" className={`${styles.fourthConSecond}`}/>
            </div>
            <div className={`${styles.fifthhWrap}`}>
                {/* <Image className={`${styles.fifthBg}`} src={fifthBg} alt="" /> */}
                <div className={`${styles.fifthTextWrap}`}>
                    <p className={`${styles.fifthTextTitle}`}>We add up your balue</p>
                    <p className={`${styles.fifthTextDesc}`}>풍부하고 다양한 경험과 정보로 기업 재무 고민을 해결해드리겠습니다.</p>
                    <button className={`${styles.fifthTextBtn}`}>View more +</button>
                </div>
                <div className={`${styles.fifthBgWrap}`}>
                    <Image className={`${styles.fifthBgVid}`} src={fifthBgVid} alt="" />
                </div>
                <Image className={`${styles.fifthdBgBottom}`} src={fifthBgBottom} alt=""/>
            </div>
        </div>
        )
}