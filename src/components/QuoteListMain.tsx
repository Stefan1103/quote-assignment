import React from "react";
import { Link } from "react-router-dom";
import { Quote, QuotesList } from "../models";

interface Props {
  quotelist: QuotesList | undefined;
}

const QuoteListMain = ({ quotelist }: Props) => {
  return (
    <main className="main">
      <div className="main-table-title">
        <div className="grid-col-1 grid-flex">ID</div>
        <div className="grid-col-2 grid-flex">Quote</div>
        <div className="grid-col-3 grid-flex">Author</div>
        <div className="grid-col-4 grid-flex">Age</div>
      </div>

      {quotelist?.results.map((quote: Quote) => {
        const { _id, content, author } = quote;

        return (
          <div key={_id} className="main-row">
            <div className="grid-col-1 grid-flex">{_id}</div>
            <div className="grid-col-2 grid-flex">{content}</div>
            <div className="grid-col-3 grid-flex">{author}</div>
            <div className="grid-col-4 grid-flex">sdftgjh</div>
          </div>
        );
      })}
      <div className="btn-container">
        <Link to={"/randomQuote"} className="btn-darkblue mt mb">
          Get new quote!
        </Link>
      </div>
    </main>
  );
};

export default QuoteListMain;
