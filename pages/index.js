import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Media,
  Image,
  Card,
} from "react-bootstrap";

import MyNavbar from "components/my-navbar";
import Intro from "components/intro";
import ListItem from "components/list-item";
import GridItem from "components/grid-item";

export default function Home() {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <Row>
          <Col md="12">
            <Intro />
          </Col>
        </Row>

        <hr />

        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <ListItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">нүүр</a>
          {" | "}
          <a href="#">сургалт</a>
          {" | "}
          <a href="#">фэйсбүүк</a>
        </div>
      </footer>
    </Container>
  );
}
