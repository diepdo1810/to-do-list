import Box from "@mui/joy/Box";
import { Component } from "react";
import Link from "@mui/joy/Link";

export class DateTimeTodoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString(),
      format: "24h",
    };

    this.handleTime = this.handleTime.bind(this);
  }

  handleTime = () => {
    console.log("handle time");
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
        <Link href="#" level="title-lg">
          {this.state.time}
        </Link>
      </Box>
    );
  }
}
