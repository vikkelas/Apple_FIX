import '@/styles/globals.sass'
import 'swiper/css';
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import store, {persister} from "@/redux/store";
import {PersistGate} from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persister}>
              <Component {...pageProps} />
          </PersistGate>
      </Provider>
  )
}
