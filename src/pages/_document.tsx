import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from 'styled-components'
interface Props {
  styleTags: any
}
class MyDocument extends Document <Props> {
  static async getInitialProps({renderPage}: DocumentContext) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(
      // eslint-disable-next-line @typescript-eslint/naming-convention
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  
  }

  render() {
    return (
      <Html>
        <Head>
        {this.props.styleTags}
         <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
