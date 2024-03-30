import ErrorPageContent from "@/components/ErrorPageContent";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import stringsEn from "@/strings/stringsEn";
import stringsVi from "@/strings/stringsVi";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppContextType, AppProvider } from "@/context/AppContext";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps,
}: AppProps & { darkBackground: boolean }) {
  const router = useRouter();

  const localeInfo = router.asPath.slice(1, 3);

  const localeStrings = localeInfo === "vi" ? stringsVi : stringsEn;

  const initialContextValue: AppContextType = {
    strings: localeStrings,
    lang: localeInfo === "vi" ? "vi" : "en",
    darkmode: true,
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  if (pageProps.error) {
    return (
      <AppProvider initialState={initialContextValue}>
        <Layout darkBackground={pageProps.darkBackground}>
          <ErrorPageContent />
        </Layout>
      </AppProvider>
    );
  }

  return (
    <AppProvider initialState={initialContextValue}>
      <Layout darkBackground={pageProps.darkBackground}>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
