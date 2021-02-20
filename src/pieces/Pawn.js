import Piece from './piece.js'
import { isSameDiagonal, isSameRow } from '../functions/move'

export default class King extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
        : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
    )
  }

  isMovePossible(src, dest) {
    return (
      (src - 9 === dest && isSameDiagonal(src, dest)) ||
      src - 8 === dest ||
      (src - 7 === dest && isSameDiagonal(src, dest)) ||
      (src + 1 === dest && isSameRow(src, dest)) ||
      (src + 9 === dest && isSameDiagonal(src, dest)) ||
      src + 8 === dest ||
      (src + 7 === dest && isSameDiagonal(src, dest)) ||
      (src - 1 === dest && isSameRow(src, dest))
    )
  }

  getSrcToDestPath(src, dest) {
    return []
  }
}
