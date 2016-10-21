import BuildNewSVG from './BuildNewSVG';
import React from 'react';
export class HomeIcon extends React.Component{
  constructor(props){
    super(props);
  }
 render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size}
        path1="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" path2="M0 0h24v24H0z"  fill1={fill1} fill2 ={fill2} />
    );
  }
}

export class CheckMarkIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size}
        path2="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill1={fill1} fill2 ={fill2} />
    );
  }
}

export class PlusIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size}
         path1="M0 0h24v24H0z"
         path2="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill1={fill1} fill2 ={fill2} />
    );
  }
}

export class CrossIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size}
         path1="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
         path2="M0 0h24v24H0z" fill1={fill1} fill2 ={fill2} />
    );
  }
}

export class EditIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size}
        path1="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" path2="M0 0h24v24H0z" fill1={fill1} fill2 ={fill2} />
    );
  }
}
export class EmbedIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size}
        path1="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" path2="M0 0h24v24H0z" fill1={fill1} fill2 ={fill2} />
    );
  }
}
export class DeleteIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size}
         path1="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
         path2="M0 0h24v24H0z" fill1={fill1} fill2 ={fill2} />
    );
  }
}

export class ExpandLeftIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
         path1=' '
         path2='M26.331,30.176c-1.135,0-2.26-0.479-3.051-1.41l-9.352-11.01c-1.271-1.493-1.271-3.688,0-5.179L23.28,1.566
                  c1.428-1.684,3.951-1.891,5.639-0.459c1.686,1.431,1.891,3.955,0.459,5.639l-7.15,8.42l7.15,8.42
                  c1.432,1.684,1.227,4.207-0.459,5.638C28.165,29.864,27.245,30.176,26.331,30.176z M15.944,29.226
                  c1.684-1.431,1.889-3.955,0.459-5.638l-7.153-8.42l7.153-8.421c1.43-1.685,1.225-4.208-0.459-5.639
                  c-1.688-1.431-4.209-1.224-5.639,0.459L0.953,12.578c-1.271,1.492-1.271,3.686,0,5.178l9.353,11.01
                  c0.791,0.934,1.916,1.41,3.051,1.41C14.271,30.176,15.19,29.864,15.944,29.226' />
    );
  }
}
export class CloseIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
         path1=' M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
         path2='M0 0h24v24H0z'  />
    );
  }
}

export class TextAnsIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
        path1='M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z'
        path2='M0 0h24v24H0z'  />
    );
  }
}

export class PicAnsIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
        path1='M3 11h8v-8h-8v8zm0 10h8v-8h-8v8zm10 0h8v-8h-8v8zm0-10h8v-8h-8v8z'
        path2='M0 0h24v24H0z'  />
    );
  }
}

export class UpArrowIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
        path1='M7 14l5-5 5 5z'
        path2='M0 0h24v24H0z'  />
    );
  }
}

export class DownArrowIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
        path1='M7 10l5 5 5-5z'
        path2='M0 0h24v24H0z'  />
    );
  }
}

export class SuccessIcon extends React.Component{
  constructor(props){
    super(props);
  }
render(){
    const {height,width,color,size,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1="#1b8a2f" fill2 ={fill2}
                path1='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'
                path2='M0 0h24v24H0z'  />
    );
  }
}

export class InfoIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      const {height,width,color,size,fill2,viewBox} = this.props;
      return (
        <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1="#ffcc00" fill2 ={fill2}
                  path1='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
                  path2='M0 0h24v24H0z'  />
      );
  }
}
export class SettingsEthernetIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
        path1='M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z'
        path2='M0 0h24v24H0z'  />
    );
  }
}
export class RadioButtonUnchecked extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
        path1='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
        path2='M0 0h24v24H0z'  />
    );
  }
}

export class UploadIcon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
        path1='M0 0h24v24H0z'
        path2='M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z'  />
    );
  }
}

export class Expander extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {height,width,color,size,fill1,fill2,viewBox} = this.props;
    return (
      <BuildNewSVG color={color} height={height} viewBox={viewBox} width={width} size={size} fill1={fill1} fill2 ={fill2}
        path1='M0 0h24v24H0z'
        path2='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' />
    );
  }
}
