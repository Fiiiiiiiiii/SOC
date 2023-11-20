import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function layout({ children }){
    return (
        <div>
            <Navbar/>

            <div className="container">
                {children}
            </div>
            
            <Footer/>
        </div>
    )
}