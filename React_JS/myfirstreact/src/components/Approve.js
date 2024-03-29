import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
var ApproveTourMan = () => {

	const [utour, setUTour] = useState([]);
	useEffect(() => {
		fetch("http://54.243.238.129:8082/approveTourMan")
			.then(resp => resp.json())
			.then(obj => setUTour(obj))
	}, [])

	const nav = useNavigate();

	const approve = (uid) => {
		console.log(uid)
		fetch("http://54.243.238.129:8082/updateTourManStatus?uid=" + uid)
			.then(resp => resp.json())
			.then(obj => {
				console.log(JSON.stringify(obj))
				if (obj) {
					alert("Updation done")
					nav("/admin_home/approveTour")
					window.location.reload();
				}
				else
					alert("Updation failed")

			})
	}
	return (
		<div className="card shadow text-center" style={{ width: "60%", right: "-20%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
			<div className="card-body">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">

					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						{
							utour.length > 0 ?
								<div>
									<h4 className="text-center mb-4">List of Pending Approvals </h4>
									<div className="table-wrap">


										<table className="table">
											<thead className="thead-primary">
												<tr>
													<th>Tournament Manager ID</th>
													<th>Tournament Manager Name</th>
													<th>Email</th>
													<th>UserName</th>
													<th colSpan="2" style={{ textAlign: "center" }}>Remark </th>
												</tr>

											</thead>
											<tbody>
												{
													utour.map(ut => {
														return <tr key={ut.uid}> <td>{ut.uid}</td>
															<td>{ut.first_name} {ut.last_name}</td>
															<td>{ut.email}</td>
															<td>{ut.username}</td>
															<td><button onClick={() => { approve(ut.uid) }} className="btn btn-primary">Approve</button></td>
															<td><a href="/admin_home" className="btn btn-danger">Reject</a></td>
														</tr>

													})

												}
											</tbody>
										</table>
									</div>
								</div>
								: <h2>No Pending Requests</h2>
						}
					</div>

				</div>
			</div>
		</div>
	)
}



var ApproveTeamMan = () => {


	const nav = useNavigate();

	const approve = (uid) => {
		console.log(uid)
		fetch("http://54.243.238.129:8082/updateTeamManStatus?uid=" + uid)
			.then(resp => resp.json())
			.then(obj => {
				console.log(JSON.stringify(obj))
				if (obj) {
					alert("Updation done")
					nav("/admin_home/approveTeamM")
					window.location.reload();
				}
				else
					alert("Updation failed")

			})
	}

	const [uteam, setUTeam] = useState([]);
	useEffect(() => {
		fetch("http://54.243.238.129:8082/approveTeamMan")
			.then(resp => resp.json())
			.then(obj => setUTeam(obj))
	}, [])

	return (
		<div className="card shadow text-center" style={{ width: "60%", right: "-20%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
			<div className="card-body">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-6 text-center mb-5">

						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							{
								uteam.length > 0 ?
									<div>
										<h4 className="text-center mb-4">List of Pending Approvals </h4>
										<div className="table-wrap">
											<table className="table">
												<thead className="thead-primary">
													<tr>
														<th>Team Manager ID</th>
														<th>Team Manager Name</th>
														<th>Email</th>
														<th>UserName</th>
														<th colSpan="2" align="center">Remark </th>
													</tr>

												</thead>
												<tbody>
													{
														uteam.map(uut => {
															if (uut !== null) {
																return <tr> <td>{uut.uid}</td>
																	<td>{uut.first_name} {uut.last_name}</td>
																	<td>{uut.email}</td>
																	<td>{uut.username}</td>
																	<td><button onClick={() => { approve(uut.uid) }} className="btn btn-primary">Approve</button></td>
																	<td><button type="submit" className="btn btn-danger" >Reject</button></td>
																</tr>
															}
														})
													}
												</tbody>
											</table>
										</div>
									</div>
									: <h2>No Pending Requests</h2>
							}
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export { ApproveTeamMan, ApproveTourMan };