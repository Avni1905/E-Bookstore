import './App.css';
import Card from "./Pages/Card";
import BookDetail from './Pages/Bookdetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentForm from './Pages/PaymentForm';  // Import the payment form component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card
          title="Books"
          url="https://m.media-amazon.com/images/I/61H3BvN-naL._AC_UF1000,1000_QL80_.jpg"
          url1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOaMN0gii5k3brUHzJOSFr9zbk62NgwKiig&usqp=CAU"
          url2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZr4I2-zuI9ZVicR-uBxgbQTIHhAuaXgaMw&usqp=CAU"
          url3="https://m.media-amazon.com/images/I/81IKzzhY3kL._AC_UF1000,1000_QL80_.jpg"
          url4="https://m.media-amazon.com/images/I/5198Y5ZX+LL._AC_UF1000,1000_QL80_.jpg"
          url5="https://m.media-amazon.com/images/I/61+3fHdrKwL._AC_UF1000,1000_QL80_.jpg"
          url6="https://m.media-amazon.com/images/I/A1XE4R71AKL._AC_UF1000,1000_QL80_.jpg"
          url7="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg"
        />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/payment" element={<PaymentForm />} />  {/* Add payment form route */}
      </Routes>
    </Router>
  );
}

export default App;
