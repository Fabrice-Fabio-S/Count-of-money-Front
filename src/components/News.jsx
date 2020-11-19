import { Card } from "react-bootstrap";
import "./News.css";

function News(props) {
  //   const news = [
  //     {
  //       id: 1,
  //       title: "News 1",
  //       img: "https://picsum.photos/200/300",
  //       body:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in augue et ex pharetra faucibus. Ut nec est sed ex pretium tristique. Sed ullamcorper lorem et tellus pretium porta. Proin vel pellentesque sapien, non laoreet nibh. Aenean tempus dui dui, in dictum odio cursus eget. Nullam nec maximus purus. Donec sed convallis massa. Etiam velit risus, laoreet a enim ut, pellentesque posuere dolor.",
  //       link: "#",
  //     },
  //     {
  //       id: 1,
  //       title: "News 2",
  //       img: "https://picsum.photos/200/300",
  //       body:
  //         "Ut blandit eget leo non sollicitudin. Aenean rutrum, quam non sodales interdum, felis velit tempor tellus, non consequat ex lectus vitae augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent a quam non turpis finibus suscipit sed eget ligula. Fusce efficitur blandit quam, in molestie dolor iaculis id. Nunc iaculis mi vel metus tincidunt, non vehicula mauris semper. Aliquam augue leo, pretium id risus ut, dapibus placerat arcu. Fusce tempus, ex et euismod mollis, ligula tellus eleifend arcu, ac hendrerit nisl erat sed odio. Donec ut ligula dapibus, pellentesque nunc dapibus, malesuada nunc. Donec porttitor tortor non massa varius, ac cursus lectus laoreet. Fusce dignissim dictum nisl, vitae maximus elit egestas a. Ut aliquet massa turpis, vel maximus ipsum fringilla sagittis. Aliquam consequat tempus mattis.",
  //       link: "#",
  //     },
  //     {
  //       id: 1,
  //       title: "News 3",
  //       img: "https://picsum.photos/200/300",
  //       body:
  //         "Phasellus sit amet tempor erat, a rutrum lacus. Sed pharetra nec massa vitae molestie. In hac habitasse platea dictumst. Aenean pellentesque scelerisque leo, in efficitur turpis porta sit amet. Suspendisse sit amet sapien augue. Vivamus augue nunc, mollis ac nunc id, sollicitudin sagittis massa. Vivamus mattis erat ac tellus congue laoreet. Mauris ut urna a enim tincidunt cursus. Proin sit amet luctus quam. Etiam vitae diam est. Duis ligula purus, facilisis eu lacinia in, porta vitae turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus eu massa tortor. Vestibulum vel orci sed augue luctus viverra.",
  //       link: "#",
  //     },
  //     {
  //       id: 1,
  //       title: "News 4",
  //       img: "https://picsum.photos/200/300",
  //       body:
  //         "Ut tempus egestas nulla, condimentum convallis diam tincidunt vitae. Donec efficitur, magna ut luctus aliquam, metus purus ullamcorper diam, id gravida turpis magna tempus erat. Fusce vel arcu quis arcu maximus varius. Vestibulum lobortis, lacus at vehicula laoreet, ligula lorem vestibulum lorem, accumsan pellentesque urna enim eu erat. Ut ut iaculis ipsum. Mauris euismod sollicitudin lacus vitae venenatis. Curabitur vehicula metus in laoreet volutpat. Etiam nibh ante, iaculis id sapien at, feugiat rutrum orci.",
  //       link: "#",
  //     },
  //     {
  //       id: 1,
  //       title: "News 5",
  //       img: "https://picsum.photos/200/300",
  //       body:
  //         "Aenean a maximus ipsum. Cras sit amet porttitor magna. Mauris sed mi quis leo tristique maximus. Duis non turpis scelerisque, blandit enim a, blandit velit. Donec sagittis lectus non urna consequat placerat. Integer ac velit tellus. Phasellus ac commodo purus, vel euismod enim. Mauris tortor nulla, pellentesque semper sodales hendrerit, dictum sit amet lectus.",
  //       link: "#",
  //     },
  //   ];

  return (
    <Card className="news">
      <Card.Header>
        <h3>Last Cryptocurrencies News</h3>
      </Card.Header>
      <div className="d-flex flex-wrap card-container">
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/320/200" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. sf sfs s qsdf qsdf qs qsf f sThis is a wider card with
              supporting text below as a natural lead-in to additional content.
              This content is a little bit longer. qdgqgThis is a wider card
              with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/320/200" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/320/200" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/320/200" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/320/200" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/320/200" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    </Card>
  );
}

export default News;
