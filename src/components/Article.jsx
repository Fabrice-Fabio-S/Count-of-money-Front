import { Card } from "react-bootstrap";
import { withRouter } from "react-router";
import moment from "moment";
import "./Article.css";

const Article = (props) => {
  const item = props.location.state.item;
  console.log(item);
  return (
    <div className="article">
      <Card>
        <Card.Img variant="top" src={item.enclosure.url} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle>{item.creator}</Card.Subtitle>
          <Card.Text>{item.contentSnippet}</Card.Text>

          <Card.Link href={item.link} target="_blank">
            Show original article
          </Card.Link>
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
    </div>
  );
};

export default withRouter(Article);
