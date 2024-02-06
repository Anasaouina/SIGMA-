import React from "react";
import App from "../../App";
import './Liveconf.css';



const Liveconf =() =>{
return(
<div className="liveconf container">
<h1 className="text-center fw-bold"><span>diffusion</span> en direct</h1>
<h4 className="text-center fw-bold mt-5">Y'a aucun live maintenant</h4>
<div className="iframe">
<iframe width="560" height="315" className="" src="https://www.youtube.com/embed/nx99v_MZliY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

);

}
export default Liveconf;