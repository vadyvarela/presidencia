import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
        </Head>
        <body className="Noto bg-gbsite">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}