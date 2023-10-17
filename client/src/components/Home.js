import React from "react"

function Home(){
  return (
    <div>
      <br/><br/><br/>
      <h1 class='home-header'>Welcome to the Flatiron Football League!!</h1>
      <br/><br/>
      <img src='https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?cs=srgb&dl=pexels-jeandaniel-francoeur-2570139.jpg&fm=jpg'
      class='small-image' alt='football'></img><br/><br/>
      <p class='paragraph'>
        Each tab brings you to the list of either players, teams, or coaches
      </p>
      <p class='paragraph'>
        When viewing the players tab you can click on the update button which will bring you to a 
        page to update that althete's information. <br/>If you press the 
        delete button the player will be taken off the list
      </p>
      <p class='paragraph'>
        The team and coach tab have the same functionality as they will display all the teams and coaches in the league
      </p>
      <p class='paragraph'>
        Lastly, the add tab is where you can add a new player, team, or coach to the league!
      </p>
    </div>
  )
}

export default Home