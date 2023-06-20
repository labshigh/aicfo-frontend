import Seo from "@/components/Seo";
import mainCss from "@/pages/main.module.css";
import Image from "next/image";
import cat01 from "@/assets/ico/icons_main_category01.png";
import cat02 from "@/assets/ico/icons_main_category02.png";
import cat03 from "@/assets/ico/icons_main_category03.png";
import cat04 from "@/assets/ico/icons_main_category04.png";
import cat05 from "@/assets/ico/icons_main_category05.png";
import cat06 from "@/assets/ico/icons_main_category06.png";
import cat07 from "@/assets/ico/icons_main_category07.png";
import cat08 from "@/assets/ico/icons_main_category08.png";
import CardType01 from "@/components/CardType01/CardType01";
import boxIco01 from "@/assets/ico/ico_boxitem01.png";
import boxIco02 from "@/assets/ico/ico_boxitem02.png";
import boxIco03 from "@/assets/ico/ico_boxitem03.png";
import boxIco04 from "@/assets/ico/ico_boxitem04.png";
import boxIco05 from "@/assets/ico/ico_boxitem05.png";
import CardType02 from "@/components/CardType02/CardType02";
import dummyVideo from "@/assets/dummy/dummy_vid.png";
import dummyVimeo01 from "@/assets/dummy/dummy_vimeo01.png";
import dummyVimeo02 from "@/assets/dummy/dummy_vimeo02.png";
import dummyVimeo03 from "@/assets/dummy/dummy_vimeo03.png";
import Link from "next/link";
import ci_samsung from "@/assets/dummy/CI/CI_Samsung.png";
import ci_lg from "@/assets/dummy/CI/CI_LG.png";
import ci_hyundai from "@/assets/dummy/CI/CI_Hyndai.png";
import ci_nc from "@/assets/dummy/CI/NC Master CI_Navy gradient.png";
import ci_netmarble from "@/assets/dummy/CI/IC_netmarble.png";
import ci_visang from "@/assets/dummy/CI/CI_Visang.png";
import {dummyData} from "@/dummy/dummyData";
import {useRecoilValue} from "recoil";
import {userState} from "@/atoms";

import circleReserve from "@/assets/ico/main/miain_circle_reserve_icon.png";
import circleWrite from "@/assets/ico/main/miain_circle_write_icon.png";
import circleQna from "@/assets/ico/main/miain_circle_qna_icon.png";
import React, {useEffect, useState} from "react";
import {UserAPIService} from "@/api";
import {useRouter} from "next/router";

export interface ListProps {
    list: NoticeList[];
    pageSize: string;
    totalCount: number;
}
export interface  NoticeList {
    uid: number;
    createdAt: string;
    title: string;
    content: string;
    viewCount: number;
    topFlag: boolean;
}

export interface EventListProps {
    list: EventList[];
    pageSize: string;
    totalCount: number;
}
export interface  EventList {
    uid: number;
    createdAt: string;
    title: string;
    content: string;
    viewCount: number;
    topFlag: boolean;
}

export default function mainPage() {
    const router = useRouter();
    const {dummyCard01, dummyCard02} = dummyData();
    const userInfo = useRecoilValue(userState);
    const [listData, setListData] = useState<ListProps | null>(null);
    const [eventListData, setEventListData] = useState<EventListProps | null>(null);

    useEffect(() => {
        const getNotice = async () => {
            try {
                // const {noticeList} = await UserAPIService.getNoticeList(page);
                // console.info('noticeList', noticeList);
                await UserAPIService.getBoardList(19, 1).then((result) => {
                    console.info('result', result)
                    setListData(result.data.data);
                })

            } catch (err) {
                console.error('err', err);
            }
        }
        getNotice();

        const getEvent = async () => {
            try {
                // const {noticeList} = await UserAPIService.getNoticeList(page);
                // console.info('noticeList', noticeList);
                await UserAPIService.getBoardList(20, 1).then((result) => {
                    console.info('result', result)
                    setEventListData(result.data.data);
                })

            } catch (err) {
                console.error('err', err);
            }
        }
        getEvent();
    },[])

    return (
        <div>
            <Seo title="main" />
            <div className={mainCss.mainVisual}>
                <div className={mainCss.dummyBox}></div>
                <div className={mainCss.btnList}>
                    <div className={mainCss.btnItem}>
                        <div className={`${mainCss.mainCircle} ${mainCss.reserve}`}>
                            <Image src={circleReserve} alt="icon"/>
                            <p className={`${mainCss.bigCircleTitle}`}>빠른 상담 예약</p>
                            <p className={`txt-small ${mainCss.bigCircleDesc}`}>(화상 / 전화 / 방문)</p>
                        </div>
                    </div>
                    <div className={mainCss.btnItem}>
                        <div className={`${mainCss.mainCircle} ${mainCss.write}`}>
                            <Image src={circleWrite} alt="icon"/>
                            <p className={`${mainCss.circleTitle}`}>상담 글 쓰기</p>
                            <p className={`txt-small ${mainCss.circleDesc}`}>(비공개 상담)</p>
                        </div>
                    </div>
                    <div className={mainCss.btnItem}>
                        <div className={`${mainCss.mainCircle} ${mainCss.qna}`}>
                            <Image src={circleQna} alt="icon"/>
                            <p className={`txt-small ${mainCss.circleDesc}`}>빠른 상담 예약</p>
                            <p className={`txt-small ${mainCss.circleDesc}`}>(대기중)</p>
                        </div>
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
                <Link href="/board/notice" className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco01} alt="boxIco01"/>
                    <span>공지사항</span>
                </Link>
                <Link href="/board/ir" className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco02} alt="boxIco02"/>
                    <span>주요 IR 일정</span>
                </Link>
                <Link href="/board/support" className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco03} alt="boxIco03"/>
                    <span>정부 지원 자금</span>
                </Link>
                <Link href="/board/conference" className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco04} alt="boxIco04"/>
                    <span>국내/해외 전시회</span>
                </Link>
                <Link href="/board/attachment" className={`${mainCss.categoryItem} ${mainCss.categoryBoxItem}`}>
                    <Image src={boxIco05} alt="boxIco05"/>
                    <span>파일 자료실</span>
                </Link>
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
                    <Image src={dummyVimeo01} alt="dummyVideo"/>
                    <Image src={dummyVimeo02} alt="dummyVideo"/>
                    <Image src={dummyVimeo03} alt="dummyVideo"/>
                </div>
                <div className={mainCss.sectionTableWrap}>
                    <div className={mainCss.sectionTableItemWrap}>
                        <div className={mainCss.sectionTitleWrap}>
                            <p className="section-title">공지</p>
                            <Link className="section-more" href='/board/notice'>+ 더보기</Link>
                        </div>
                        <table>
                            <tbody>
                            {
                                listData?.list.map((itm, idx) => {
                                    return (
                                        <tr key={idx} className={itm.topFlag ? `${mainCss.tableNotice}` : ''} onClick={()=>router.push('/board/notice/'+itm.uid)}>
                                            <td className={mainCss.tableTitle}>{itm.title}</td>
                                            <td className={mainCss.tableDate}>{new Date(itm.createdAt).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-') }</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className={mainCss.sectionTableItemWrap}>
                        <div className={mainCss.sectionTitleWrap}>
                            <p className="section-title">이벤트</p>
                            <Link className="section-more" href='/board/event'>+ 더보기</Link>
                        </div>
                        <table>
                            <tbody>

                            {
                                eventListData?.list.map((itm, idx) => {
                                    return (
                                        <tr key={idx} className={itm.topFlag ? `${mainCss.tableNotice}` : ''} onClick={()=>router.push('/board/notice/'+itm.uid)}>
                                            <td className={mainCss.tableTitle}>{itm.title}</td>
                                            <td className={mainCss.tableDate}>{new Date(itm.createdAt).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-') }</td>
                                        </tr>
                                    )
                                })
                            }
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
        )
}