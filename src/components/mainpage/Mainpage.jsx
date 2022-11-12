import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./mainpage.scss";
import { CardMedia } from "@material-ui/core";
import { useRef } from "react";
const Mainpage = (props) => {
  const ref = useRef(null);
  const ref1 = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const scrollButton = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
  };
  return (
    <div>
      <div
        style={{ borderTop: "1px solid #cbc9c9"}}
      ></div>
      <div className="main-container">
        <div className="inner-container">
          <div className="main-heading">
            <h1>New This Week</h1>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                marginTop: "2%",
                marginRight: "5%",
              }}
            >
              <i
                class="fa fa-arrow-circle-o-left"
                style={{
                  color: "lightgray",
                  marginRight: "69%",
                  fontSize: "200%",
                  cursor: "pointer",
                }}
                aria-hidden="true"
                onClick={() => scroll(-800)}
              ></i>
              <i
                class="fa fa-arrow-circle-o-right"
                style={{
                  color: "lightgray",
                  fontSize: "200%",
                  cursor: "pointer",
                }}
                aria-hidden="true"
                onClick={() => scroll(800)}
              ></i>
            </div>
          </div>
          <div
            className="img-container"
            style={{ borderRadius: "7%" }}
            ref={ref}
          >
            <ImageList
              sx={{ width: 1800, height: 360 }}
              rows={1}
              cols={3}
              rowHeight={350}
              gap={15}
            >
              {props.image.map((item) => (
                <ImageListItem key={item.image} sx={{ borderRadius: "50%" }}>
                  <div style={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={`${item.src}`}
                      sx={{ borderRadius: "5%" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        color: "white",
                        top: "5%",
                        left: "5%",
                        fontSize: "2em",
                        maxWidth: "50%",
                      }}
                    >{`${item.text}`}</div>
                    <button
                      style={{
                        position: "absolute",
                        color: "black",
                        backgroundColor: "white",
                        bottom: "10%",
                        left: "5%",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "8%",
                        width: "6em",
                        height: "2.5em",
                      }}
                    >
                      Show all
                    </button>
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div className="button-row">
            <div className="fixedButtons">
              <div className="tag-list">
                {props.fixedButtons.map((item) => (
                  <button
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      bottom: "10%",
                      left: "5%",
                      cursor: "pointer",
                      borderRadius: "30%",
                      fontSize: "1em",
                      marginRight: "1em",
                      height: "2em",
                      border: "1px solid lightgrey",
                    }}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
            <div
              style={{ borderLeft: "2px solid #cbc9c9", paddingLeft: "1.5%" }}
            ></div>
            <div className="scrollableButtons">
              <i
                class="fa fa-arrow-circle-o-left"
                style={{
                  color: "lightgray",
                  marginRight: "3%",
                  fontSize: "200%",
                  cursor: "pointer",
                }}
                aria-hidden="true"
                onClick={() => scrollButton(-500)}
              ></i>
              <div
                className="tag-list"
                ref={ref1}
                style={{
                  overflowX: "scroll",
                  overflowY: "hidden",
                  width: "100%",
                  display: "flex ",
                  marginRight: "3%",
                }}
              >
                {props.scrollableButtons.map((item) => (
                  <button
                    style={{
                      //   color: "black",
                      backgroundColor: "white",
                      bottom: "10%",
                      left: "5%",
                      cursor: "pointer",
                      borderRadius: "30%",
                      fontSize: "1em",
                      marginRight: "1em",
                      height: "2.3em",
                      maxWidth: "22em",
                      border: "1px solid lightgray",
                    }}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
              <i
                class="fa fa-arrow-circle-o-right"
                style={{
                  color: "lightgray",
                  fontSize: "200%",
                  cursor: "pointer",
                }}
                aria-hidden="true"
                onClick={() => scrollButton(500)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
