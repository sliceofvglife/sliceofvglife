import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./mainApp"), { ssr: false });

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <App>{children}</App>
        </>
    );
}
