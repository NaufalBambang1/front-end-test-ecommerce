import Slider from "react-slick";
import { useState } from "react";
import { Row, Navbar, Form, Stack, ListGroup, Carousel, Card, Col } from "react-bootstrap";
// icon
import { AiOutlineMobile, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//data
import { dataProduct } from "./data/dataproduct";
import { dataProduct2 } from "./data/dataproduct2";
import { dataLaptop } from "./data/datalaptop";
// image
import brandlogo from "./image/brandlogo.png";
import slide1 from "./image/slide1.webp";
import slide2 from "./image/slide2.webp";
import slide3 from "./image/slide3.webp";
import slide4 from "./image/slide4.webp";
import rfq from "./image/rfq.png";
import { dataRfq } from "./data/datarfq";
import googleplay from "./image/googleplay.png";
import lkpp from "./image/lkpp.png";
import Bela from "./image/Bela.png";
import idtPay from "./image/idtPay.png";

const App = () => {
  // Modal
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // Carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="wrap-header">
        <div className="top-header">
          <div className="container-custom">
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
            </div>
          </div>
        </div>
        <div className="container-custom">
          <Navbar className="navbar">
            <div className="brand-logo col-md-2">
              <img src={brandlogo}></img>
            </div>
            <Form className="d-flex search-bar col-md-6">
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
                <button onClick={toggleModal} className="btn-custom">
                  LOGIN / DAFTAR
                </button>
              </Stack>
            </div>
          </Navbar>
        </div>
        {/* <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h1>asda</h1>
          </div>
        </div> */}
        <div className="border-bottom">
          <div className="container-custom">
            <Row>
              <div className="col-md-3">
                <div className="panel-custom">
                  <div className="box-kategori">
                    <span>KATEGORI</span>
                  </div>
                </div>
                <div className="kategori-item">
                  <ListGroup variant="flush">
                    <ListGroup.Item action>Alat Berat</ListGroup.Item>
                    <ListGroup.Item action>Alat Elektronik</ListGroup.Item>
                    <ListGroup.Item action>Alat Industri</ListGroup.Item>
                    <ListGroup.Item action>Alat Mekanik dan Suku Cadang</ListGroup.Item>
                    <ListGroup.Item action>Alat Pelindung Diri</ListGroup.Item>
                    <ListGroup.Item action>Alat Ukur dan Survey</ListGroup.Item>
                    <ListGroup.Item action>Bahan Kimia</ListGroup.Item>
                    <ListGroup.Item action>Karet dan plastik</ListGroup.Item>
                    <ListGroup.Item action>Konstruksi dan Properti</ListGroup.Item>
                    <ListGroup.Item action>Lampu dan Aksesoris</ListGroup.Item>
                    <ListGroup.Item action>Mesin</ListGroup.Item>
                    <ListGroup.Item action>Perkakas</ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
              <div className="col-md-9">
                <Row>
                  <div className="col-md-4">
                    <div className="box active">
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
                    <img className="d-block carousel-item" src={slide4} alt="fouth slide" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <content>
        <div className="container-custom">
          <Row className="content-custom">
            <div className="col-md-5 ">
              <Card className="card-custom bg-secondary text-white">
                <Row>
                  <Card.Body>
                    <Row>
                      <div className="d-flex">
                        <Card.Img src={rfq} className="rfq-custom"></Card.Img>
                        <Card.Title className="m-1">Request For Quotation</Card.Title>
                      </div>
                    </Row>
                    <Card.Title>Satu Permintaan, Banyak penawaran</Card.Title>
                    <div className="d-flex spacing-text-title mt-5">
                      <Card.Title>5000+</Card.Title>
                      <Card.Title>80.000+</Card.Title>
                      <Card.Title>15.000+</Card.Title>
                    </div>
                    <div className="d-flex spacing-text">
                      <Card.Text>RFQ/Bulan</Card.Text>
                      <Card.Text>Suppliers</Card.Text>
                      <Card.Text className="ms-4">Kategori</Card.Text>
                    </div>
                    <button className="btn-pelajari"> Pelajari Lebih Lanjut</button>
                  </Card.Body>
                </Row>
              </Card>
            </div>
            <div className="col-md-7">
              <div className="border-permintaan">
                <ListGroup>
                  <ListGroup.Item>
                    <div className="d-flex d-block">
                      <span className="permintaan-custom">Permintaan Terbaru</span>
                      <a href="/" className="float-end link-permintaan">
                        Lihat semua permintaan
                      </a>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="permintaan-item">
                      <ListGroup variant="flush">
                        {dataRfq.map((item) => (
                          <ListGroup.Item>
                            <div className="d-flex">
                              <div>
                                <h6 className="font-item">{item.title}</h6>
                                <span className="font-item">{item.detail}</span>
                              </div>
                              <div className="left-date ms-auto">
                                <h6 className="font-item">
                                  <SlCalender /> Tanggal Dibuat:
                                </h6>
                                <p className="font-item">{item.start}</p>
                              </div>
                              <div className="border-between"></div>
                              <div className="right-date">
                                <h6 className="font-item">
                                  <SlCalender /> Tanggal Berakhir:
                                </h6>
                                <p className="font-item">{item.end}</p>
                              </div>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Row>
          <br />
          <br />
          <br />
          <h3 className="mt-5">Furniture</h3>
          <div className="border-bottom mb-5"></div>

          <Slider {...settings}>
            {dataProduct.map((product) => (
              <div className="product">
                <div className="product-img">
                  <img src={product.Image}></img>
                </div>
                <div className="product-title">
                  <p>{product.title}</p>
                </div>
                <div className="product-price">
                  <span>{product.price}</span>
                </div>
                <div className="product-seller">
                  <span> {product.seller}</span>
                </div>
                <div className="product-status">
                  <span>{product.status}</span>
                </div>
                <div className="product-location">
                  <div className="d-flex">
                    <span>
                      <GrLocation /> {product.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <h3 className="mt-5">Laptop</h3>
          <div className="border-bottom mb-5"></div>

          <Slider {...settings}>
            {dataLaptop.map((product) => (
              <div className="product">
                <div className="product-img">
                  <img src={product.Image}></img>
                </div>
                <div className="product-title">
                  <p>{product.title}</p>
                </div>
                <div className="product-price">
                  <span>{product.price}</span>
                </div>
                <div className="product-seller">
                  <span> {product.seller}</span>
                </div>
                <div className="product-status">
                  <span>{product.status}</span>
                </div>
                <div className="product-location">
                  <div className="d-flex">
                    <span>
                      <GrLocation /> {product.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="widget mt-5">
            <div className="widget-box">
              <div className="widget-item">
                <div className="d-flex d-block">
                  <span className="product-terbaru">PRODUK TERBARU INDONESIA</span>
                  <button className="float-end btn-product">LIHAT SEMUA</button>
                </div>
                <div className="border-title"></div>
                <Row xs={1} md={6} className="g-4">
                  {dataProduct2.map((product) => (
                    <Col>
                      <Card className="widget-custom">
                        <Card.Img src={product.Image}></Card.Img>
                        <Card.Body>
                          <p className="product-title">{product.title}</p>
                          <span className="product-price">{product.price}</span>
                          <span className="d-flex product-seller-widget">{product.seller}</span>
                          <span className="d-flex product-status">{product.status}</span>
                          <span className="d-flex product-location-widget">{product.location}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </content>
      <div className="mb-5"></div>
      <footer>
        <div className="footer">
          <div className="container-custom">
            <Row>
              <div className="col-md-4">
                <div className="footer-col">
                  <h4>B2B MARKETPLACE INDONESIA</h4>
                  <p>IndoTrading.com adalah B2B Marketplace dan Direktori Bisnis Supplier Terbesar di Indonesia.</p>
                  <p>Situs Jual Beli khusus B2B Marketplace, B2B E-commerce, B2B, Pusat Distributor, Trading, Supplier, Agen, Grosir, Importir, Exportir dan Penyedia Jasa terlengkap di Indonesia.</p>
                  <p>Segera Daftarkan perusahaan anda dan dapatkan akses ke informasi projek, tender dan dapatkan website gratis untuk perusahaan anda berjualan di Internet.</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-col">
                  <h4>INFORMASI</h4>
                  <div className="footer-link">
                    <a href="/">Hubungi Kami</a>
                    <a href="/">Indotrading FAQ</a>
                    <a href="/">Testimonial</a>
                    <a href="/">Karir</a>
                    <a href="/">Partners</a>
                    <a href="/">Event Indotrading</a>
                    <a href="/">Terms & Condition</a>
                    <a href="/">Privacy Policy</a>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-col">
                  <h4>BELI</h4>
                  <div className="footer-link">
                    <a href="/">Produk Terbaru</a>
                    <a href="/">Cara Belanja</a>
                    <a href="/">Daftar Pembeli</a>
                  </div>
                </div>
                <div className="footer-col">
                  <h4>JUAL</h4>
                  <div className="footer-link">
                    <a href="/">Perusahaan Terbaru</a>
                    <a href="/">Cari Proyek</a>
                    <a href="/">Daftar Jadi Supplier</a>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-col">
                  <h4>Our Service</h4>
                  <div className="footer-link">
                    <a href="/">Premium Supplier</a>
                    <a href="/">Premium Buyer</a>
                    <a href="/">SEO</a>
                    <a href="/">Google Ads</a>
                    <a href="/">Youtube Ads</a>
                    <a href="/">Social Media Ads</a>
                    <a href="/">Google Display Network</a>
                    <a href="/">Email Bisnis</a>
                    <a href="/">Buat website</a>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-col">
                  <h4>FOLLOW US</h4>
                  <div className="footer-link">
                    <a href="/">Produk Terbaru</a>
                  </div>
                </div>
                <div className="footer-col">
                  <h4>DOWNLOAD OUR APPS</h4>
                  <div className="footer-link">
                    <img src={googleplay} alt="google play"></img>
                  </div>
                </div>
                <div className="footer-col">
                  <h4>MITRA RESMI DARI</h4>
                  <div className="footer-link">
                    <img src={lkpp} alt="google play" className="footer-image"></img>
                    <img src={Bela} alt="google play" className="footer-image"></img>
                  </div>
                </div>
              </div>
            </Row>
            <div className="footer-language mt-5">
              <div className="d-flex justify-content-center gap-1">
                <a href="/" className="ind">
                  Indonesia
                </a>
                <div className="language-custom">
                  <a href="/">Jakarta</a>
                  <a href="/">Bali</a>
                  <a href="/">Bandung</a>
                  <a href="/">Semarang</a>
                  <a href="/">Surabaya</a>
                  <a href="/">Pontianak</a>
                  <a href="/">Samarinda</a>
                  <a href="/">Makassar</a>
                  <a href="/">Manado</a>
                  <a href="/">Palembang</a>
                  <a href="/">Medan</a>
                  <a href="/">Yogyakarta</a>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-1 footer-payment">
                <p>Bayar dengan</p>
                <img src={idtPay} alt="idtpay"></img>
                <p>untuk Transaksi aman & nyaman </p>
                <a href="/"> Pelajari Lebih Lanjut</a>
              </div>
              <div className="d-flex justify-content-center mt-3 footer-cr">
                <p>
                  <AiOutlineCopyrightCircle /> 2015-2022 Indotrading - Indonesia B2B Marketplace.All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
