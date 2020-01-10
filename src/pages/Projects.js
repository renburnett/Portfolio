import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Project from '../components/Project';
import CONSTANTS from '../constants';
const axios = require('axios');

class Projects extends Component {

  fetchPinnedRepos = () => {
    const oAuth = {'Authorization': `bearer ${process.env.REACT_APP_GITHUB_KEY}`}

    axios.post(CONSTANTS.GITHUB_API_URL, {query: CONSTANTS.REPOS_QUERY}, {headers: oAuth})
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  }

  displayProjects = () => {
    
  }

  render() {
    return (
      <Grid stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ width: '100vh'}}>
          <Card.Group centered itemsPerRow='3'>
            {this.fetchPinnedRepos()}
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Projects;