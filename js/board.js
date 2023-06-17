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

GameBoard.moveList = new Array(MAXDEPTH * MAXPOSITIONMOVES);
GameBoard.maveScores = new Array(MAXDEPTH * MAXPOSITIONMOVES);
GameBoard.moveListStart = new Array(MAXDEPTH);

function GeneratePosKey(){
    var sq = 0;
    var finalKey = 0;
    var piece = PIECES.EMPTY;

    for(sq = 0; sq<BRD_SQ_NUM;++sq){
        piece = GameBoard.pieces[sq];
        if(piece != PIECES.EMPTY && piece != SQUARES.OFFBOARD){
            finalKey ^= PieceKeys[(piece *120)+sq];
        }
    }
    if(GameBoard.side == COLOURS.WHITE){
        finalKey ^= SideKey;
    }

    if(GameBoard.enPas != SQUARES.NO_SQ){
        finalKey ^= PieceKeys[GameBoard.enpas];
    }

    finalKey ^= CastleKeys[GameBoard.castlePerm];

    return finalKey;
}

function ResetBoard(){
    var index = 0;
    for(index=0;index<BRD_SQ_NUM;index++){
        GameBoard.pieces[index] = SQUARES.OFFBOARD;
    }
    for(index=0;index< 64;++index){
        GameBoard.pieces[Sq120(index)]=PIECES.EMPTY;
    }
    for(index=0;index<14*120;++index){
        GameBoard.pList[index] = PIECES.EMPTY;
    }
    for(index=0;index<2;++index){
        GameBoard.material[index]=0;
    }
    for(index=0;index<13;index++){
        GameBoard.pceNum[index]=0;
    }
    GameBoard.side = 0;
    GameBoard.enpas = SQUARES.NO_SQ;
    GameBoard.fiftyMove = 0;
    GameBoard.ply = 0;
    GameBoard.hisPly = 0;
    GameBoard.castlePerm = 0;
    GameBoard.posKey = 0;
    GameBoard.moveListStart[GameBoard.ply] = 0;
}

function ParsenFen(fen){
    ResetBoard();

}
 