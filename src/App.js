import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import Countdown from 'react-countdown';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledAbout = styled.button`
  width: 119px;
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  background-image:url('about.png');
`;

export const StyledWallet = styled.button`
  width: 119px;
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  background-image:url('wallet.png');
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
  margin-top: 1em;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: none;
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState(``);
  const [view, setView] = useState(`about`);
  const [walletData, setWalletData] = useState([]);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
    LAUNCH_DATE: "",
    METADATA: [],
  });

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      if (view === "reapers") {
        showReapers();
      }
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  const showReapers = () => {
    setView('reapers');
    setFeedback(`Loading your Reapers...`);
    blockchain.smartContract.methods
      .walletOfOwner(blockchain.account)
      .call({
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
      })
      .then(async (receipt) => {
        setFeedback(``);
        setWalletData(
          receipt.length > 0 ? prepWalletData(receipt) : (
            <div>
              <p style={{
                marginBottom: "1em"
              }}>You have no Reapers in this wallet.</p>
              <p style={{
                margin: "1em"
              }}>Visit on Oasis to get a Reaper!</p>
              <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}><img style={{
                width: "192px",
              }} src="/oasis_logo.svg" alt="Oasis" /></StyledLink>
            </div>
          )
        );
      });
  };

  const prepWalletData = (receipt) => {
    let fullData = []

    for (let i = 0; i < receipt.length; i++) {
      let idx = parseInt(receipt[i], 10)
      let metadata = CONFIG.METADATA[idx]

      fullData.push({
        id: idx,
        url: metadata.image,
        name: metadata.name.replace("Reapers Collection ", ""),
      })
    }

    return fullData.map((item) =>
      <div key={item.id} style={{
        margin: "6px",
        backgroundColor: "var(--primary)",
        borderRadius: 8,
      }}><StyledLink target={"_blank"} href={item.url}>
          {item.url.includes(".png") ? (
            <img alt={item.name} src={item.url} width="150px" height="150px" style={{
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }} />) : (
            <video width="150" height="150" alt={item.name} style={{
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }} controls={true}>
              <source src={item.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </StyledLink>
        <p style={{
          padding: "8px",
          color: item.color,
        }}>{item.name}</p>
      </div>
    );
  }

  const showAbout = () => {
    setFeedback(``)
    setView('about')
  }

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >
        <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
        <s.SpacerSmall />
        <s.Container
          jc={"center"}
          ai={"center"}
          style={{
            margin: "0",
            padding: "0",
            color: "#efefef",
          }}
        >
          <div className="social">
            <a href="https://github.com/zquestz/reapers.cash" target="_blank"><img src="/github-alt-brands.svg" /></a>
            <a href="https://www.instagram.com/thereapernft" target="_blank"><img src="/instagram-brands.svg" /></a>
            <a href="https://t.me/ReapersNFT" target="_blank"><img src="/telegram-plane-brands.svg" /></a>
            <a href="https://twitter.com/ReapersNFT" target="_blank"><img src="/twitter-brands.svg" /></a>
          </div>
        </s.Container>
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/example.webp"} />
          </s.Container>
          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              border: "none",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <img
              style={{
                marginTop: "1em",
                marginBottom: ".2em",
                maxWidth: "100%",
              }}
              src="/sinister.png"
              alt="The Sinister 3" />
            <s.Container style={{
              flexFlow: "row wrap",
            }} ai={"center"} jc={"center"} fd={"row"}>
              <StyledAbout
                onClick={(e) => {
                  e.preventDefault();
                  showAbout();
                }}
                // onMouseEnter={(e) => {
                //   e.target.style['background-image'] = "url('aboutH.png')";
                // }}
                // onMouseOut={(e) => {
                //   e.target.style['background-image'] = "url('about.png')";
                // }}
              > </StyledAbout>
              <>
                {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                  <StyledWallet
                    onClick={(e) => {
                      e.preventDefault();
                      setView('reapers');
                      setFeedback(`Loading your Reapers...`);
                      dispatch(connect());
                      getData();
                    }}
                    // onMouseEnter={(e) => {
                    //   e.target.style['background-image'] = "url('walletH.png')";
                    // }}
                    // onMouseOut={(e) => {
                    //   e.target.style['background-image'] = "url('wallet.png')";
                    // }}
                  > </StyledWallet>
                ) : (
                  <StyledWallet
                    onClick={(e) => {
                      e.preventDefault();
                      showReapers();
                      getData();
                    }}
                    // onMouseEnter={(e) => {
                    //   e.target.style['background-image'] = "url('walletH.png')";
                    // }}
                    // onMouseOut={(e) => {
                    //   e.target.style['background-image'] = "url('wallet.png')";
                    // }}
                  > </StyledWallet>
                )}
              </>
            </s.Container>
            {(feedback !== "") ? (
              <>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--accent-text)",
                    marginTop: "1em",
                  }}
                >
                  {feedback}
                </s.TextDescription>
              </>
            ) : null}
            {(view === "about") ? (
              <s.Container
                flex={2}
                jc={"center"}
                ai={"center"}
              >
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--primary-text)",
                    paddingBottom: "1em",
                    maxWidth: "450px",
                  }}
                >
                  <div
                    style={{
                      marginTop: "1em",
                    }}
                  >
                    Through death comes life, created from the heart of an <StyledLink target={"_blank"} href="https://instagram.com/chu_mash">
                      indigenous activist
                    </StyledLink> and a <StyledLink target={"_blank"} href="https://greyh.at">
                      terminal junkie
                    </StyledLink> out there in the metaverse, we introduce the Reapers! Coming for the soul of the financial system.</div>
                  <div
                    style={{
                      marginTop: "1em",
                    }}
                  >Chu, our artist, comes from a Native Reservation in California. His goal is to bring quality NFT art to the SmartBCH community and transition to being a full time digital artist in the crypto economy!</div>
                  <div
                    style={{
                      marginTop: "1em",
                    }}
                  >
                    To read more about our vision/roadmap, check out our <StyledLink target={"_blank"} href="https://read.cash/@Chu/the-reapers-are-ready-to-summon-7d65bd97">
                      release announcement
                    </StyledLink>.
                  </div>
                </s.TextDescription>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--primary-text)",
                  }}
                >
                  The official contract address is:<br />
                  <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                    {truncate(CONFIG.CONTRACT_ADDRESS, 24)}
                  </StyledLink>
                </s.TextDescription>
              </s.Container>
            ) : (
              <s.Container
                style={{
                  textAlign: "center",
                  color: "var(--primary-text)",
                  marginTop: "1em",
                  flexFlow: "row wrap"
                }}
                flex={2}
                jc={"center"}
                ai={"center"}
              >
                {walletData}
              </s.Container>

            )}
            <s.SpacerMedium />
          </s.Container>
          <s.SpacerLarge />
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={"/config/images/example.webp"}
            />
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerSmall />
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--primary-text)",
          }}
        >
          &copy; Reapers Developers 2021-2022
        </s.TextDescription>
      </s.Container>
    </s.Screen>
  );
}

export default App;
