import React from "react";
import { IEvent, formatDate } from "../service/date-service";
import styled from "styled-components";

import { COLORS } from "./style";

interface IDateProps {
    event: IEvent;
}

const StyledContainer = styled.div({
    textAlign: "end",
    color: COLORS.RED,
});

const StyledH2 = styled.h2({
    fontSize: "60px",
});

const StyledName = styled.span({
    fontSize: "40px",
});

const StyledDescription = styled.p({
    fontSize: "25px",
    width: "500px",
    marginLeft: "auto",

    "@media (max-width: 1024px)": {
        width: "100%",
    },
});

export default function Date({ event }: IDateProps) {
    const { date, description, name } = event;

    return (
        <StyledContainer>
            <StyledH2>{`${formatDate(date)}`}</StyledH2>
            <StyledName>{name}</StyledName>
            <StyledDescription>{description}</StyledDescription>
        </StyledContainer>
    );
}
