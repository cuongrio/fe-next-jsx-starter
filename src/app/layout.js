import '../styles/style.scss';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--poppins-font',
});

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={poppins.className}>
      <head>
        <base href='/react/riode/demo-1/'></base>
        <title>Riode - React eCommerce Template</title>
        <link rel='icon' href='images/icons/favicon.png' />
      </head>
      <body>
        <div className='Container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
