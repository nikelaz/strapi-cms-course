import './globals.css';

export const metadata = {
  title: 'Strapi Blog with Metadata',
};

const RootLayout = ({ children }) => (
  <html lang="en" className="dark">
    <body>{children}</body>
  </html>
);

export default RootLayout;
