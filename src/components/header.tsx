/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Col, Row } from "@zendeskgarden/react-grid";
import { Anchor } from "@zendeskgarden/react-buttons";
import GithubinIcon from "@zendeskgarden/svg-icons/src/16/github-fill.svg?react";

const StyledHeader = styled(Row)({
    position: "fixed",
    top: 0,
    width: "100%",
    textAlign: "right",
    padding: "15px",
});

export default function Header() {
    return (
        <StyledHeader justifyContent="end">
            <Col lg={0.5} style={{ padding: "0px" }}>
                <Link
                    to="/about"
                    style={{
                        color: "black",
                        textDecoration: "none",
                        marginRight: "10px",
                    }}
                >
                    About
                </Link>
            </Col>
            <Col lg={0.6} style={{ padding: "0px" }}>
                <span
                    style={{
                        borderRadius: "20px",
                        display: "block",
                    }}
                >
                    <GithubinIcon style={{ verticalAlign: "top" }} />
                    <Anchor
                        href={"https://github.com/Vico1993/be-romantic"}
                        target="_blank"
                        style={{
                            color: "black",
                            marginLeft: "5px",
                            textDecoration: "none",
                        }}
                    >
                        Github
                    </Anchor>
                </span>
            </Col>
        </StyledHeader>
    );
}
