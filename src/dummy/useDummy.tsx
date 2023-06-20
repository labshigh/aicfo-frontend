import {NoticeList} from "@/pages/board/attachment";

export const useDummy = () => {
    const dummyList = [
        {
            id: 0,
            title: '첫번째 제목',
            content: '첫번째 내용',
            date: '2023-06-12'
        },
        {
            id: 1,
            title: '두번째 제목',
            content: '두번째 내용',
            date: '2023-06-18'
        },
        {
            id: 2,
            title: '세번째 제목',
            content: '세번째 내용',
            date: '2023-06-21'
        }
    ];

    const dummyFileBoardList = {
        list: [
            {
                uid: 0,
                createdAt: '2023-02-04',
                title: '[알림] AI CFO 이용방법 안내',
                content: '[알림] AI CFO 이용방법 안내',
                viewCount: 23,
                topFlag: true
            },
            {
                uid: 1,
                createdAt: '2023-05-12',
                title: '[공지] 출석 이벤트 안내',
                content: '[공지] 출석 이벤트 안내',
                viewCount: 61,
                topFlag: true
            },
            {
                uid: 2,
                createdAt: '2023-06-24',
                title: '[공지] 서버 점검 시간 공지',
                content: '[공지] 서버 점검 시간 공지',
                viewCount: 13,
                topFlag: true
            },
            {
                uid: 3,
                createdAt: '2023-06-17',
                title: '[공지] AI CFO 개인정보 이용수칙',
                content: '[공지] AI CFO 개인정보 이용수칙',
                viewCount: 81,
                topFlag: false
            }
        ],
        pageSize: 10,
        totalCount: 4
    }

    const dummyEventBoardList = {
        list: [
            {
                uid: 0,
                createdAt: '2023-05-12',
                title: '[공지] 출석 이벤트 안내',
                content: '[공지] 출석 이벤트 안내',
                viewCount: 161,
                topFlag: true
            },
            {
                uid: 1,
                createdAt: '2023-01-24',
                title: '[공지] 1차 사전알림 이벤트 당첨자 안내',
                content: '[공지] 1차 사전알림 이벤트 당첨자 안내',
                viewCount: 133,
                topFlag: true
            },
            {
                uid: 2,
                createdAt: '2023-06-17',
                title: '[알림] 12차 고객 감사 이벤트 안내',
                content: '[알림] 12차 고객 감사 이벤트 안내',
                viewCount: 81,
                topFlag: false
            }
        ],
        pageSize: 10,
        totalCount: 3
    }

    return {dummyList, dummyFileBoardList, dummyEventBoardList};
}