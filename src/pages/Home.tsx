import { useEffect, useState } from "react";
import QuoteListMain from "../components/QuoteListMain";
import { useAxios } from "../hooks/useAxios";
import { QuotesList } from "../models";

const Home = () => {
  //TODO POD HEADER MAIN TABLE QUOTES OD COMPONENTA POSEBNA
  //quotes mesto random za 20 quotes
  const { isLoading, isError, dataQuotes, getDataQuotes } = useAxios();

  const [quotes, setQuotes] = useState<QuotesList>();
  useEffect(() => {
    getDataQuotes();
  }, []);
  useEffect(() => {
    setQuotes(dataQuotes);
  }, [dataQuotes, quotes]);

  console.log(quotes);

  return (
    <>
      <div className="home">
        <header>
          <h1 className="head-title">Welcome to Quote-Topia</h1>
        </header>
      </div>
      <QuoteListMain quotelist={quotes}></QuoteListMain>
    </>
  );
};

export default Home;
