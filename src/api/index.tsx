import axiosInstance from "@/api/axiosInstance";


export const APIService = {
    async signUp(json: any) {
        const signUpData = axiosInstance.post('/signup', json).then(res => res);
        return signUpData;
    },
    async login(json: any) {
        const data = axiosInstance.post('/signin', json).then(res => res);
        return data;
    },
    // sms 인증요청
    async sendVerifySms(json: any) {
        const data = axiosInstance.post('/member/sendVerifySms', json).then(res => res);
        return data;
    },
    // sms 인증 확인
    async verifySms(json: any) {
        const data = axiosInstance.put('/member/verifySms', json).then(res => res);
        return data;
    },
    ///api/member
}

export const UserAPIService = {
    async getMember() {
        // const data = await api.get('/member').then(res => res);
        const data = axiosInstance.get('/member')

        return data;
    },
    async setToken(token: string) {
        const data =  axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
        // console.log(axiosInstance.defaults.headers.common);
    },
    async getBoardList(boardId = 19, pageNum: number = 1, searchValue="") {
        const noticeList = axiosInstance.get(`/board?boardTypeCommonCodeUid=${boardId}&page=${pageNum}`);
        return noticeList;
        //'/api/board?boardTypeCommonCodeUid=19&page=1&size=3'
    },
    async getBoardDetail(uid: any, boardId = 19) {
        const noticeDetail = axiosInstance.get(`/board/${uid}?boardTypeCommonCodeUid=${boardId}`);
        return noticeDetail;
        //'/api/board?boardTypeCommonCodeUid=19&page=1&size=3'
    },

}
