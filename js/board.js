function PCEINDEX(pce,pceNum){
    return (pce*10 + pceNum);
}

var GameBoard = {};

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side = COLOURS.WHITE;
GameBoard.fiftyMove = 0; // count + 1 if no pawn is move or captured is made in 50 moves then draw the match.
GameBoard.hisPly = 0; // maintain a count of every move made in the game from begining.use to store a stake of information in array.
GameBoard.ply = 0; // number of half move made inn the search tree.
GameBoard.enPas = 0;//starting move or each pawn.
GameBoard.castlePerm = 0; // castling of king with rook on left and right side.
GameBoard.material = new Array(2); //white and black material of pieces.
GameBoard.pceNum = new Array(13); //index by piece
GameBoard.pList = new Array(14*10);
GameBoard.posKey = 0;
 