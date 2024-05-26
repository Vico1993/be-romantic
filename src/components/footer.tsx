import { Col, Row } from "@zendeskgarden/react-grid";
import React from "react";
import styled from "styled-components";

import coffee from "./../img/buy_me_coffee.png";

const StyledRowFooter = styled(Row)({
    position: "fixed",
    bottom: 0,
    width: "100%",
    paddingBottom: "20px",
});

const StyledCoffeeImg = styled.img({
    height: "41px",
    width: "174px",
    boxShadow: "0px 3px 2px 0px rgba(190, 190, 190, 0.5)",
});

export default function Footer() {
    return (
        <StyledRowFooter className="footer">
            <Col textAlign="center">
                <a href="https://buymeacoffee.com/vico1993" target="_blank">
                    <StyledCoffeeImg src={coffee} alt="Buy Me A Coffee" />
                </a>
            </Col>
        </StyledRowFooter>
    );
}
