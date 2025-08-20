import ParticlesBackground from "../components/background/Background";
import Welcome from "../components/Welcome/Welcome";


 const WelcomePage=()=>{
    return (
    <>
       <div className="relative min-h-screen">
        <Welcome />
      <ParticlesBackground />
      
      
    </div>
    </>
  )
}

export default WelcomePage