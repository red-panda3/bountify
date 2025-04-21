
import { useNavigate } from 'react-router-dom';
import StratUpCard from './StratUpCard';
import Navbar from './Navbar';

function Startuplist() {
    const navigate = useNavigate();
    const gotoNext = (id: string) => {
        navigate(`/startup/${id}`);
    };

    return (
        <div className="h-screen overflow-hidden">
            <Navbar />
            <div className="w-screen h-[90%] flex flex-col items-center gap-8 overflow-y-auto mt-[2%]   pt-5 pb-20">
                <StratUpCard
                    img="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                    name="amazon private Limited"
                    yeild={50}
                    rating="BBB"
                    MinInvestment={1000000}
                    onClick={() => gotoNext('1')} // Example ID
                />
                <StratUpCard
                    img="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                    name="amazon private Limited"
                    yeild={50}
                    rating="BBB"
                    MinInvestment={1000000}
                    onClick={() => gotoNext('2')} // Example ID
                />
                <StratUpCard
                    img="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1paG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                    name="amazon private Limited"
                    yeild={50}
                    rating="BBB"
                    MinInvestment={1000000}
                    onClick={() => gotoNext('3')} // Example ID
                />
                <StratUpCard
                    img="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                    name="amazon private Limited"
                    yeild={50}
                    rating="BBB"
                    MinInvestment={1000000}
                    onClick={() => gotoNext('4')} // Example ID
                />
                <StratUpCard
                    img="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                    name="amazon private Limited"
                    yeild={50}
                    rating="BBB"
                    MinInvestment={1000000}
                    onClick={() => gotoNext('5')} // Example ID
                />
                <StratUpCard
                    img="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                    name="amazon private Limited"
                    yeild={50}
                    rating="BBB"
                    MinInvestment={1000000}
                    onClick={() => gotoNext('6')} // Example ID
                />
            </div>
        </div>
    );
}

export default Startuplist;