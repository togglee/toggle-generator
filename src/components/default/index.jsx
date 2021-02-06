import { useEffect } from "react"
import "./index.scss"

const DefaultPage = ({ finishedLoading }) => {
  useEffect(finishedLoading ,[finishedLoading]);
  return (<div id="mainContainer">
      <h1 className="item">Welcome to Togglee Generator</h1>
    </div>)
}

export const Default = (props) => <DefaultPage {...props} />;
