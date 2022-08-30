import Head from 'next/head'

type Props = {
  title: string
  keywords: string
  description: string
}

const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Hotels - Thailand',
  keywords: 'Hotel, Hotels, Travel, Hotel in Thailand, Travel Thailand',
  description: 'Hotels in Thailand.',
}

export default Meta