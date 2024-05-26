import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { PALETTE } from "@zendeskgarden/react-theming";
import { XXXL } from "@zendeskgarden/react-typography";
import { Col, Grid, Row } from "@zendeskgarden/react-grid";

import Footer from "./../components/footer";
import Header from "./../components/header";
import DateRow from "./../components/date-row";
import { IEvent, relevantDate } from "../service/date-service";

const StyledGrid = styled(Grid)<{ minHeight: string }>((props) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: props.minHeight,
    backgroundColor: PALETTE.yellow["200"],
    fontFamily: "sans-serif",
}));

const StyledRow = styled(Row)({
    padding: "20px 0px",
});

const StyledTitleRow = styled(Row)({
    position: "fixed",
    top: "300px",
    color: PALETTE.grey["800"],
});

export default function Index() {
    const [dates, setDates] = useState<IEvent[]>([]);
    const { innerHeight } = window;

    useEffect(() => {
        setDates(relevantDate());
    }, []);

    return (
        <StyledGrid minHeight={`${innerHeight - 16}px`}>
            <Header />
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
            <Footer />
        </StyledGrid>
    );
}
