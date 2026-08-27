import './App.css';
import Header from './layouts/header/heeader.jsx';
import Footer from './layouts/footer/footer.jsx';
import HomePage from './main-page/HomePage/homepage.jsx';

function App() {
  console.log("Ap rendered");
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;