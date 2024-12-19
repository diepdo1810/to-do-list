import { Component } from "react";
import Box from "@mui/joy/Box";

export default class ClockLifecycleClass extends Component {
  currentDate = () => new Date();

  state = {
    day: this.currentDate().getDay(),
    month: this.currentDate().getMonth(),
    year: this.currentDate().getFullYear(),
    date: new Date(),
    hour: this.currentDate().getHours(),
    min: this.currentDate().getMinutes(),
    second: this.currentDate().getSeconds(),
    text: ''
  };

  componentDidMount() {
    setInterval(() => {
      // mount lifecycle method
      console.log("tick");
      this.setState({
        hour: this.currentDate().getHours(),
        min: this.currentDate().getMinutes(),
        second: this.currentDate().getSeconds() + 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.state.second);
    if (this.state.second === 60) {
      console.log("It is a new minute");
    }
  }

  render() {
    return (
      <Box>
        <h1>Tick tak: {this.state.text}</h1>
        <h2>It is {this.state.day}/{this.state.month}/{this.state.year}.</h2>
        <h2>
          It is {this.state.hour}:{this.state.min}:{this.state.second}
        </h2>
      </Box>
    );
  }
}
