import Head from "next/head";
import styles from "../styles/Home.module.css";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Box from "../components/Content.layout";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Head>
          <title>Alejandra Palacio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box title="About Me">hola</Box>
        <Box title="Services">hola</Box>
        <Box title="Buy Process">hola</Box>
        <Box title="Contact">hola</Box>
        <Box title="Blog">hola</Box>
      </div>
    </ThemeProvider>
  );
}
