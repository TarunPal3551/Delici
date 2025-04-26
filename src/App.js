import { BrowserRouter as Router } from "react-router-dom";
import Routing from './routes';
import './assets/css/style.css';
import './assets/css/responsive.css';
// import 'react-floating-whatsapp/dist/style.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function App() {
  return (
    <>
      <Router>
        <Routing />
        {/* Floating WhatsApp icon globally */}
        <FloatingWhatsApp
          phoneNumber="919876543210"
          accountName="Delici Support"
          avatar="/assets/avatar.jpg"
          statusMessage="Typically replies within 5min"
          chatMessage="Hi there! 👋 How can we help you?"
          placeholder="Type your message..."
          notification={true}
          darkMode={false}
          allowClickAway={true}
          allowEsc={true}
        />
      </Router>

    </>
  );
}
