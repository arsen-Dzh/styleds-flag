import { useParams } from "react-router-dom";

export const Details = () => {
  let params = useParams();

  return (
    <div>Details {params.name}</div>
  )
}