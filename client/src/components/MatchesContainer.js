import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { fetchMatches } from '../Redux/matchAction'
import Match from './Match'

function MatchesContainer({ fetchMatches }) {
  useEffect(() => {
    fetchMatches()
  }, [fetchMatches])

  const matches = useSelector(state => state.matches.leagueMatches)
 
  const displayMatches= matches.map(match=>{
    return <Match passMatch={match} key={match.id} />
  })

  return (
    <div>
      <br/>
        <h1 className='headers'>League Matches</h1><br/>
        <div className="ui grid container cards">{displayMatches}</div>
    </div>
  )}

  const mapStateToProps = state => {
    return {
      matches: state.matches
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchMatches: () => dispatch(fetchMatches())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(MatchesContainer)