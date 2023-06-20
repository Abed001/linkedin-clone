import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {

  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon /> 
      </div>

      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>

    </div>
  )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>linked in news</h2>
        <InfoIcon />
      </div>

    {newArticle("papa react is back", "Top news - 9099 readers")}
    {newArticle("papa react is back", "Top news - 9099 readers")}
    {newArticle("papa react is back", "Top news - 9099 readers")}
    {newArticle("papa react is back", "Top news - 9099 readers")}
    {newArticle("papa react is back", "Top news - 9099 readers")}
    {newArticle("papa react is back", "Top news - 9099 readers")}
    </div>

  )
}

export default Widgets
