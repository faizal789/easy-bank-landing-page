import Article from "./component/Article";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

function App() {
  return(
    <main className="box-border overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Content></Content>
      <Article></Article>
      <Footer></Footer>
    </main>
  )
}

export default App;
