import styled from "styled-components";
import { Row } from "@zendeskgarden/react-grid";

/**
 * FONT
 */
export const FONT_FAMILLY_HAND_WRITING = "Apple Chancery, cursive";

/**
 * COLORS
 */
export const COLORS = {
    WHITE: "#FFFBDB",
    BLACK: "#232C33",
    RED_OLD: "#FE654F",
    RED: "#f56262",
    YELLOW: "#ffd480",
};

/**
 * RE-USED STYLED
 */
export const StyledContainer = styled.div({
    color: COLORS.BLACK,
});

export const StyledH3 = styled.h3({
    fontSize: "50px",
    color: COLORS.RED,
    fontFamily: FONT_FAMILLY_HAND_WRITING,
});

export const StyledBold = styled.b({
    color: COLORS.RED,
});

export const StyledRow = styled(Row)({
    width: "1080px",
    marginLeft: "auto",
    marginRight: "auto",

    "@media (max-width: 1024px)": {
        width: "100%",
    },
});
