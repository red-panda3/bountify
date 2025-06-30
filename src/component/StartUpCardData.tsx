import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "D:/project/product/bountify/convex/_generated/api.js";  // ✅ Correct path

function StartUpCardData() {
    const addStartUp = useMutation(api.startupcardschema.addStartUp);  // ✅ Correct API reference
    const [img, setImage] = useState("");
    const [name, setName] = useState("");
    const [minInvestment, setMinInvestment] = useState<number>(0);
    const [expectedYield, setExpectedYield] = useState<number>(0);  // ✅ Fixed typo
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState<number>(0);

    const handleStartUp = () => {
        setLoading(true);
        addStartUp({ img, name, minInvestment, expectedYield, rating })
            .then(() => setLoading(false))
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="flex justify-center items-center gap-20 w-screen h-screen">
            {loading ? (
                <div className="text-4xl">Loading....</div>
            ) : (
                <>
                <div className="w-[40%] h-[80%] flex flex-col gap-6 justify-center">
                    <input 
                        type="text" value={name} placeholder="Name" 
                        className="h-[64px] w-[90%] border-solid border-gray-400 border-3" 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input 
                        type="text" value={img} placeholder="Img" 
                        className="h-[64px] w-[90%] border-solid border-gray-400 border-3" 
                        onChange={(e) => setImage(e.target.value)} 
                    />
                    <input 
                        type="number" value={minInvestment} placeholder="MinInvestment" 
                        className="h-[64px] w-[90%] border-solid border-gray-400 border-3" 
                        onChange={(e) => setMinInvestment(Number(e.target.value))} 
                    />
                    <div>{expectedYield}</div>
                    <input 
                        type="range" value={expectedYield} min={0} max={100} 
                        className="h-[32px] w-[90%] border-solid border-gray-400 border-3" 
                        onChange={(e) => setExpectedYield(Number(e.target.value))} 
                    />
                    <div>{rating}</div>
                    <input 
                        type="range" value={rating} min={0} max={5} 
                        className="h-[32px] w-[90%] border-solid border-gray-400 border-3" 
                        onChange={(e) => setRating(Number(e.target.value))} 
                    />
                    <button 
                        className="bg-gray-400 h-[48px] w-[90%] hover:bg-teal-500 transition duration-300 hover:scale-105"
                        onClick={handleStartUp}
                    >
                        Submit
                    </button>
                </div>
                <div className="w-[40%] h-[60%] bg-green-600"></div>
                </>
                
            )}
        </div>
    );
}

export default StartUpCardData;