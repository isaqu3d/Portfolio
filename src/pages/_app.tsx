import { NextSeo } from "next-seo";
import seo from "../../nextseo.config";
import { Container } from "../components/Container";
import Layout from "../components/Layout";
import { Scroll } from "../components/Scroll";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <Scroll>
      <NextSeo {...seo} />
      <ThemeProvider>
        <Layout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Layout>
      </ThemeProvider>
    </Scroll>
  );
}

export default MyApp;
