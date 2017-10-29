const Other = () => <div>other</div>;

Other.getInitialProps = ({ query }) => {
  console.log("dfsafsd", query);
  return query;
}
export default Other;

