import React from 'react'

const list = ["relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative","relative"]
const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                {
                  list.map((rel, index)=>{
                    return <li key={`relativeListItem${index + 1}`}>{rel}</li>
                  })
                }
               </ol>
    </div>
  )
}

export default App
