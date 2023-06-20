import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {UserAPIService} from "@/api";
import Seo from "@/components/Seo";
import Link from "next/link";

export interface BoardDetail {
    title: string;
    content: string;
    createdAt: string;
    nextUid: number;
    prevUid: number;
    uid: number;
    fileList: any;
    viewCount: number;
    deletedFlag: boolean;
    usedFlag: boolean;
}
export default function detail() {

    const router = useRouter();
    const [boardDetailData, setBoardDetailData] = useState<BoardDetail | null>(null);

    const uid = router.query.uid;
    useEffect(() => {
        const getNotice = async () => {
            try {
                if(uid != undefined) {
                    console.info('uid', uid)
                    // const {noticeList} = await UserAPIService.getNoticeList(page);
                    // console.info('noticeList', noticeList);
                    await UserAPIService.getBoardDetail(uid, 19).then((result) => {
                        console.info('result', result.data)
                        if(result.data.status == 200) {
                            setBoardDetailData(result.data.data);
                        }

                    })
                }

            } catch (err) {
                console.error('err', err);
            }
        }
        getNotice();
    },[uid])
    console.info('boardDetailData', boardDetailData)

    return (
        <>
            {
                boardDetailData ?
                    <div className={`boardDetail`}>
                        <Seo title="noticeDetail" />
                        <p className={`detailTitle`}>{boardDetailData.title}</p>
                        <span className={`detailInfo`}>{new Date(boardDetailData.createdAt).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '.')  }</span><span className={`detailInfo line`}>조회수 {boardDetailData.viewCount}</span>
                        {boardDetailData.fileList ? <p className={`txt-normal attachment`}>첨부파일</p> : null}
                        <div className={`txt-normal detailContent`}>
                            {boardDetailData.content.replace('\n', '<br/>')}
                        </div>
                        <div className={`detailNav`}>
                            {
                                boardDetailData.nextUid > 0 &&
                                  <ul className={`nextPage`}>
                                    <li>다음글</li>
                                    <li>[공지] 서버점검 시간 안내</li>
                                    <li>1033</li>
                                  </ul>
                            }
                            {
                                boardDetailData.prevUid > 0 &&
                                  <ul className={`prevPage`}>
                                    <li>이전글</li>
                                    <li>[공지] 게시글 검색에 관한 유의사항</li>
                                    <li>1210</li>
                                  </ul>
                            }
                        </div>
                        <p className={`detailButtonWrap`}>
                            <Link href="/board/notice" className={`btn-type02 detailButton`}>목록으로</Link>
                        </p>

                    </div>
                    :
                    null
            }
        </>
    );
}