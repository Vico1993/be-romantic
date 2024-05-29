import styled from "styled-components";
import { Row } from "@zendeskgarden/react-grid";

/**
 * COLORS
 */
export const COLORS = {
    WHITE: "#FFFBDB",
    BLACK: "#232C33",
    RED: "#FE654F",
};

/**
 * RE-USED STYLED
 */
export const StyledContainer = styled.div({
    color: COLORS.BLACK,
});

export const StyledH3 = styled.h3({
    fontSize: "50px",
});

export const StyledRow = styled(Row)({
    width: "1080px",
    marginLeft: "auto",
    marginRight: "auto",

    "@media (max-width: 1024px)": {
        width: "100%",
    },
});
