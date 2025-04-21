
import { useParams } from 'react-router-dom'

function Startupdetails() {
    const {id}=useParams();
  return (
    <div>Id:{id}</div>
  )
}

export default Startupdetails