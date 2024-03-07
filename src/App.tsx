import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface TeamsData {
  teams: Team[];
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <p>{oneTeam.name}</p>
        <p>
          {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsData.teams.map((team) => (
        <Team key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>NCAA Basketball Team Information</h1>
      <TeamList />
    </div>
  );
}

export default App;
