import { Typography } from '@mui/material';
import React from 'react';
import xtremeLogo from './../../Asset/xtremeMotoZone.png'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles.js";


const Footer = () => {
    return (
        <div style={{ backgroundColor: '#2e1500' }}>
            <Box>
                <h1 style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "-50px"
                }}>
                    <img src={xtremeLogo} alt="" />
                </h1>
                <Container>
                    <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">Aim</FooterLink>
                            <FooterLink href="#">Vision</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="#">Writing</FooterLink>
                            <FooterLink href="#">Internships</FooterLink>
                            <FooterLink href="#">Coding</FooterLink>
                            <FooterLink href="#">Teaching</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contact Us</Heading>
                            <FooterLink href="#">Dhaka</FooterLink>
                            <FooterLink href="#">Chittagong</FooterLink>
                            <FooterLink href="#">Cumilla</FooterLink>
                            <FooterLink href="#">Cox's Bazar</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "10px" }}>
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;