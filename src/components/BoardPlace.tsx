import React, { FC, useState }
    from "react";
import { connect,  } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as BoardStore from '../store/Board';

import "./BoardPlace.css";

type props = {
    title: any;
    currentPiece:any;
    index: number;
    outerIndex: number;
    showAvailable: Function;
    moveToPlace: Function;
}; 
const BoardPlace: FC<props> = ({ title, index, outerIndex, showAvailable, moveToPlace, currentPiece }) => {
    function handlePlaceClick() {
        if(currentPiece.piece){
            moveToPlace(index, outerIndex)
        }
       else showAvailable(index, outerIndex);

    }
    const [hidden, setDisplay] = useState(false);
    function toggleVisibility() {
        hidden === true ? setDisplay(false)
            : setDisplay(true);
    }
    function toLetter(input: number) {
        const arr = ["h", "g", "f", "e", "d", "c", "b", "a"];
        return arr[input];
    }
    return (
        <div onClick={ handlePlaceClick} className={(title.available==="yes")?"red":((outerIndex+index)%2===0)? "black": "white"}>
          { (title.piece) &&<img className="pieceImg" src={`chessPieces/${title.color+title.piece}.png`}></img>}
        </div>
    );
};
export default connect(null, BoardStore.actionCreators
)(BoardPlace);
