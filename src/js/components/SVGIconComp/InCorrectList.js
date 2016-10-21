import React from 'react';

export default class CorrectList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let fill = this.props.fill || '#D61F00'
    return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <g id="Consumer-Facing" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="02_states" transform="translate(-303.000000, -278.000000)" fill={fill}>
            <g id="Question-Text,-Choice-Text" transform="translate(303.000000, 78.000000)">
                <g id="Group" transform="translate(0.000000, 80.000000)">
                    <path d="M10,120 C4.48,120 0,124.48 0,130 C0,135.52 4.48,140 10,140 C15.52,140 20,135.52 20,130 C20,124.48 15.52,120 10,120 L10,120 Z M12.8284271,134.242641 L10,131.414214 L7.17157288,134.242641 L5.75735931,132.828427 L8.58578644,130 L5.75735931,127.171573 L7.17157288,125.757359 L10,128.585786 L12.8284271,125.757359 L14.2426407,127.171573 L11.4142136,130 L14.2426407,132.828427 L12.8284271,134.242641 L12.8284271,134.242641 Z" id="incorrect-list"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
    );
  }
}
