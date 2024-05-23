import React from "react";

import { IEvent } from "../service/date-service";
import { XXXL, XXL, MD } from "@zendeskgarden/react-typography";
import styled from "styled-components";
import { PALETTE } from "@zendeskgarden/react-theming";

interface IDateRowProps {
    date: IEvent;
    index: number;
}

const StyledXL = styled(XXL)({
    color: PALETTE.crimson["400"],
});

const StyledXXXL = styled(XXXL)({
    fontSize: "41px",
    color: PALETTE.pink["400"],
});

const StyledMD = styled(MD)<{ color: string }>((props) => ({
    marginTop: "20px",
    fontSize: "18px",
    display: "block",
    color: props.color,
}));

const StyledContainer = styled.div({
    "&.container-0": {
        opacity: 0.4,
        textDecoration: "line-through",
        textDecorationColor: PALETTE.crimson["400"],
    },

    "&.container-2": {
        opacity: 0.7,
    },
});

export default function DateRow({ date, index }: IDateRowProps) {
    const dateFormated = new Date(date.date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });

    return (
        <StyledContainer className={`container-${index}`}>
            {index === 1 ? (
                <>
                    <StyledXXXL>{dateFormated}</StyledXXXL>
                    <StyledMD color={PALETTE.pink["400"]}>{date.name}</StyledMD>
                </>
            ) : (
                <>
                    <StyledXL>{dateFormated}</StyledXL>
                    <StyledMD color={PALETTE.crimson["400"]}>
                        {date.name}
                    </StyledMD>
                </>
            )}
        </StyledContainer>
    );
}
