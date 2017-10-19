import React, { Component } from 'react';
import paper from '../assets/paper.png'
import rock from '../assets/rock.png';
import scissors from '../assets/scissors.png';
import '../App.css';

class Game extends Component {
  state = {
    player : "",
    computer : "",
    playerWin : 0
  }

 choiceInput(choice){
    this.setState(() => {
      return {
        player : choice,
        computer: ["paper", "rock", "scissors"][Math.floor(Math.random()*3)]
      }
    });

 };

 launchGame = () => {
    let computer = this.state.computer;
    let player = this.state.player;

   switch(player) {
      case computer : this.setState({playerWin: 3})
      break;
      case "rock" : this.setState({
        playerWin : computer==="scissors"?1:2
      });
      break;
      case "paper" : this.setState({
        playerWin : computer==="rock"?1:2
      });
      break;
      case "scissors" : this.setState({
        playerWin : computer==="paper"?1:2
      });
      break;
      default : console.log("bad input");
      break;
    }
    setTimeout(() => {
      const winMessage = this.state.playerWin===3?"It's a draw, mario"
      :`Player ${this.state.playerWin===2?"lose":"win"} with ${player} against ${computer}`
     this.setState({
        message : winMessage
      });
      setTimeout(() => {
        this.showTempMessage();
      }, 100);
    }, 100);
  }
  showTempMessage = () => {
    this.setState({
      displayMessage : true
    });
    setTimeout(() => {
      this.setState({
        player : '',
        displayMessage : false
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <div className="myImages">
          <img src={paper}
            alt="papier"
            className={this.state.player === "paper" ? "active" : ""}
            onClick={()=>this.choiceInput('paper')}/>
          <img src={rock}
            alt="Pierre"
            className={this.state.player === "rock" ? "active" : ""}
            onClick={()=>this.choiceInput('rock')}/>
          <img src={scissors}
            alt="ciseaux"
            className={this.state.player === "scissors" ? "active" : ""}
            onClick={()=>this.choiceInput('scissors')}/>
        </div>
        <div>
          {this.state.displayMessage && <p>{this.state.message}</p>}
        </div>
        <div>
        <button
          className="btn btn-lg"
          onClick={this.launchGame}>PLAY</button>
        </div>

     </div>
    );
  }

}

export default Game;
