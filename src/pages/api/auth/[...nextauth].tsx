import NextAuth from 'next-auth/next';
import { SessionProvider, getProviders, signIn } from 'next-auth/react';
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';

export default NextAuth({
    providers: [
        NaverProvider({
            clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        KakaoProvider({
            clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt(token, user, account, isNew) {

        }
    }
});