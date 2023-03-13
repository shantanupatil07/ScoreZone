import { useState, useEffect} from "react";
export default function AllPlayers()
{
    var x = 0;
    const [players,setPlayer] = useState([]);
    useEffect(()=>{
    fetch("http://localhost:8082/allPlayers")
    .then(resp => resp.json())
    .then(obj => setPlayer(obj))
    } ,[])
    
    return(
      
        <div>
        <div className="auth-wrapper">
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center mb-5">

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center mb-4">Player Database</h4>
                        <div class="table-wrap">
                            <table class="table table-striped table-hover">
                                <thead class="thead-primary">
                                <tr>
                                        <th>Sr No.</th>
                                        <th>Player Name</th>
                                        <th>Player Position</th>					        
                                        <th>Goals</th>	                                     				        					        	
                                </tr>

                                </thead>
                                <tbody>
                                {
                                                players.map(ut =>{

                                                    return <tr> 
                                                    <td>{++x}</td>
                                                    <td>{ut.first_name} {ut.last_name}</td>
                                                    <td>{ut.player_position}</td>
                                                    <td>{ut.goals}</td>            
                                                    </tr>

                                                })
                                            } 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>


                )
        }