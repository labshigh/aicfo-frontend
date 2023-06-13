import Seo from "@/components/Seo";
import mainCss from "./main.module.css";
import Image from "next/image";
import cat01 from "@/assets/ico/icons_main_category01.png";
import cat02 from "@/assets/ico/icons_main_category02.png";
import cat03 from "@/assets/ico/icons_main_category03.png";
import cat04 from "@/assets/ico/icons_main_category04.png";
import cat05 from "@/assets/ico/icons_main_category05.png";
import cat06 from "@/assets/ico/icons_main_category06.png";
import cat07 from "@/assets/ico/icons_main_category07.png";
import cat08 from "@/assets/ico/icons_main_category08.png";
import boxIco01 from "@/assets/ico/ico_boxitem01.png";
import boxIco02 from "@/assets/ico/ico_boxitem02.png";
import boxIco03 from "@/assets/ico/ico_boxitem03.png";
import boxIco04 from "@/assets/ico/ico_boxitem04.png";
import boxIco05 from "@/assets/ico/ico_boxitem05.png";
import {dummyData} from "../dummy/dummyData";
import CardType01 from "@/components/CardType01/CardType01";
import CardType02 from "@/components/CardType02/CardType02";
import dummyVideo from "@/assets/dummy/dummy_vid.png";
import Link from "next/link";

import ci_samsung from "@/assets/dummy/CI/CI_Samsung.png";
import ci_lg from "@/assets/dummy/CI/CI_LG.png";
import ci_hyundai from "@/assets/dummy/CI/CI_Hyndai.png";
import ci_nc from "@/assets/dummy/CI/NC Master CI_Navy gradient.png";
import ci_netmarble from "@/assets/dummy/CI/IC_netmarble.png";
import ci_visang from "@/assets/dummy/CI/CI_Visang.png";
import {inspect} from "util";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {userState} from "@/atoms";

export default function main() {
    const {dummyCard01, dummyCard02} = dummyData();
    const userInfo = useRecoilValue(userState);
    return (
        <div>
            <Seo title="main" />
            <div className={mainCss.mainVisual}>
                <div className={mainCss.dummyBox}></div>
                <div className={mainCss.btnList}>
                    <div className={mainCss.btnItem01}>
                        <p><span>1:1 문의</span><span className={`txt-small ${mainCss.visualTextBox}`}>대기중</span></p>
                    </div>
                    <div className={mainCss.btnItem02}>
                        <p>상담 글 쓰기<span className={`txt-small`}>(비공개 상담)</span></p>

                        {userInfo.isLoggedIn ? 'yes' : 'no'}

                    </div>
                    <div className={mainCss.btnItem03}>
                        <div className={mainCss.btnItem03Left}>
                            <p>빠른 상담 예약</p>
                            <span>(화상 / 전화 / 방문)</span>
                        </div>
                        {/*<div className={mainCss.btnItem03Right}>*/}
                        {/*    <div className={mainCss.radioGroup}>*/}
                        {/*        <input type="radio" id="contactChoice1"*/}
                        {/*               name="contact" value="wait"/>*/}
                        {/*        <label htmlFor="Choice1">대기중</label>*/}
                        {/*    </div>*/}
                        {/*    <div className={mainCss.radioGroup}>*/}
                        {/*        <input type="radio" id="contactChoice2"*/}
                        {/*               name="contact" value="ing"/>*/}
                        {/*        <label htmlFor="Choice2">상담중</label>*/}
                        {/*    </div>*/}
                        {/*    <div className={mainCss.radioGroup}>*/}
                        {/*        <input type="radio" id="contactChoice3"*/}
                        {/*               name="contact" value="no"/>*/}
                        {/*        <label htmlFor="Choice3">자리비움</label>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className={`${mainCss.sectionWh} ${mainCss.categoryList}`}>
                <div className={mainCss.categoryItem}>
                    <Image src={cat01} alt="category01"/>
                    <span>자금업무</span>
                </div>
                <div className={mainCss.categoryItem}>
                    <Image src={cat02} alt="category02"/>
                    <span>경영관리</span>
                </div>
                <div className={mainCss.categoryItem}>
                    <Image src={cat03} alt="category03"/>
                    <span>투자유치</span>
                </div>
                <div className={mainCss.categoryItem}>
                    <Image src={cat04} alt="category04"/>
                    <span>주주보고</span>
                </div>
                <div className={mainCss.categoryItem}>
                    <Image src={cat05} alt="category05"/>
                    <span>스톡옵션</span>
                </div>
                <div className={mainCss.categoryItem}>
                    <Image src={cat06} alt="category06"/>
                    <span>지분관리</span>
                </div>
                <div className={mainCss.categoryItem}>
                    <Image src={cat07} alt="category07"/>
                    <span>회계/세무</span>
                </div>
                <div className={mainCss.categoryItem}>
                    <Image src={cat08} alt="category08"/>
                    <span>예산관리</span>
                </div>
            </div>
            <div className={mainCss.sectionWh}>
                <div className={mainCss.sectionTitleWrap}>
                    <p className="section-title">AI CFO 분야별 상담 사례</p>
                    <p className="section-more">More {`>`}</p>
                </div>
                {dummyCard01.map((item, idx) =>
                    <CardType01 key={idx} {...item} />
                )}
            </div>


            <div className={`${mainCss.sectionWh} ${mainCss.categoryBoxList}`}>
                <div className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco01} alt="boxIco01"/>
                    <span>공지사항</span>
                </div>
                <div className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco02} alt="boxIco02"/>
                    <span>주요 IR 일정</span>
                </div>
                <div className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco03} alt="boxIco03"/>
                    <span>정부 지원 기금</span>
                </div>
                <div className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco04} alt="boxIco04"/>
                    <span>국내/해외 전시회</span>
                </div>
                <div className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco05} alt="boxIco05"/>
                    <span>파일 자료실</span>
                </div>
            </div>
            <div className={mainCss.section}>
                <div className={mainCss.sectionTitleWrap}>
                    <p className="section-title">주요 기업 CFO 서비스 이용 후기</p>
                    <p className="section-more">More {`>`}</p>
                </div>
                {dummyCard02.map((item, idx) =>
                    <CardType02 key={idx} {...item} />
                )}
            </div>
            <div className={mainCss.sectionWh}>
                <div className={mainCss.sectionTitleWrap}>
                    <p className="section-title">CFO가 알아야 할 기본 상식</p>
                    <p className="section-more">More {`>`}</p>
                </div>
                <div className={mainCss.videoWrap}>
                    <Image src={dummyVideo} alt="dummyVideo"/>
                    <Image src={dummyVideo} alt="dummyVideo"/>
                    <Image src={dummyVideo} alt="dummyVideo"/>
                </div>
                <div className={mainCss.sectionTableWrap}>
                    <div className={mainCss.sectionTableItemWrap}>
                        <div className={mainCss.sectionTitleWrap}>
                            <p className="section-title">공지</p>
                            <p className="section-more">+ 더보기</p>
                            <Link href='/board/notice'>aa</Link>
                        </div>
                        <table>
                            <tbody>
                                <tr className={mainCss.tableNotice}>
                                    <td className={mainCss.tableTitle}><Link href="/">[안내] 스테이킹 사용방법 및 유의사항</Link></td>
                                    <td className={mainCss.tableDate}>2023-05-21</td>
                                </tr>
                                <tr>
                                    <td className={mainCss.tableTitle}><Link href="/">[이벤트] 마티니풀 오픈이벤트</Link></td>
                                    <td className={mainCss.tableDate}>2023-05-21</td>
                                </tr>
                                <tr>
                                    <td className={mainCss.tableTitle}><Link href="/">[알림] 출금정책 및 내부 전송에 관해</Link></td>
                                    <td className={mainCss.tableDate}>2023-05-21</td>
                                </tr>
                                <tr>
                                    <td className={mainCss.tableTitle}><Link href="/">[알림] 출금정책 및 내부 전송에 관해</Link></td>
                                    <td className={mainCss.tableDate}>2023-05-21</td>
                                </tr>
                                <tr>
                                    <td className={mainCss.tableTitle}><Link href="/">[알림] 출금정책 및 내부 전송에 관해</Link></td>
                                    <td className={mainCss.tableDate}>2023-05-21</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={mainCss.sectionTableItemWrap}>
                        <div className={mainCss.sectionTitleWrap}>
                            <p className="section-title">이벤트</p>
                            <p className="section-more">+ 더보기</p>
                        </div>
                        <table>
                            <tbody>
                            <tr className={mainCss.tableNotice}>
                                <td className={mainCss.tableTitle}><Link href="/">[안내] 스테이킹 사용방법 및 유의사항</Link></td>
                                <td className={mainCss.tableDate}>2023-05-21</td>
                            </tr>
                            <tr>
                                <td className={mainCss.tableTitle}><Link href="/">[이벤트] 마티니풀 오픈이벤트</Link></td>
                                <td className={mainCss.tableDate}>2023-05-21</td>
                            </tr>
                            <tr>
                                <td className={mainCss.tableTitle}><Link href="/">[알림] 출금정책 및 내부 전송에 관해</Link></td>
                                <td className={mainCss.tableDate}>2023-05-21</td>
                            </tr>
                            <tr>
                                <td className={mainCss.tableTitle}><Link href="/">[알림] 출금정책 및 내부 전송에 관해</Link></td>
                                <td className={mainCss.tableDate}>2023-05-21</td>
                            </tr>
                            <tr>
                                <td className={mainCss.tableTitle}><Link href="/">[알림] 출금정책 및 내부 전송에 관해</Link></td>
                                <td className={mainCss.tableDate}>2023-05-21</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={`${mainCss.section} ${mainCss.companyList}`}>
                <Image src={ci_samsung} alt="samsung"/>
                <Image src={ci_lg} alt="lg"/>
                <Image src={ci_hyundai} alt="hyundai"/>
                <Image src={ci_nc} alt="nc"/>
                <Image src={ci_netmarble} alt="netmarble"/>
                <Image src={ci_visang} alt="visang"/>
            </div>
        </div>
    );
}