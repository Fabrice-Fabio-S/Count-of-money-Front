import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Spinner from "./Spinner/Spinner";

import "./News.css";

function News(props) {
  const [rssData, setRssData] = useState([]);
  const [rssIsLoaded, setRssIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfArticle, setNumberOfArticle] = useState(6);

  useEffect(() => {
    const rssFeed = async () => {
      setIsLoading(true);
      let feed = await axios.get(
        process.env.REACT_APP_BACK_API_URL + "/api/articles"
      );
      setRssData(feed.data);
      console.log(feed);
      setRssIsLoaded(true);
      setIsLoading(false);
    };
    rssFeed();
  }, []);

  const handleShowMore = () => {
    setNumberOfArticle(numberOfArticle + 6);
  };

  return (
    <Card className="news">
      <Card.Header>
        <h2>{isLoading ? "Loading news..." : rssData.title}</h2>
      </Card.Header>
      <div className="d-flex flex-wrap card-container">
        {isLoading ? <Spinner /> : null}
        {rssIsLoaded
          ? rssData.items.slice(0, numberOfArticle).map((item, i) => {
              return (
                <Card key={i}>
                  <Card.Img variant="top" src={item.enclosure.url} />
                  <Card.Body>
                    <Card.Title>
                      <Link
                        to={{
                          pathname: `/articles/${i}`,
                          state: { item: item },
                        }}
                      >
                        {item.title}
                      </Link>
                    </Card.Title>
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
                      {moment(item.pubDate).format("MMMM Do YYYY, h:mm a")}
                    </small>
                  </Card.Footer>
                </Card>
              );
            })
          : null}
      </div>
      <Card.Footer onClick={handleShowMore}>
        <span>Show more</span>
      </Card.Footer>
    </Card>
  );
}

export default News;
