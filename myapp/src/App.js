
import './App.css';

function App() {
  const mystyle={
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",    
    backgroundColor:"red" ,
    textDecoration:"none",
    color:"white"
}
const ourstyle={
  // width:"20rem",
  height:"75%",
  justifyContent:"center"
}
const cstyle={
  fontSize:"0.75rem",
  fontStyle:"italic"
}
  return (
    <div className="App d-flex flex-column">
      <header style={ourstyle} className="  h-200 justify-content-center">
      <div className="card">
             <div className="card-body">
               <img className=" p-0 mx-auto" src="https://i.ibb.co/pKkTK8x/logo.png" height="75"></img>
             </div>
       </div>
      </header>


<div  className="container-fluid d-flex justify-content-between">
       <div  className="card bg- ">
             <div className="card-body">
               <img className="w-75 mx-auto" src="https://i.ibb.co/pK8t3QH/1.png"></img>
             </div>
       </div>

       <div className="card ">
             <div  style={cstyle} className="card-body  d-flex flex-column">
               <div>
               C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.

               C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.

               </div>
            <img className="w-75 h-150 mx-auto" src="https://i.ibb.co/pxtpmdx/2.png"></img>
                  <div>
                  C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                  C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS

CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL 
                  </div>
             </div>
       </div>
            </div>
  {/* </section> */}
  <div className="container d-flex">
  <div className="card">
    <div className="card-body">
         <img className=" w-75 mx-auto"src="https://i.ibb.co/6BBsSWT/3.png"></img>
       </div>
       </div>
       </div>
      <footer>
        <div className="container">
<p className="container "> 
C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
</p >
        </div>
        <div className="container d-flex d-flex-row justify-content-between" style={mystyle} >
          
            {/* <div className="card-body" > */}
            <a href="#">Tollfree no:1800 1288 3002 3322</a>
            <a href="https://facebook.com">www.facebook.com</a>
            <a href="https://crigroups.com">www.crigroups.com</a>
        {/* </div> */}
        </div>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default App;
