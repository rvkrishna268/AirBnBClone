import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./topsellers.scss";
import { useRef } from "react";
import { CardMedia } from "@mui/material";

const Topsellers = (props) => {
  const ref2 = useRef(null);
  const len = props.topSellers.length;
  const scrollImages = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <div className="main-container">
        <div className="inner-container">
          <div className="main-heading">
            <h3 style={{ fontSize: "1.4em" }}>Top Sellers</h3>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                marginTop: "2%",
                width: "12em",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  marginRight: "1em",
                  border: "none",
                  backgroundColor: "white",
                  textDecoration: "underline",
                }}
              >
                Show {len}
              </button>
              <i
                class="fa fa-arrow-circle-o-left"
                style={{
                  color: "lightgray",
                  marginRight: "19%",
                  fontSize: "200%",
                  cursor: "pointer",
                }}
                aria-hidden="true"
                onClick={() => scrollImages(-1400)}
              ></i>
              <i
                class="fa fa-arrow-circle-o-right"
                style={{
                  color: "lightgray",
                  fontSize: "200%",
                  cursor: "pointer",
                }}
                aria-hidden="true"
                onClick={() => scrollImages(1400)}
              ></i>
            </div>
          </div>
          <div className="img-container" ref={ref2}>
            <ImageList
              sx={{ width: 2550, height: 360 }}
              rows={1}
              cols={12}
              rowHeight={300}
              gap={15}
            >
              {props.topSellers.map((item) => (
                <ImageListItem key={item.image} sx={{ borderRadius: "50%" }}>
                  {/* <img
                    src={`${item.Poster}`}
                    alt="img"
                    loading="lazy"
                    style={{ borderRadius: "2%", height:"50px" ,marginBottom:"5px" }}
                  /> */}
                  <div style={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={`${item.Poster}`}
                      sx={{ borderRadius: "5%" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        color: "white",
                        top: "5%",
                        right: "5%",
                        fontSize: "2em",
                        maxWidth: "50%",
                      }}
                    >{`${item.Heart}`}</div>
                  </div>

                  <div
                    className="first-line"
                    style={{
                      fontSize: "0.8em",
                      display: "flex",
                      marginBottom: "5px",
                    }}
                  >
                    <div className="rating-container">{`${item.Rating}`}</div>
                    <div className="country-container">{`${item.Country}`}</div>
                  </div>
                  <div
                    className="info-container"
                    style={{ marginBottom: "5px" }}
                  >{`${item.Title}`}</div>
                  <div
                    className="price-container"
                    style={{ fontWeight: "bold" }}
                  >{`${item.Price}`}</div>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topsellers;
