import React from "react";
import { IEvent, formatDate } from "../service/date-service";
import styled from "styled-components";

import { COLORS, FONT_FAMILLY_HAND_WRITING } from "./style";
import { Span } from "@zendeskgarden/react-typography";

interface IDateProps {
    event: IEvent;
}

const StyledContainer = styled.div({
    textAlign: "end",
    color: COLORS.WHITE,
});

const StyledH2 = styled.h2({
    fontSize: "60px",
    margin: "10px 0px",
    color: COLORS.YELLOW,
    fontFamily: FONT_FAMILLY_HAND_WRITING,
});

const StyledName = styled.span({
    fontSize: "40px",
    fontFamily: FONT_FAMILLY_HAND_WRITING,
});

const StyledSpan = styled(Span)({
    fontSize: "30px",
    color: COLORS.WHITE,
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
            <StyledSpan>When is the next special day?</StyledSpan>
            <StyledH2>{`${formatDate(date)}`}</StyledH2>
            <StyledName>{name}</StyledName>
            <StyledDescription>{description}</StyledDescription>
        </StyledContainer>
    );
}
