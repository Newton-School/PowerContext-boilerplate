"use client"
import { PowerProvider } from '../contexts/PowerContext';
import '../styles/globals.css'; // Or your CSS file if different

function MyApp({ Component, pageProps }) {
    return (
        <PowerProvider>

            <Component {...pageProps} />
        </PowerProvider>
    );
}

export default MyApp;
