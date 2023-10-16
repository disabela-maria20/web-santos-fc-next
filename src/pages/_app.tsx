import { ModalProvider } from "@/context/Modal";
import "./../styles/globals.css";
import type { AppProps } from "next/app";

import { Modal } from "@/components/molecules";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Modal />
      <Component {...pageProps} />
    </ModalProvider>
  );
}
