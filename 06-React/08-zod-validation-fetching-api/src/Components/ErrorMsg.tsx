type ErrorMsgProps = {
  error: string
}

const ErrorMsg = ({ error }: ErrorMsgProps) => {
  return (
    <div id="error">
      <h1>An error occurred !</h1>
      <p>{error}</p>
    </div>
  )
}

export default ErrorMsg
