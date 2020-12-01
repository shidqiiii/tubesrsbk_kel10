import React, { Component } from "react";
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import axios from "axios";

export default class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            football: [],
            visible: false,
            name: "",
            team: "",
            image: "",
        };
    }

    handleNama = (e) => {
        this.setState({
            name: e.target.value,
        });
        console.log(this.state.name);
    };
    handleTeam = (e) => {
        this.setState({
            Team: e.target.value,
        });
        console.log(this.state.team);
    };
    handleImage = (e) => {
        this.setState({
            image: e.target.value,
        });
        console.log(this.state.image);
    };
    handleSubmit = () => {
        if (
            this.state.name !== "" &&
            this.state.team !== "" &&
            !this.state.image !== ""
        ) {
            axios({
                method: "post",
                url: "https://footballapishidqi.herokuapp.com/api/posts/",
                headers: {
                    accept: "*/*",
                },
                data: {
                    name: this.state.name,
                    team: this.state.team,
                    image: this.state.image,
                },
            })
                .then((data) => {
                    alert("berhasil menambahkan");
                    window.location.reload();
                })
                .catch((error) => {
                    alert("gagal lur");
                });
        } else {
            alert("pastikan semua kolom terisi");
        }
    };

    render() {
        return (
            <div className="mt-3">
                <Container>
                    <Form>
                        <Form.Group>
                            <Row className="justify-content-md-center">
                                <Col md={5}>
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={this.handleNama} />
                                </Col>

                                <Col md={5}>
                                    <Form.Label>Team</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Team" onChange={this.handleTeam} />
                                </Col>

                                <Col md={5}>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Url Image" onChange={this.handleImage} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row className="justify-content-md-center">
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit </Button>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}