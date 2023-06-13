import { atom } from "recoil";

export interface IUserState {
  isLoggedIn: boolean;
  info: UserInfo;
  account: Account[];
  current: string;
  showTempPopup: boolean;
}
export type Account = {
  address: string;
  coinId: number;
  createdAt: string;
  deletedFlag: boolean;
  mEth: number;
  memberUid: number;
  referrerCode: string;
  tokenId: number;
  uid: number;
  updatedAt: string;
  usedFlag: boolean;
};
export interface UserInfo {
  emailVerifiedFlag: boolean;
  juminFlag: boolean;
  codeFlag: boolean;
  usedFlag: boolean;
  memberUid: string;
  email: string;
  approveType: string;
  approveId: number;
  approveDate: string;
  referrerCode: string;
  walletId: number;
}

export const initUserInfo: UserInfo = {
  emailVerifiedFlag: false,
  juminFlag: false,
  codeFlag: false,
  usedFlag: false,
  memberUid: "",
  email: "",
  approveType: "",
  approveId: -1,
  approveDate: "",
  referrerCode: "",
  walletId: 0,
};

export const userState = atom<IUserState>({
  key: "userState",
  default: {
    isLoggedIn: false,
    info: initUserInfo,
    account: [],
    current: "",
    showTempPopup: true,
  },
});

export const myAssetState = atom({
  key: "myAssetState",
  default: {
    address: "",
    balance: 0,
    coinId: 0,
    symbol: "",
    tokenId: 0,
    type: "",
  },
});

export interface MEthInfo {
  address: string;
  coinId: number;
  mEth: number;
  memberUid: number;
  referrerCode: string;
  tokenId: number;
  uid: number;
}

export const initMEthInfo: MEthInfo = {
  address: "",
  coinId: 0,
  mEth: 0,
  memberUid: 0,
  referrerCode: "",
  tokenId: 0,
  uid: 0,
};

export const myMEthState = atom({
  key: "myMEthState",
  default: initMEthInfo,
});
