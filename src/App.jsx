import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  
  const img ="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
  return (
    <div className="App">
      <Header titulo="Galeria de Imagenes con React"></Header>
      <Cards
        src= {img}
        titulo="Probando imagen"
        descripcion="Hermosa fotografia"
      ></Cards>
      <Cards
        src={img}
        titulo="Probando imagen"
        descripcion="Hermosa fotografia"
      ></Cards>
      <Cards
        src={img}
        titulo="Probando imagen"
        descripcion="Hermosa fotografia"
      ></Cards>
      <Cards
        src={img}
        titulo="Probando imagen"
        descripcion="Hermosa fotografia"
      ></Cards>
      <Footer pie="Galeria de diversas imagenes"></Footer>
    </div>
  );
}

export default App;
