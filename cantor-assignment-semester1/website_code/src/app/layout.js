/* The general layout for the whole website - will be on every page*/
import './global.css';
import Header from './components/header';
import Navbar from './components/navbar';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Header />
          <Navbar />
        </header>
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  );
}