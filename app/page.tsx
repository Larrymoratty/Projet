import { Boxes } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <div className="relative">

      <section className="w-full">
        <div className="relative hero-content text-center mx-4 lg:mx-[15%] py=20">
          <div className="max-w-lg">
            <h1 
              className="text-3x1 md:text-7x1 flex flex-col items center font-bold"
              style={{fontFamily:"Cambria, sans-serif", color:"f9f9f9"}}>
              <div 
                className="p-1 mb-2 rounded-md text-black flex justify-center"
                style={{backgroundColor: "#87CEEB"}}
                >
                <Boxes className="w-8 h-8 md:w-16 md:h-16" />
              </div>
              <span className="text-center">Gabon<span style={{color: "OOFFOO"}}>Connected</span></span>
            </h1>

          </div>

        </div>
      </section>
   
   </div> 
  );
}
