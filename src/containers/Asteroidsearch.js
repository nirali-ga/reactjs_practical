import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAsteroid, displayAsteriods } from '../actions/asteriod.action';

import { Button, Form, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';


class Asteroidsearch extends Component {

    state = {
        asteriodId: ''
    }


    componentDidMount() {

    }

    searchAsteroid = (e) => {
        e.preventDefault();
        console.log(this.state.asteriodId);
        this.props.searchAsteroid(this.state.asteriodId)
    }


    setvalue = (e) => {
        const asteriodId = e.target.value;
        this.setState({
            asteriodId: asteriodId
        });
    }

    gotoAsteroidDeatils = (asteriodId) => {
        console.log(asteriodId);
        this.props.history.push(`/asteroid-details/${asteriodId}`);
    }


    render() {
        return (
            <Container className="justify-content-md-center">
                <Row className=" m-5">
                    <Form onSubmit={this.searchAsteroid} noValidate>
                        <Form.Group controlId="asteroidId" className="mb-2">
                            <Form.Control onChange={this.setvalue} value={this.state.asteriodId} type="text" placeholder="Enter Asteroid ID" />
                        </Form.Group>
                        {this.props.asteroidError ? <Form.Text className="text-muted error-msg">
                            {
                                this.props.asteroidError
                            }
                        </Form.Text> : null}
                        <Button disabled={!this.state.asteriodId.length} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
                <Row className="m-5">
                    <Col sm="3">
                        <Button onClick={this.props.displayAsteriods} variant="primary" type="button">
                            Random Asteroid
                    </Button>
                    </Col>
                    <Col sm="3">
                    {this.props.asteroids && this.props.asteroids.length ?
                        <DropdownButton id="dropdown-item-button" title="Select Asteroid">
                            {
                                this.props.asteroids.map((item, i) => (
                                    <Dropdown.Item onClick={() => { this.gotoAsteroidDeatils(item.id) }} key={i} as="button">{item.name}</Dropdown.Item>
                                ))
                            }
                        </DropdownButton>
                        : null}
                        </Col>
                </Row>

            </Container>
        );
    }
}


const mapStateToProps = (state) => ({
    asteroidError: state.asteroidError,
    asteroids: state.asteroids
});

const mapDispatchToProps = {
    searchAsteroid,
    displayAsteriods
}

export default connect(mapStateToProps, mapDispatchToProps)(Asteroidsearch);