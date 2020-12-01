import React, { Component } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import styled from 'styled-components';

const Img = styled.img`
object-fit: none;
object-position: top;
width: 12px;
height: 12px;
overflow: hidden;
`

export default class Admin extends Component {
    constructor(props) {

        super(props);
        this.state = {
            football: [],
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

    handleDelete = (id) => {
        var proceed = window.confirm("Yakin ingin dihapus?");
        if (proceed) {
            axios({
                method: "delete",
                url: "https://footballapishidqi.herokuapp.com/api/posts/" + id,
                headers: {
                    "Content-MD5": "application/json",
                    accept: "*/*"
                }
            })
                .then((data) => {
                    alert("berhasil dihapus");
                    window.location.reload();
                })
                .catch(() => {
                    alert("Data tidak terhapus");
                });
        } else {
            window.location.reload();
        }
    }

    render() {
        return (
            <div className="App">
                <div className="mt-3">
                    <Container>
                        <div className="mb-3">
                            <Button className='mt-5' href="/add" variant="dark">Add Data</Button>
                        </div>
                        <Table bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th class="col-5">Name</th>
                                    <th>Team</th>
                                    <th>Image</th>
                                    <th>Edit / Delete Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.football.map((results, index) => (
                                    <tr key={results._id}>
                                        <td align="center" class="col-5">{results.name}</td>
                                        <td align="center">{results.Team}</td>
                                        <td align="center"><Img src={results.image} /></td>
                                        <td>
                                            <Button variant="dark">Edit</Button>
                                            <Button variant="danger" value="kirim" onClick={() => this.handleDelete(results._id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </div >
            </div >
        );
    }
}