import styles from "styled-components"

export const InitialPageContainer = styles.div `
    background-color: #FB6B6B;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    gap: 20px;

    img {
        width: 100%;
    }

    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }

    button {
        width: 246px;
        height: 54px;
        background-color: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
        cursor: pointer;
    }
`