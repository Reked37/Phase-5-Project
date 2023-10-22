import React from 'react'

function Match({passMatch}) {
    const {away_team_id, date, home_team_id, id, location, home_team, away_team} = passMatch

  return (
    <div className='ui five wide column'>
        <div className='ui-card'>
            <h3 className='number'>Home: {home_team.name}</h3>
            <h4 className='number'>VS</h4>
            <h3 className='number'>Away: {away_team.name}</h3>
            <h5 className='name'>Location: {location}</h5>
            <h5 className='description'>Date:{date}</h5>
        </div>
    </div>
  )
}

export default Match