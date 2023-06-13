import Seo from "@/components/Seo";
import React, {useEffect, useState} from "react";
import styles from "./notice.module.css";
import {UserAPIService} from "@/api/index";
import {Pagination} from "antd";

export interface ListProps {
    list: NoticeList[];
    pageSize: string;
    totalCount: number;
}
export interface  NoticeList {
    uid: number;
    createdAt: String;
    title: string;
    content: string;
    viewCount: number;
    topFlag: boolean;

}

export default function notice() {
    const [page, setPage] = useState(1);
    const [listData, setListData] = useState<ListProps | null>(null);

    useEffect(() => {
        const getNotice = async () => {
            try {
                // const {noticeList} = await UserAPIService.getNoticeList(page);
                // console.info('noticeList', noticeList);
                await UserAPIService.getNoticeList(page).then((result) => {
                    console.info('result', result)
                    setListData(result.data.data);
                })

            } catch (err) {
                console.error('err', err);
            }
        }
        getNotice();
    },[])
    return (
        <div>
            <Seo title="notice" />
            <p className={`section-title ${styles.sectionTitle}`}>공지사항</p>
            <div className="contentHeadArea">
                <div className="searchWrap">
                    <input type="text" className='inpSearch' placeholder="게시판 내 검색" />
                    {/*<Button>Search</Button>*/}
                    <div className='btnSearch'>검색</div>
                </div>
            </div>
            <div className={`contentWrap ${styles.tableWrap}`}>
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
                                <tr key={idx} className='sticky'>
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