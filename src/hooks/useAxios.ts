import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { QuotesList, err, Quote } from "../models";

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<err>({
    error: false,
    status: null,
    statusText: "",
  });
  const urlRandom = "https://api.quotable.io/random";
  const url = "https://api.quotable.io/quotes";
  const [dataQuotes, setDataQuotes] = useState<QuotesList>();
  const [dataSingleQuote, setDataSingleQuote] = useState<Quote>();

  const getDataQuotes = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      const result: QuotesList = await response.data;
      setDataQuotes(result);
      setIsLoading(false);
    } catch (error) {
      console.log("THERE IS AN ERROR :", error);
      setIsError({ error: true, status: "", statusText: "ERROR..." });
    }
  };
  const getRandomQuote = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(urlRandom);
      const result: Quote = await response.data;
      setDataSingleQuote(result);
      setIsLoading(false);
    } catch (error) {
      console.log("THERE IS AN ERROR :", error);
      setIsError({ error: true, status: "", statusText: "ERROR..." });
    }
  };
  return {
    isLoading,
    isError,
    dataQuotes,
    getDataQuotes,
    getRandomQuote,
    dataSingleQuote,
  };
};

//todo vidi dali treba da returnas getDAtaQuotes ili e redundant
