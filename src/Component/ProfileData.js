import React from 'react';
import image1 from '../Component/Images/img1.jpg';
import image2 from '../Component/Images/img2.jpg';
import styled from 'styled-components';
import { Container, Row, Card } from "react-bootstrap";

const Img = styled.img`
 border: 2px;
 border-radius: 50%;
 padding: 10px;
 display: block;
 margin-top: 20px;
 margin-left: auto;
 margin-right: auto;
 width: 50%;
`

const Select = styled.select`
 background-color: #121212;
 color: white;
 margin: 10px;
 width: 30%;
 height: 25px;
 border-radius: .5em;
 font-size: 14px;
 marginTop: 30px;
 text-align: center;
`

function Isi(props) {
    return (
        <div>
            <Img src={props.src} /><br />
            <a>{props.nama}</a><br />
            <a>{props.nim}</a>
        </div>
    )
}

export default function ProfileData() {

    return (
        <div className="mt-3">
            <Container>
                <Row className="justify-content-md-center">
                    <div class="ml-3 mr-3">
                        <Card style={{ width: '18rem', height: '20rem' }}>
                            <Card.Body class="text-center">
                                <Isi nama="Daffa Shidqi H" nim="21120117130041" src={image1} />
                                <Select>
                                    <option value="1">Kelas</option>
                                    <option value="2">A</option>
                                    <option value="3">B</option>
                                </Select>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="ml-3 mr-3">
                        <Card style={{ width: '18rem', height: '20rem' }}>
                            <Card.Body class="text-center">
                                <Isi nama="Kukuh Pranata S" nim="21120117120007" src={image2} />
                                <Select>
                                    <option value="1">Kelas</option>
                                    <option value="2">A</option>
                                    <option value="3">B</option>
                                </Select>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
