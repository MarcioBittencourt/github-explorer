import { PathMatch, PathPattern } from "react-router";
import { useLocation, useParams } from "react-router-dom"

/* declare function useMatch<ParamKey extends string = string>(
  pattern: PathPattern | string
): PathMatch<ParamKey> | null; */

const Repository: React.FC = () => {
  /* const location = useLocation(); */

  /* const params = useMatch(location.pathname); */
  const params = useParams();
  console.log("teste");
  console.log(params);

  return (
    <>
      <h1>Repository:{/* params?.pathname */}</h1>
      <h1>Repository:{ params }</h1>
    </>
  );
}
export default Repository;