import React from 'react'

// // 1st way
// const MyButton = (props: { text: string }) => {
//   return (
//     <button>{props.text}</button>
//   )
// }

// 2nd way
// interface MyButtonProps {
//   text: string | number;
//   onClick?: () => void; // optional
// }


// 3rd way
type MyButtonProps = {
  text: string | number;
  onClick?: () => void; // optional
}

// const MyButton: React.FunctionComponent<MyButtonProps> = (props) => {
const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default MyButton
