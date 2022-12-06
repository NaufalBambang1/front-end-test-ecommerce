import { useState } from "react";
import { Container, Row, Navbar, Form, Stack, ListGroup, Carousel } from "react-bootstrap";
import brandlogo from "./image/brandlogo.png";
import slide1 from "./image/slide1.webp";
import slide2 from "./image/slide2.webp";
import slide3 from "./image/slide3.webp";
import slide4 from "./image/slide4.webp";
import { AiOutlineMobile } from "react-icons/ai";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="wrap-header">
        <div className="top-header">
          <Container>
            <div className="top-custom">
              <div className="left-side-header">
                <li>
                  <a href="/mobile">
                    <AiOutlineMobile /> Download Indotrading App
                  </a>
                </li>
              </div>
              <div className="right-side-header ms-auto">
                <li>
                  <a href="/penawaran">Minta penawaran</a>
                </li>
                <li>
                  <a href="/proyek">Cari Proyek</a>
                </li>
                <li>
                  <a href="/bantuan">Bantuan</a>
                </li>
                <li>
                  <a href="/hubungi">Hubungi Kami</a>
                </li>
                <li>
                  <a className="dropdown-toggle" href="/bahasa" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Indonesia
                  </a>
                </li>
              </div>
              <div className="cas"></div>
            </div>
          </Container>
        </div>
        <Container>
          <Navbar className="navbar">
            <div className="brand-logo col-md-3">
              <img src={brandlogo}></img>
            </div>

            <Form className="d-flex search-bar col-md-5">
              <input type="text" placeholder="Ketik Kebutuhan Anda" aria-label="Search" className="search-control" />
              <button className="btn-search">
                <FaSearch />
              </button>
            </Form>
            <div className="col-md-4">
              <Stack direction="horizontal" gap={4} className="stack-custom">
                <div className="cart-custom">
                  <FaShoppingCart />
                </div>
                <div className="vr" />
                <button className="btn-custom">LOGIN / DAFTAR</button>
              </Stack>
            </div>
          </Navbar>
        </Container>
        <div className="border-bottom">
          <Container>
            <Row>
              <div className="col-md-3">
                <div className="panel-custom">
                  <div className="box-kategori">
                    <span>KATEGORI</span>
                  </div>
                </div>
                <div className="kategori-item">
                  <ListGroup variant="flush">
                    <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
              <div className="col-md-9">
                <Row>
                  <div className="col-md-4">
                    <div className="box">
                      <a href="/produk" className="box-detail">
                        PRODUK
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box">
                      <a href="/perusahaan" className="box-detail">
                        PERUSAHAAN
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box">
                      <a href="/jasa" className="box-detail">
                        JASA
                      </a>
                    </div>
                  </div>
                </Row>
                <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-costum">
                  <Carousel.Item>
                    <img className="d-block carousel-item" src={slide1} alt="First slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block carousel-item" src={slide2} alt="Second slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block carousel-item" src={slide3} alt="Third slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block carousel-item" src={slide4} alt="Third slide" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Row>
          </Container>
          <h1>asd</h1>
        </div>
      </div>
    </>
  );
};

export default App;
