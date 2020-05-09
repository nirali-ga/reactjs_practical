import React, { Component } from 'react';
import { ListGroup, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchAsteroid } from '../actions/asteriod.action';

class Asteroiddetails extends Component {

    componentDidMount() {
        this.props.searchAsteroid(this.props.match.params.id)
    }

    render() {
        return (
            <Container className="justify-content-md-center m-5">
                <Row>
                    <ListGroup>
                        <ListGroup.Item>name : {this.props.asteroidDetails.name}</ListGroup.Item>
                        <ListGroup.Item>nasa_jpl_url : {this.props.asteroidDetails.nasa_jpl_url}</ListGroup.Item>
                        <ListGroup.Item>is_potentially_hazardous_asteroid : {
                            this.props.asteroidDetails.is_potentially_hazardous_asteroid === true ? 'true' : 'false'
                        }</ListGroup.Item>
                    </ListGroup>
                </Row>
            </Container>

        );
    }
}


const mapStateToProps = (state) => ({
    asteroidError: state.asteroidError,
    asteroidDetails: state.asteroidDetails
});

const mapDispatchToProps = {
    searchAsteroid
}

export default connect(mapStateToProps, mapDispatchToProps)(Asteroiddetails);
