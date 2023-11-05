import './globals.css';

export const metadata = {
  title: 'Product Site'
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <main className="container mx-auto max-w-screen-sm">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
