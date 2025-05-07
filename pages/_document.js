import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-yhGg4ebU2nZDr+vVgN4OeYqvKvWojUUNLRyJ4+yo1cWTxGZkCJjsEzNj9UXBPnA3z8NxQ4RVbAHJ8RFvN9P4Yg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
