import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAxios } from "../hooks/useAxios";
import { Quote } from "../models";
const RandomQuote = () => {
  const { isLoading, isError, dataSingleQuote, getRandomQuote } = useAxios();

  const [randomQuote, setRandomQuote] = useState<Quote>();

  const [sendRequest, setSendRequest] = useState<boolean>(false);
  const nav = useNavigate();

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    setRandomQuote(dataSingleQuote);
  }, [dataSingleQuote]);

  useEffect(() => {
    if (sendRequest) {
      setSendRequest(false);
      getRandomQuote();
      setRandomQuote(dataSingleQuote);
    }
  }, [sendRequest, dataSingleQuote, getRandomQuote]);

  return (
    <div className="random-quote-main">
      <div className="random-quote-content">
        <h3 className="mb bt">{randomQuote?.author}</h3>
        <p className="mr ml">{randomQuote?.content}</p>
      </div>
      <div className="btn-container-rq mt">
        <button
          onClick={() => setSendRequest(true)}
          className="btn-darkblue mt mb"
        >
          {" "}
          Get new quote !!
        </button>
        <button onClick={() => nav(-1)} className="btn-darkblue mt mb">
          Back
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
