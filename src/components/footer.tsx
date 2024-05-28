import { Anchor } from "@zendeskgarden/react-buttons";
import { Col, Row } from "@zendeskgarden/react-grid";
import React from "react";
import styled from "styled-components";

import { COLORS, StyledRow } from "./style";

const StyledAnchor = styled(Anchor)({
    color: COLORS.WHITE,
    textDecoration: "none",

    ":hover": {
        color: COLORS.WHITE,
    },
});

export default function Footer() {
    // Retrieve current year for the footer
    const currentYear = new Date().getFullYear();

    return (
        <StyledRow>
            <Col lg={1}>
                <StyledAnchor
                    href="https://buymeacoffee.com/vico1993"
                    target="_blank"
                >
                    Github
                </StyledAnchor>
            </Col>
            <Col lg={2}>
                <StyledAnchor
                    href="https://buymeacoffee.com/vico1993"
                    target="_blank"
                >
                    Buy Me A Coffee
                </StyledAnchor>
            </Col>
            <Col textAlign="end">
                <StyledAnchor
                    href="https://www.victorpiolin.com"
                    target="_blank"
                >
                    © {currentYear} Victor Piolin
                </StyledAnchor>
            </Col>
        </StyledRow>
    );
}
