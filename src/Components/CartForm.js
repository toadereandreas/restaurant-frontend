import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CartForm extends Component {
    state = {
        servingCode: "",
    };

    handleInput = (e) => {
        const formData = {};
        formData[e.target.name] = e.target.value;
        this.setState({ ...formData });
    };

    render() {
        const { onSubmit } = this.props;
        const { servingCode } = this.state;
        return (
            <Form
                className="mt-5 d-flex flex-column"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit({
                        variables: {
                            servingCode,
                        },
                    })
                        .then(() => {
                            this.setState({
                                servingCode: "",
                            });
                        })
                        .catch((e) => console.log(e));
                }}
            >
                <h2 className="text-center pb-3">Create your account</h2>
                <Form.Group controlId="servingCode">
                    <Form.Label className="text-white">Your code:</Form.Label>
                    <Form.Control
                        type="text"
                        className="w-25"
                        name="servingCode"
                        onChange={this.handleInput}
                        value={servingCode}
                        placeholder="Code"
                        required
                    ></Form.Control>
                </Form.Group>

                <div className="footer">
                    <Button
                        variant="primary"
                        type="submit"
                        className="button"
                        style={{ align: "center", fontWeight: "bold" }}
                    >
                        SUBMIT
                    </Button>
                    <br />
                </div>
            </Form>
        );
    }
}

{
    /* <form onSubmit={createOrderFrontend}>
    <label>
        Enter code:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
</form>; */
}
