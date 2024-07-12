import React from "react";
import { AppProps } from "next/app";
import { Audiowide } from "next/font/google";
import "../styles/index.css";

const audiowide = Audiowide({
    weight:['400'],
    subsets: ["latin"],
    variable: "--audiowide",
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={audiowide.className}>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
