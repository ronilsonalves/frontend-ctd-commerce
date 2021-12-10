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
				<title>CTD Commerce | Sobre nós</title>
			</Helmet>
			<Projeto />
			<Equipe />
			<Container className="container">
				<Row xs={1} sm={2} md={3} lg={3} className="g-3 row ">

					{users.length !== 0 && (
						users.map((usuario) => (
							<UsersCard integrante={usuario} key={usuario.id} />
						))
					)}
				</Row>
			</Container>

		</>

	)
}
export default SobreNos;
