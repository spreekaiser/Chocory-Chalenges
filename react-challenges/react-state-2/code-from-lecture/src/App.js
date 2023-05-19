import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import "./styles.css";

export default function App() {

  const [searchTerm, setSearchTerm] = useState('') 

  function handleSearch(term) {
    setSearchTerm(term)
    // console.log('handle search')
  }

  return (
    <main>
      <h1>Search</h1>
      <SearchForm onSearch={handleSearch} searchTerm={searchTerm}/>
      <SearchResults searchTerm={searchTerm}/>
    </main>
  );
}
