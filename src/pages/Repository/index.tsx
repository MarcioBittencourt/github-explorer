import { useParams } from "react-router-dom"

const Repository: React.FC = () => {
  const params = useParams();

  console.log("resposta", params);

  return (
    <>
      <h1>Repository:{ params.login }/{ params.repository }</h1>
    </>
  );
}
export default Repository;