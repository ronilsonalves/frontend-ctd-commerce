import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row } from 'react-bootstrap';
import UsersCard from "../../components/UsersCard";
import Projeto from "./Projeto";
import Equipe from "./Equipe";


function SobreNos() {
	const users = ['patriciaruffino', 'ronilsonalves', 'henriquetebet', 'patyspro', 'msilvabr', 'SamuelFXavier']

	return (
		<>
			<Helmet>
				<title>CTD Commerce | SOBRE NÓS</title>
			</Helmet>
			<Projeto />
			<Equipe />
			<Container className="container">
				<Row xs={1} sm={2} md={3} lg={3} className="g-3 row ">

					{users.length !== 0 && (
						users.map((usuario) => (
							<UsersCard integrante={usuario} />
						))
					)}
				</Row>
			</Container>






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
