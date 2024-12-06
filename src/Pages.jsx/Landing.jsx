import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../assets/welcome-img.avif";
import { Card } from "react-bootstrap";
import feature1 from "../assets/f1.png";
import feature2 from "../assets/f2.jpeg";
import feature3 from "../assets/f3.jpeg";
function Landing() {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-5">
          <h3>
            Welcome to{" "}
            <span style={{ color: "rgb(0, 164, 230)" }}>Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }} className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            adipisci dolor, explicabo amet architecto culpa consectetur error
            aliquid aliquam, maiores at officia in iure alias, eligendi
            recusandae fuga iusto Tenetur nobis, nemo in optio veniam
            repudiandae et tempore aliquam necessitatibus natus corporis eum.
            Porro laborum ipsa, sapiente magnam sit dolor ducimus cumque
            accusantium nemo temporibus fuga tempora molestiae quas! Nostrum
            excepturi maxime asperiores nisi at quaerat, vero eum soluta
            molestiae deserunt doloremque voluptas in hic cum, esse doloribus
            repellat ullam minus molestias magni tempore eveniet est
            necessitatibus natus. Provident?
          </p>
          <Link to={"/home"} className="btn  btn-info">
            Get started <i style={{marginLeft:'8px'}} class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="col-lg-6  ">
          <img
            style={{ width: "550px" }}
            className="img-fluid ms-5"
            src={landingImg}
            alt=""
          />
        </div>
      </div>

      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{height:"200px" }} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  delectus laudantium
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{height:"200px" }} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  delectus laudantium
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{height:"200px" }} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  delectus laudantium
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="my-5 row  justify-content-center border rounded p-5">
          <div className="m-auto col-lg-5">
              <h3 style={{color:'rgb(0, 164, 230)'}} className="text-center">Simple Fast and Powerfull</h3>
              <p style={{textAlign:'justify'}}><span className="fs-5">Play Everything: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, doloremque. Maiores numquam nobis quasi nihil quas cupiditate reprehenderit unde, debitis quam, error culpa in quis aperiam mollitia impedit eaque veniam.</p>
              <p style={{textAlign:'justify'}}><span className="fs-5">Categorise Videos: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, doloremque. Maiores numquam nobis quasi nihil quas cupiditate reprehenderit unde, debitis quam, error culpa in quis aperiam mollitia impedit eaque veniam.</p>
              <p style={{textAlign:'justify'}}><span className="fs-5">Managing videos: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, doloremque. Maiores numquam nobis quasi nihil quas cupiditate reprehenderit unde, debitis quam, error culpa in quis aperiam mollitia impedit eaque veniam.</p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="100% " height="720" className="rounded " src="https://www.youtube.com/embed/_hhcA0-8Dt8" title="JAM | Final Part | Karikku | Comedy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullScreen></iframe>
          </div>
      </div>

    </div>
  );
}

export default Landing;
