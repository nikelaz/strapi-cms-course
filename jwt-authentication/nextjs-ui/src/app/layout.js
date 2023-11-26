import './globals.css';
  
export const metadata = {
  title: 'Authentication with Strapi'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
