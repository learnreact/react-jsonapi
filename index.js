import React from "react"

const Formatter = ({ obj }) =>
  <pre>
    {JSON.stringify(obj, null, 2)}
  </pre>

const withResponse = Composed => {
  class FetchContextProvider extends Component {
    render() {
      return <Composed {...this.context} />
    }
  }

  FetchContextProvider.contextTypes = {
    response: PropTypes.object,
  }

  return FetchContextProvider
}

const Response = withResponse(({ response }) => <Formatter obj={response} />)

// TODO: JSONAPI
// const Idx = ({ idx }) =>
//   createElement(
//     withResponse(({ response }) => <Formatter obj={response[idx]} />)
//   );
// const Links = () => <Idx idx="links" />;
// const Data = () => <Idx idx="data" />;
// const Included = () => <Idx idx="included" />;
// const Meta = () => <Idx idx="meta" />;

export default {
  Fetch,
  Formatter,
  // Idx,
  Response,
  withResponse,
}
