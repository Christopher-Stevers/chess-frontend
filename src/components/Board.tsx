import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as BoardStore from '../store/Board';
import BoardPlace from "./BoardPlace";
import "./Board.css";


type BoardProps =
    BoardStore.BoardState &
    typeof BoardStore.actionCreators &
    RouteComponentProps<{}>;

class Board extends React.PureComponent<BoardProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Board</h1>

                <p>This is a simple example of a React component.</p>

                  <div className="board">
                    {this.props.board.map((elem: any, outerIndex:number) => 
                        elem.map((innerElem: string, index: number) => <BoardPlace   currentPiece={this.props.currentPiece} title={innerElem} index={index} outerIndex={outerIndex} /> )

                    )}
                </div>
               
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.board,
    BoardStore.actionCreators
)(Board);
