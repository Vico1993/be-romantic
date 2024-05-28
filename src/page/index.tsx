import ReactGA from "react-ga4";
import styled from "styled-components";
import React, { useEffect } from "react";
import { Col, Grid } from "@zendeskgarden/react-grid";

import Title from "./../components/title";
import Date from "./../components/date";
import About from "./../components/about";
import Timeline from "../components/timeline";
import Footer from "../components/footer";
import { COLORS, StyledRow } from "../components/style";
import { nextEvent } from "../service/date-service";

const Section = styled(Grid)<{ backgroundColor?: string; minHeight?: string }>(
    ({ backgroundColor, minHeight }) => ({
        display: "flex",
        flexDirection: "column",
        minHeight,
        backgroundColor: backgroundColor,
        fontFamily: "sans-serif",
        justifyContent: "center",
    })
);

export default function Index() {
    const event = nextEvent();

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: "/",
            title: "Index",
        });
    });

    return (
        <>
            <Section backgroundColor={COLORS.BLACK} minHeight="900px">
                <StyledRow className="title">
                    <Col>
                        <Title />
                    </Col>
                </StyledRow>
                <StyledRow className="next-event">
                    <Col>
                        <Date event={event} />
                    </Col>
                </StyledRow>
            </Section>
            <Section>
                <StyledRow className="content">
                    <Col>
                        <About />
                    </Col>
                </StyledRow>
            </Section>
            <Section>
                <StyledRow>
                    <Col>
                        <Timeline />
                    </Col>
                </StyledRow>
            </Section>
            <Section backgroundColor={COLORS.BLACK} minHeight="100px">
                <Footer />
            </Section>
        </>
    );
}
