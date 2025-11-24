import type { Metadata } from 'next';
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/molecules/navbar';
import Footer from '@/components/molecules/footer';
import MdNav from '@/components/molecules/mdNav';


const ibmPlexSans = IBM_Plex_Sans({
	variable: '--font-IBM_PLEX-sans',
	subsets: ['latin'],
});

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'my portfolio page',
	description: 'this displays my recent projects and blog posts',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' dark-theme='dark'>
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"></link>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable}antialiased`}
			>
				<Navbar />
				<MdNav />
				<div className='grow md:overflow-y-auto w-full min-h-screen py-8 font-ibm text-textColor'>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
