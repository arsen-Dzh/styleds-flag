import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import { IoArrowBack } from  "react-icons/io5"
import {searchByCountry} from "../config";
import {Button} from "../components/Button";
import {Info} from "../components/Info";

export const Details = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(params.name)).then(
        ({data}) => setCountry(data[0])
    );
  }, [params.name])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
        {country &&
            <Info navigate={navigate} {...country}/>
        }
    </div>
  )
}