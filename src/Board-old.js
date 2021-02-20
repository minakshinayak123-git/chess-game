import React from 'react'

const Board = (i, squareShade) => {
  const rows = new Array(8).fill(1)
  const columns = new Array(8).fill(2)
  console.log('row ', rows)
  return (
    <>
      <div id='chessBoard'>
        {rows.map((_, index) => (
          <div>
            {columns.map((_, index) => (
              <span></span>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Board
