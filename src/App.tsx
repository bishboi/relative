import "./App.css";
import SvgContainer from "./svgCont";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginTop: "250px",
            marginLeft: "100px",
            position: "absolute",
            fontSize: "16px",
          }}
        >
          <img src={require("./activity.png")} />
          <text
            style={{
              margin: "20px",
            }}
          >
            Trending Assets
          </text>
        </div>

        <div className="App-header">
          <div className="card">
            <div className="iconPlaceShadow">
              <div
                className="iconPlace"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(98, 106, 136, 0.1) 0%,rgba(234, 179, 0, 0.06) 100%)",
                }}
              >
                <img
                  style={{
                    marginTop: "25px",
                  }}
                  src={require("./btc.png")}
                />
              </div>
            </div>
            <SvgContainer />
            <div className="label">Bitcoin (BTC)</div>
            <div className="textPlaceShadow">
              <div className="textPlace">
                <div className="pricelabel">$31,812.80</div>
                <div className="growthlabel">+12%</div>
              </div>
            </div>
            <div className="label2">Price</div>
            <div className="textPlaceShadow">
              <div className="textPlace">
                <div className="pricelabel">$60,000</div>
              </div>
            </div>
            <div className="label2">AVL</div>

            <div className="popPairs">
              <div
                style={{
                  height: "23px",
                  paddingTop: "8px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <img
                  style={{
                    maxHeight: "100%",
                  }}
                  src={require("./sol.png")}
                />

                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                  src={require("./eth.png")}
                />
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                  src={require("./bnb.png")}
                />
              </div>
            </div>
            <div className="label3">Popular Pairs</div>
          </div>
          <div className="card">
            <div className="iconPlaceShadow">
              <div
                className="iconPlace"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)",
                }}
              >
                <img
                  style={{
                    marginTop: "25px",
                  }}
                  src={require("./sol.png")}
                />
              </div>
            </div>
            <SvgContainer />
            <div className="label">Solana (SOL)</div>
            <div className="textPlaceShadow">
              <div className="textPlace">
                <div className="pricelabel">$32.83</div>
                <div className="losslabel">-12.32%</div>
              </div>
            </div>
            <div className="label2">Price</div>
            <div className="textPlaceShadow">
              <div className="textPlace">
                <div className="pricelabel">$60,000</div>
              </div>
            </div>
            <div className="label2">AVL</div>

            <div className="popPairs">
              {" "}
              <div
                style={{
                  height: "23px",
                  paddingTop: "8px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <img
                  style={{
                    maxHeight: "100%",
                  }}
                  src={require("./btc.png")}
                />

                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                  src={require("./eth.png")}
                />
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                  src={require("./bnb.png")}
                />
              </div>
            </div>
            <div className="label3">Popular Pairs</div>
          </div>
          <div className="card">
            <div className="iconPlaceShadow">
              <div
                className="iconPlace"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)",
                }}
              >
                <img
                  style={{
                    marginTop: "25px",
                  }}
                  src={require("./eth.png")}
                />
              </div>
            </div>
            <SvgContainer />
            <div className="label">Ethereum (ETH)</div>
            <div className="textPlaceShadow">
              <div className="textPlace">
                <div className="pricelabel">$1,466.35</div>
                <div className="losslabel">-11.93%</div>
              </div>
            </div>
            <div className="label2">Price</div>
            <div className="textPlaceShadow">
              <div className="textPlace">
                <div className="pricelabel">$60,000</div>
              </div>
            </div>
            <div className="label2">AVL</div>

            <div className="popPairs">
              <div
                style={{
                  height: "23px",
                  paddingTop: "8px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <img
                  style={{
                    maxHeight: "100%",
                  }}
                  src={require("./sol.png")}
                />

                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                  src={require("./btc.png")}
                />
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                  src={require("./bnb.png")}
                />
              </div>
            </div>
            <div className="label3">Popular Pairs</div>
          </div>{" "}
          <div className="card">
            <div className="iconPlaceShadow">
              <div
                className="iconPlace"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(98, 106, 136, 0.1) 0%,rgba(234, 179, 0, 0.06) 100%)",
                }}
              >
                <img
                  style={{
                    marginTop: "25px",
                  }}
                  src={require("./bnb.png")}
                />
              </div>
            </div>
            <SvgContainer />
            <div className="label">Bitcoin (BTC)</div>
            <div className="textPlaceShadow">
              <div className="textPlace">
                <div className="pricelabel">$1.00</div>
                <div className="growthlabel">+0.26%</div>
              </div>
            </div>
            <div className="label2">Price</div>
            <div className="textPlaceShadow">
              <div className="textPlace">
                <div className="pricelabel">$60,000</div>
              </div>
            </div>
            <div className="label2">AVL</div>

            <div className="popPairs">
              <div
                style={{
                  height: "23px",
                  paddingTop: "8px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <img
                  style={{
                    maxHeight: "100%",
                  }}
                  src={require("./sol.png")}
                />

                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                  src={require("./eth.png")}
                />
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                  src={require("./bnb.png")}
                />
              </div>
            </div>
            <div className="label3">Popular Pairs</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
