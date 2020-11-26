// import axios from "axios";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import RssParser from "rss-parser";
import moment from "moment";

import "./News.css";

function News(props) {
  const [rssData, setRssData] = useState([]);
  const [rssIsLoaded, setRssIsLoaded] = useState(false);

  useEffect(() => {
    let parser = new RssParser();
    const rssFeed = async () => {
      let feed = await parser.parseURL("https://cointelegraph.com/rss");
      setRssData(feed);
      console.log(feed);
      setRssIsLoaded(true);
    };
    rssFeed();
  }, []);

  return (
    <Card className="news">
      <Card.Header>
        <h3>Last Cryptocurrencies News - {rssData.title}</h3>
      </Card.Header>
      <div className="d-flex flex-wrap card-container">
        {rssIsLoaded
          ? rssData.items.slice(0, 6).map((item, i) => {
              return (
                <Card key={i}>
                  <Card.Img variant="top" src={rssData.image.url} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.contentSnippet}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
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
