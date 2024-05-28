import React from "react";
import styled from "styled-components";
import { Span } from "@zendeskgarden/react-typography";
import { Timeline } from "@zendeskgarden/react-accordions";

import { EVENTS, formatDate, nextEvent } from "../service/date-service";
import { COLORS, StyledContainer, StyledH3 } from "./style";

export const StyledSpan = styled(Span).attrs({ isBold: true })({
    display: "block",
});

export default function History() {
    const closerEvent = nextEvent();

    return (
        <StyledContainer>
            <StyledH3>Timeline</StyledH3>
            <Timeline isAlternate>
                {EVENTS.map((event, index) => (
                    <Timeline.Item key={`event-item-${index}`}>
                        <Timeline.Content>
                            <StyledSpan
                                hue={
                                    closerEvent.date === event.date
                                        ? COLORS.RED
                                        : COLORS.BLACK
                                }
                            >
                                {event.name}
                            </StyledSpan>
                            <Span hue="grey">{formatDate(event.date)}</Span>
                        </Timeline.Content>
                    </Timeline.Item>
                ))}
            </Timeline>
        </StyledContainer>
    );
}
