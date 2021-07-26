import styled from "styled-components";

const GridButton = ({ isPlayed = false }) => {
    return <Button isPlayed={isPlayed} />;
};

const Button = styled.button`
    position: relative;
    background-color: rgb(82, 63, 255);
    background: radial-gradient(
        circle,
        rgba(82, 63, 255, 1) 0%,
        rgba(0, 0, 0, 1) 100%
    );
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background-color: rgb(82, 63, 255);
        background: radial-gradient(
            circle,
            rgba(82, 63, 255, 1) ${props => (props.isPlayed ? "0" : "10")}%,
            rgba(18, 18, 18, 1) 100%
        );
        opacity: ${props => props.isPlayed ? "1" : "0"};
        transition: ${(props) => props.theme.transition};
    }

    &:hover::before {
        opacity: 1;
    }

    &:active::before {
        background: rgb(64, 255, 63);
        background: radial-gradient(
            circle,
            rgba(64, 255, 63, 1) 10%,
            rgba(18, 18, 18, 1) 100%
        );
    }
`;

export default GridButton;