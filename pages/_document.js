import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Spotify App</title>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', color: 'white', height: '100%', backgroundColor: 'black', margin: '0'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
