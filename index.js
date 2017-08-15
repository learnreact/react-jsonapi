import React from "react"

export const Idx = ({ idx, children }, { json }) =>
  children
    ? typeof children === "function"
      ? React.Children.only(children(json[idx]))
      : React.Children.only(children)
    : <pre>
        <code>
          {JSON.stringify(json[idx], null, 2)}
        </code>
      </pre>

Idx.contextTypes = {
  state: PropTypes.object,
  json: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export const Data = props => <Idx idx="data" {...props} />
export const Included = props => <Idx idx="included" {...props} />
export const Links = props => <Idx idx="links" {...props} />
export const Meta = props => <Idx idx="meta" {...props} />
