import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row, Card } from "react-bootstrap";

export default class ListData extends Component {
    constructor(props) {

        super(props);
        this.state = {
            hero: [],
            visible: false,
        };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "https://akabab.github.io/superhero-api/api/all.json",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    hero: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <div className="mt-3">
                    <center>
                        <h1><strong>List Superhero</strong></h1>
                        <Container>
                            <Row className="justify-content-md-center">
                                {this.state.hero.map((results, index) => {
                                    return (
                                        <div key={results.id}>
                                            <Col>
                                                <Card style={{ width: '18rem', margin: '10px' }}>
                                                    <Card.Img variant="top" src={results.images.lg} />
                                                    <Card.Body>
                                                        <Card.Title>{results.name}</Card.Title>
                                                        <Card.Text>{results.work.occupation}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </div>
                                    );
                                })
                                }
                            </Row>
                        </Container>
                    </center>
                </div >
            </div >
        );
    }
}