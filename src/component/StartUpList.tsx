
import { useNavigate } from 'react-router-dom';
import StratUpCard from './StratUpCard';
import Navbar from './Navbar';
import { useMutation,useQuery } from "convex/react";
import { api } from "D:/project/product/bountify/convex/_generated/api.js"; 
function Startuplist() {
    const navigate = useNavigate();
    const gotoNext = (id: string) => {
        navigate(`/startup/${id}`);
    };
    const  List=useQuery(api.startupcardschema.get)
    return (
        <div className="h-screen overflow-hidden">
            <Navbar />
            <div className="w-screen h-[90%] flex flex-col items-center gap-8 overflow-y-auto mt-[2%]   pt-5 pb-20">
                {List?.map((lst)=>(
                    <StratUpCard
                    img={lst.img}
                    name={lst.name}
                    MinInvestment={lst.minInvestment}
                    rating={lst.rating}
                    yeild={lst.expectedYield}
                    onClick={()=>gotoNext(lst._id)}
                    ></StratUpCard>
                ))}
            </div>
        </div>
    );
}

export default Startuplist;