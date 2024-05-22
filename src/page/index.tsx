import React, { useEffect, useState } from "react";
import { IEvent, relevantDate } from "../service/date-service";
import { Col, Grid, Row } from "@zendeskgarden/react-grid";
import styled from "styled-components";

const StyledRow = styled(Row)<{ index: number }>({
    "&": {
        fontSize: "40px",
    },
}) as typeof Row;

export default function Index() {
    const [dates, setDates] = useState<IEvent[]>([]);

    useEffect(() => {
        setDates(relevantDate());
    }, []);

    return (
        <Grid debug>
            {dates.map((date, i) => (
                <StyledRow
                    key={`dates-row-${i}`}
                    className="dates-row"
                    id={`dates-row-${i}`}
                    alignItems="center"
                >
                    <Col textAlign="center">{date.name}</Col>
                </StyledRow>
            ))}
            <Row>Hello World</Row>
        </Grid>
    );
}
