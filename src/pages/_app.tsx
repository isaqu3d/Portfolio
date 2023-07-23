import "../styles/global.css";

import Layout from "@components/Layout";
import { Scroll } from "@components/Scroll";
import { ThemeProvider } from "@context/ThemeContext";
import { NextSeo } from "next-seo";

import seo from "../../nextseo.config";
function MyApp({ Component, pageProps }) {
  return (
    <Scroll>
      <NextSeo {...seo} />
      <ThemeProvider>
        <Layout>
          <div className="max-w-lg px-4">
            <Component {...pageProps} />
          </div>
        </Layout>
      </ThemeProvider>
    </Scroll>
  );
}

export default MyApp;
