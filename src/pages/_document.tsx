import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='text-[12px] sm:text-[14px] md:text-[16px]'>
      <Head />
      <body className='relative bg-purple-900 '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
