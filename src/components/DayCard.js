import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const gray = "rgba(0,0,0,.125)";
const teal = "teal";
const border = `2px solid ${gray}`;
const tealBorder = `2px solid ${teal}`;

const DayWrapper = styled.article`
    text-align: center;
    :hover {
        cursor: pointer;
        .card {
            border: ${tealBorder};
        }
    }
    img {
        padding-bottom: 15px;
        width: 85px;
    }
    .card {
        border: ${({ isActive }) => isActive ? tealBorder : border};
    }
    .card-header {
        background: ${({ isActive }) => isActive ? teal : gray};
        border-bottom: ${border};
        color: ${({ isActive }) => isActive ? "white" : null};
        font-weight: 700;
    }
    .card-body {
        padding: 20px 10px;
    }
`

const DayCard = ({ day, temp, icon, description, high, low, precip, setSelectedDay, isActive }) => {
    return (
        <DayWrapper onClick={setSelectedDay} isActive={isActive}>
            <Card>
                <CardHeader>{day}</CardHeader>
                <CardBody>
                    <h2>{temp.toFixed(1)}°</h2>
                    <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} alt={description} />
                    <p><strong>High:</strong> {high.toFixed(1)}°</p>
                    <p><strong>Low:</strong> {low.toFixed(1)}°</p>
                    <p><strong>Precip:</strong> {precip}%</p>
                </CardBody>
            </Card>
        </DayWrapper>
    );
}

export default DayCard;