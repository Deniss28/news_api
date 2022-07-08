import axios from "axios";
import { useEffect, useState, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  // filtra los resultados
  useEffect(() => {
    const showResults = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API}`;

      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1)
    }
    showResults();
  }, [categoria])

  // estara pendiente cuando cambie el state de pagina
  useEffect(() => {
    const showResults = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API}`;

      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      // regresa a la pagina 1 cuando se cambia el state 
    }
    showResults();
  }, [pagina])


  const handleChangeCategory = e => {
    setCategoria(e.target.value);
  }
  // funcionamiento de paginador
  const handleChangePag = (e, valor) => {
    setPagina(valor);
  }

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategory,
        noticias,
        totalNoticias,
        handleChangePag,
        pagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export { NoticiasProvider }

export default NoticiasContext;