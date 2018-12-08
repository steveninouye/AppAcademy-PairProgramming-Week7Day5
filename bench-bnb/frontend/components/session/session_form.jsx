import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({ username: "", password: "" });
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange("username")}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
        </label>

        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
}

export default SessionForm;
