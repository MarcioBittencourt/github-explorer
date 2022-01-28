import { useParams } from "react-router-dom"

const Repository: React.FC = () => {
  const params = useParams();

  return (
    <>
      <h1>Repository:{ params }</h1>
    </>
  );
}
export default Repository;