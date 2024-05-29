import React from "react";
import styled from "styled-components";
import { Span } from "@zendeskgarden/react-typography";

import { COLORS, FONT_FAMILLY_HAND_WRITING } from "./style";

const StyledH1 = styled.h1({
    fontSize: "50px",
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILLY_HAND_WRITING,
});

export default function Title() {
    return (
        <StyledH1>
            <Span style={{ display: "block" }}>Love Knows No Borders</Span>
            <Span>Find Your Day!</Span>
        </StyledH1>
    );
}
