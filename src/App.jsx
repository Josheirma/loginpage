import Header from './header/header';
import Footer from './footer/footer';
import styles from './App.module.css';
function App() {
  return (
    <div className = {styles.container}>
    <div className= { styles.App}>
      <Header />
      <main className = { styles.title}>
        <p>Welcome to the main content!</p>
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default App;

