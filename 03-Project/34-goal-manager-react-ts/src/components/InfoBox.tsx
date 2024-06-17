import { type ReactNode } from "react"

type HintBoxProps = {
  mode: 'hint',
  children: ReactNode
}

type WarningBoxProps = {
  mode: 'warning',
  severity: 'low' | 'medium' | 'high'
  children: ReactNode
}

// discriminated union
type InfoBoxProps = HintBoxProps | WarningBoxProps

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props

  return (
    <aside className={`infobox 
    ${'infobox--' + mode}
    ${mode === 'warning' ? 'warning--' + props.severity : ''}`}
    >
      {
        mode === 'warning' &&
        <h2>Warning</h2>
      }
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox
