import Head from "next/head";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import BoxLayout from "../components/Content.layout";
import HeroComponent from "../components/Hero.component";
import ServicesComponent from "../components/Services.component";
import BuyProcessComponent from "../components/BuyProcess.component";
import ContactComponent from "../components/Contact.component";
import BlogComponent from "../components/Blog.component";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>AP Consulting</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <BoxLayout title="About Me">
          <HeroComponent />
        </BoxLayout>
        <BoxLayout title="Services">
          <ServicesComponent />
        </BoxLayout>
        <BoxLayout title="Buy Process">
          <BuyProcessComponent />
        </BoxLayout>
        <BoxLayout title="Contact">
          <ContactComponent />
        </BoxLayout>
        <BoxLayout title="Blog">
          <BlogComponent />
        </BoxLayout>
      </div>
    </ThemeProvider>
  );
}
