import Navbar from "./Navbar";

export default function HeroHemoSec() {
    return (
        <>
            <div className="h-screen flex flex-col justify-between p-20 bg-background">
                
                <div className="flex justify-between">
                    <h1 className="font-bold text-6xl">T.</h1>
                    {/* <div className="flex">
                        <p className="text-grey pr-2"> Home </p>
                        <p className="text-lightGrey"> About Work Contact Resume </p>
                    </div> */}
                </div>
                {/* <Navbar/> */}
                
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Thitikarn Kaewtippanet</h1>
                    <div className="text-right">
                        <p>086 382 7266</p>
                        <p>thitikarn.ktpn@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
};