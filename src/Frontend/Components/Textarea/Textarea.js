import React, {Component} from "react";
import "./Textarea.css";

export default class Textarea extends Component {
    render() {
        return (
            <textarea placeholder={this.props.placeholder}
                      onChange={this.props.onChange}
                      className={"Textarea"}
                      id={this.props.id}
                      disabled={this.props.disabled}
                      value={this.props.value}

                      {...this.props}
            />
        );
    }
}
