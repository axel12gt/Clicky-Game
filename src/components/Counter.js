import React from "react";
import Face from "./Face";
import friends from "../friends.json";
import Wrapper from "./Wrapper";

let array = [];

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    friends,
    chosen: [],
    count: 0,
    highScore: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = id => {

    // We always use the setState method to update a component's state
    if (array.includes(id)) {
      this.state.count === 12 ? alert("Congrats you win!") : alert("Loser!")
      this.reset();
    } else {
      array.push(id);

      this.state.count < this.state.highScore
        ? this.setState({ count: this.state.count + 1 })
        : this.setState({
            count: this.state.count + 1,
            highScore: this.state.count + 1
          });

      const shuffle = array2 => array2.sort(() => Math.random() - 0.5);

      

      this.setState({ freinds: shuffle(this.state.friends) });
    }
  };

  reset = () => {
    array = [];
    this.setState({ count: 0 });
  };
  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <div className="text-center card-header bg-primary text-white">
           Click Counter! Current Score: {this.state.count} |  Hi Score: {this.state.highScore}
        </div>
        <Wrapper>
          {this.state.friends.map(card => (
            <Face
              handleIncrement={() => this.handleIncrement(card.id)}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Counter;
