import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export default function Layout({ children }) {
  return (
    <>
      <main className={`${montserrat.className} mx-32 my-12`}>{children}</main>
    </>
  )
}