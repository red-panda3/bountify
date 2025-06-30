
import { useQuery } from "convex/react";
import { api } from "D:/project/product/bountify/convex/_generated/api.js"; 
function Check() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="App">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </div>
  );
}

export default Check;

