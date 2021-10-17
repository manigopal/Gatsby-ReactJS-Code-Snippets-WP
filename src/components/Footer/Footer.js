import React from 'react';
import { Wrapper } from './Footer.styles'

const today = new Date();

const Footer = () => (
    <Wrapper>
        <p>
            Do you want to get Updates ! <br />
            Copyright &copy; {today.getFullYear()}
        </p>
    </Wrapper>
)

export default Footer