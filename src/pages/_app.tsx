import { ModalProvider } from "@/context/Modal";
import "./../styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";
import { Modal } from "@/components/molecules";

const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  display: "fallback",
  variable: "--font-roboto",
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Modal />
      <div className={`${font_roboto.variable}`}>
        <Component {...pageProps} />
      </div>
    </ModalProvider>
  );
}
