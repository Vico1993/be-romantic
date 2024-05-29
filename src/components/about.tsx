import { Anchor } from "@zendeskgarden/react-buttons";
import { Paragraph, XXL } from "@zendeskgarden/react-typography";
import React from "react";
import styled from "styled-components";

import { StyledContainer, StyledH3 } from "./style";

const StyledBoldParagraph = styled(Paragraph)({
    margin: "60px 0px !important",
});

export default function About() {
    return (
        <StyledContainer>
            <StyledH3>What is this website about?</StyledH3>
            <Paragraph>
                <XXL>
                    <b>be-romantic</b>, your ultimate guide to all the love
                    celebrations around the world! Whether you're a romantic
                    looking to surprise your significant other or simply curious
                    about how different cultures celebrate love. By creating a
                    list all the love days celebrated globally around the world.
                </XXL>
            </Paragraph>
            <StyledBoldParagraph>
                <XXL isBold>
                    We aim to help you keep the romance alive by ensuring you
                    never miss an opportunity to celebrate love
                </XXL>
            </StyledBoldParagraph>
            <Paragraph>
                <XXL>
                    This project started as a fun way to keep track of love days
                    for personal use, particularly to always have a reason to
                    surprise loves one with thoughtful gestures. It's an{" "}
                    <Anchor
                        href="https://github.com/Vico1993/be-romantic"
                        target="_blank"
                    >
                        open-source project
                    </Anchor>
                    . This means that as we come up with new ideas and
                    improvements, we continuously update the website. We welcome
                    contributions from our community—whether it's suggesting a
                    new love day, sharing ideas for site improvements, or
                    providing feedback. Together, we can build the most
                    comprehensive love day calendar on the internet.
                </XXL>
            </Paragraph>
        </StyledContainer>
    );
}
