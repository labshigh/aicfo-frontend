import Seo from "@/components/Seo";
import React, {useEffect, useState} from "react";
import styles from "@/pages/board/board.module.css";
import {UserAPIService} from "@/api/index";
import {Pagination} from "antd";
import headerBg from "@/assets/bg/board/notice_header_bg.png";
import Image from "next/image";
import Link from "next/link";
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

export default function notice() {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [listData, setListData] = useState<ListProps | null>(null);

    useEffect(() => {
        const getNotice = async () => {
            try {
                // const {noticeList} = await UserAPIService.getNoticeList(page);
                // console.info('noticeList', noticeList);
                await UserAPIService.getBoardList(19, page).then((result) => {
                    console.info('result', result)
                    setListData(result.data.data);
                })

            } catch (err) {
                console.error('err', err);
            }
        }
        getNotice();
    },[])

    const move = (idx:number) => {
        router.push({
            pathname: "/board/"+idx,
            query: {
                uid: idx,
                pageId: 19,
            }
        })
    }
    return (
        <div>
            <Seo title="notice" />
            <div className={`boardHeaderWrap`}>
                <p className={`section-title ${styles.sectionTitle}`}>공지사항</p>
                <Image src={headerBg} alt=""/>
            </div>

            <div className="searchWrap">
                <select
                    className={`selectBox txt-normal`}
                    value={'a'}
                    // onChange={handleSelectChange}
                >
                    <option value="all">전체</option>
                    <option value="title">제목</option>
                    <option value="content">내용</option>
                </select>
                <input type="text" className='inpSearch' placeholder="게시판 내 검색" />
                {/*<Button>Search</Button>*/}
                <div className='btnSearch'>검색</div>
            </div>
            <div className={`boardContentWrap ${styles.tableWrap}`}>
                <table className='tableWrap notice'>
                    <colgroup>
                        <col width="10%"/>
                        <col width="65%"/>
                        <col width="15%"/>
                        <col width="10%"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th className='tdCenter'>No</th>
                        <th>제목</th>
                        <th className='tdCenter'>작성일</th>
                        <th className='tdCenter'>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        listData?.list.map((itm, idx) => {
                            return (
                                <tr key={idx} className={itm.topFlag ? `sticky` : ''} onClick={()=>router.push('/board/notice/'+itm.uid)}>
                                    <td className='tdCenter'>1</td>
                                    <td>{itm.title}</td>
                                    <td className='tdCenter'>{new Date(itm.createdAt).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-') }</td>
                                    <td className='tdCenter'>{itm.viewCount}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className={`paging`}>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={10} //default size of page
                        current={1}
                        onChange={(value)=>setPage(value)}
                        total={13} //total number of card data available
                    />
                </div>
            </div>

        </div>
    )
}