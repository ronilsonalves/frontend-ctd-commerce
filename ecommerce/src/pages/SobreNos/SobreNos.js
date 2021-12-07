import React from "react";

import UsersCard from "../../components/UsersCard";

function SobreNos (){
    const users = ['patriciaruffino', 'ronilsonalves']
   
    return (
        <>
        {users.length !== 0 && (
             users.map((usuario)=>(
                <UsersCard integrante={usuario} />
             ))
        )}
       
       
      {/*   {users.map(users => {
				return (
					<div className="card text-center">

						<div className="overflow">
							<img className="fotogit" src={users.avatar_url} alt="git foto" />
						</div>
						< div className="card-body text-dark">
							<h4 className="card-title">{users.name}</h4>
							<p className="card-text text-secondary ">{users.description}</p>
							<a href={users.html_url} className="btn btn-outline-success" target="_blank" rel="noreferrer">Saiba mais</a>
							
							
						</div>
					</div>

				)
			})} */}
        </>
        
    )
}
export default SobreNos;
