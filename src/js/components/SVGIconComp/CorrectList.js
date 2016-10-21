import React from 'react';

export default class CorrectList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let fill = this.props.fill || '#1D8600'
    return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
      <g id="Consumer-Facing" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="02_states" transform="translate(-303.000000, -158.000000)" fill={fill}>
            <g id="Question-Text,-Choice-Text" transform="translate(303.000000, 78.000000)">
                <g id="Group" transform="translate(0.000000, 80.000000)">
                    <path d="M10,0 C4.48,0 0,4.48 0,10 C0,15.52 4.48,20 10,20 C15.52,20 20,15.52 20,10 C20,4.48 15.52,0 10,0 L10,0 Z M8,15 L3,10 L4.41,8.59 L8,12.17 L15.59,4.58 L17,6 L8,15 L8,15 Z" id="correct-list"></path>
                </g>
            </g>
        </g>
      </g>
    </svg>
    );
  }
}
