import Box from "@mui/joy/Box";
import { Component } from "react";
import { Checkbox } from "@mui/joy";
import Close from "@mui/icons-material/Close";

export class CheckboxTodoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "",
      color: "danger",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  showData = (isChecked) => {
    return {
      label: isChecked
        ? `${this.props.label} checked`
        : `${this.props.label} unchecked`,
      color: isChecked ? "success" : "danger",
    };
  };

  handleChange = (event) => {
    const isChecked = event.target.checked;
    this.setState(this.showData(isChecked));
  };

  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 300,
          "& > div": { p: 2, borderRadius: "md", display: "flex" },
        }}
      >
        <Checkbox
          onChange={this.handleChange}
          label={this.state.label !== "" ? this.state.label : this.props.label}
          color={this.state.color}
          uncheckedIcon={this.props.icon || <Close />}
        />
      </Box>
    );
  }
}
