import * as React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledImageBox = styled(Box, {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

const StyledImage = styled(Image, {
  opacity: 1,
  position: "absolute",
});

const FrontPage = () => {
  return (
    <div>
      <StyledImageBox>
        <style global jsx>{`
          h1 {
            color: rgb(71, 45, 48);
            font-size: 4rem;
            z-index: 1;
            font-family: Antonio;
            line-height: 4rem;
            padding-left: 4.5rem;
          }

          @media (max-width: 700px) {
            h1 {
              font-size: 3.5rem;
              line-height: 4rem;
              width: 10px;
              padding-left: 3.5rem;
            }
          }

          @media (max-width: 450px) {
            h1 {
              font-size: 3rem;
              line-height: 3rem;
              width: 10px;
              padding-left: 3rem;
              top: -0.2rem;
            }
          }

          @media (max-width: 375px) {
            h1 {
              font-size: 2.5rem;
              line-height: 3rem;
              width: 10px;
              padding-left: 2rem;
              top: -0.2rem;
            }
          }
        `}</style>
        <div
          style={{
            width: "1rem",
          }}
        >
          <h1>Hanover Guides</h1>
        </div>
      </StyledImageBox>
    </div>
  );
};

export default FrontPage;
