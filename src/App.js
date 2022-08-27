import React, { Component } from "react"
import Table from "./Table"

class App extends Component {
  state = {
    characters: [
      {
        name: "Cameron",

        job: "Server Admin",
      },
      {
        name: "Jackson",
        job: "Partner-in-Crime",
      },
      {
        name: "Robert",
        job: "Technical Developer",
      },
      {
        name: "Gabi",
        job: "New Player/Camera Account",
      },
      {
        name: "Brian",
        job: "unassigned",
      },
    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const { characters } = this.state

    return (
      <div className='container'>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    )
  }
}

export default App
