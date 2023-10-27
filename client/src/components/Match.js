import React from 'react'

function Match({passMatch}) {
    const {date, location, home_team, away_team} = passMatch

  return (
    <div className='ui five wide column'>
        <div className='ui-card'>
            <h3 className='hometeam'>Home: {home_team.name}</h3>
            <h4 className='number'>VS</h4>
            <h3 className='awayteam'>Away: {away_team.name}</h3>
            <h5 className='name'>Location: {location}</h5>
            <h5 className='description'>Date: {date}</h5>
        </div>
    </div>
  )
}

export default Match