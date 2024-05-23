/// <reference types="vite-plugin-svgr/client" />

import React, { useEffect, useState } from "react";
import { IEvent, relevantDate } from "../service/date-service";
import { Col, Grid, Row } from "@zendeskgarden/react-grid";
import { PALETTE } from "@zendeskgarden/react-theming";
import { XXXL } from "@zendeskgarden/react-typography";
import { Anchor } from "@zendeskgarden/react-buttons";
import GithubinIcon from "@zendeskgarden/svg-icons/src/16/github-fill.svg?react";
import styled from "styled-components";

import DateRow from "./../components/date-row";

const StyledRowFooter = styled(Row)({
    position: "fixed",
    bottom: 0,
    width: "100%",
    paddingBottom: "20px",
});

const StyledGrid = styled(Grid)<{ minHeight: string }>((props) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: props.minHeight,
    backgroundColor: PALETTE.yellow["200"],
    fontFamily: "sans-serif",
}));

const StyledCoffeeImg = styled.img({
    height: "41px",
    width: "174px",
    boxShadow: "0px 3px 2px 0px rgba(190, 190, 190, 0.5)",
});

const StyledRow = styled(Row)({
    padding: "20px 0px",
});

const StyledTitleRow = styled(Row)({
    position: "fixed",
    top: "300px",
    color: PALETTE.grey["800"],
});

const StyledHeader = styled(Row)({
    position: "fixed",
    top: 0,
    width: "100%",
    textAlign: "right",
    padding: "15px",
});

export default function Index() {
    const [dates, setDates] = useState<IEvent[]>([]);
    const { innerHeight } = window;

    useEffect(() => {
        setDates(relevantDate());
    }, []);

    return (
        <StyledGrid minHeight={`${innerHeight - 16}px`}>
            <StyledHeader justifyContent="end">
                <Col lg={0.5} style={{ padding: "0px" }}>
                    About
                </Col>
                <Col lg={0.6} style={{ padding: "0px" }}>
                    <span
                        style={{
                            borderRadius: "20px",
                            display: "block",
                        }}
                    >
                        <GithubinIcon style={{ verticalAlign: "top" }} />
                        <Anchor
                            href={"https://github.com/Vico1993/be-romantic"}
                            target="_blank"
                            style={{ color: "black", marginLeft: "5px" }}
                        >
                            Github
                        </Anchor>
                    </span>
                </Col>
            </StyledHeader>
            <StyledTitleRow className="title" alignItems="center">
                <Col textAlign="center">
                    <h1>
                        <XXXL>When should I be romantic?</XXXL>
                    </h1>
                </Col>
            </StyledTitleRow>
            {dates.map((date, i) => (
                <StyledRow
                    key={`dates-row-${i}`}
                    className="dates-row"
                    alignItems="center"
                >
                    <Col textAlign="center">
                        <DateRow date={date} index={i} />
                    </Col>
                </StyledRow>
            ))}
            <StyledRowFooter className="footer">
                <Col textAlign="center">
                    <a href="https://buymeacoffee.com/vico1993" target="_blank">
                        <StyledCoffeeImg
                            src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
                            alt="Buy Me A Coffee"
                        />
                    </a>
                </Col>
            </StyledRowFooter>
        </StyledGrid>
    );
}
