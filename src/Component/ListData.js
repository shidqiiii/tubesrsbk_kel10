import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row, Card } from "react-bootstrap";

export default class ListData extends Component {
    constructor(props) {

        super(props);
        this.state = {
            football: [],
            visible: false,
        };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "https://footballapishidqi.herokuapp.com/api/posts/",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    football: data.data,
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
                        <h1><strong>The Best Player In the World</strong></h1>
                        <Container>
                            <Row className="justify-content-md-center">
                                {this.state.football.map((results, index) => {
                                    return (
                                        <div key={results._id}>
                                            <Col>
                                                <Card style={{ width: '18rem', margin: '10px' }}>
                                                    <Card.Img variant="top" src={results.image} />
                                                    <Card.Body>
                                                        <Card.Title>{results.name}</Card.Title>
                                                        <Card.Text>{results.team}</Card.Text>
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