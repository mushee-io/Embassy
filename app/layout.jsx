import './globals.css';

export const metadata = {
  title: 'Mushee Embassy',
  description: 'Premium community intelligence demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
