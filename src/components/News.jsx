// import axios from "axios";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import RssParser from "rss-parser";
import moment from "moment";
import Spinner from "./Spinner/Spinner";

import "./News.css";

function News(props) {
  const [rssData, setRssData] = useState([]);
  const [rssIsLoaded, setRssIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let parser = new RssParser();
    const rssFeed = async () => {
      setIsLoading(true);
      let feed = await parser.parseURL(
        "https://cors-anywhere.herokuapp.com/https://cointelegraph.com/rss"
      );
      setRssData(feed);
      console.log(feed);
      setRssIsLoaded(true);
      setIsLoading(false);
    };
    rssFeed();
  }, []);

  return (
    <Card className="news">
      <Card.Header>
        <h2>{isLoading ? "Loading news..." : rssData.title}</h2>
      </Card.Header>
      <div className="d-flex flex-wrap card-container">
        {isLoading ? <Spinner /> : null}
        {rssIsLoaded
          ? rssData.items.slice(0, 6).map((item, i) => {
              return (
                <Card key={i}>
                  <Card.Img variant="top" src={item.enclosure.url} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.contentSnippet}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <p>
                        {item.categories
                          .map((cat, i) => {
                            return <span key={i}>{cat}</span>;
                          })
                          .reduce((prev, curr) => [prev, " - ", curr])}
                      </p>
                      {moment(item.pubDate).format("MMMM Do YYYY, h:mm:ss a")}
                    </small>
                  </Card.Footer>
                </Card>
              );
            })
          : null}
      </div>
    </Card>
  );
}

export default News;
