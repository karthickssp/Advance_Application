// import React, { useState } from 'react';
// import AdminHeader from '../AdminSide/AdminHeader';
// import Footer from '../pages/Footer';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import Button from '@mui/material/Button';

// const AdminManageLoan = () => {
//   const [applicants, setApplicants] = useState([
//     {
//       id: 1,
//       name: 'John Doe',
//       phoneNumber: '123-456-7890',
//       address: '123 Main St, City',
//       panCard: 'ABCDE1234F',
//       salary: '$50,000',
//       purposeOfLoan: 'Home Improvement',
//       status: '', // 'Approved', 'Rejected', or ''
//     },
//     // Add more applicant data as needed
//   ]);

//   const handleApprove = (id) => {
//     setApplicants((prevApplicants) =>
//       prevApplicants.map((applicant) =>
//         applicant.id === id ? { ...applicant, status: 'Approved' } : applicant
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setApplicants((prevApplicants) =>
//       prevApplicants.map((applicant) =>
//         applicant.id === id ? { ...applicant, status: 'Rejected' } : applicant
//       )
//     );
//   };

//   return (
//     <>
//       <AdminHeader />

//       <div style={{ padding: '20px' }}>
//         <h1>Manage Loan</h1>

//         <Table style={{ marginTop: '20px' }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Applicant Name</TableCell>
//               <TableCell>Phone Number</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>PAN Card</TableCell>
//               <TableCell>Salary</TableCell>
//               <TableCell>Purpose of Loan</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {applicants.map((applicant) => (
//               <TableRow key={applicant.id} style={{ backgroundColor: getStatusColor(applicant.status), height: '80px' }}>
//                 <TableCell>{applicant.name}</TableCell>
//                 <TableCell>{applicant.phoneNumber}</TableCell>
//                 <TableCell>{applicant.address}</TableCell>
//                 <TableCell>{applicant.panCard}</TableCell>
//                 <TableCell>{applicant.salary}</TableCell>
//                 <TableCell>{applicant.purposeOfLoan}</TableCell>
//                 <TableCell>
//                   <Button onClick={() => handleApprove(applicant.id)} variant="contained" color="success" style={{ marginRight: '10px' }}>
//                     Approve
//                   </Button>
//                   <Button onClick={() => handleReject(applicant.id)} variant="contained" color="error">
//                     Reject
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       <Footer />
//     </>
//   );
// };

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Approved':
//       return '#8eff8e'; // Green color for approved
//     case 'Rejected':
//       return '#ff8e8e'; // Red color for rejected
//     default:
//       return ''; // Default color
//   }
// };

// export default AdminManageLoan;

import { useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const AdminDashBoard = () => {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "karthick",
      phoneNumber: "9876543210",
      address: "123 Main St, City",
      panCard: "FHU5896",
      salary: "1,00,000",
      purposeOfLoan: "Crop Loan",
      documents: "--------",
      status: "",
    },
    {
      id: 2,
      name: "Kabilan",
      phoneNumber: "9638527410",
      address: "586 Main St, City",
      panCard: "ABCDE1234F",
      salary: "40,000",
      purposeOfLoan: "Cattle Loan",
      documents: "",
      status: "",
    },
    {
      id: 3,
      name: "Jeyam",
      phoneNumber: "9638542965",
      address: "67 chennai St, City",
      panCard: "CDE1234F",
      salary: "60,000",
      purposeOfLoan: "Family Loan",
      documents: "",
      status: "",
    },
  ]);

  const handleApprove = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: "Approved" } : applicant
      )
    );
  };

  const handleReject = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: "Rejected" } : applicant
      )
    );
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            padding: "10px",
            textAlign: "center",
          }}
        >
          Manage Loan
        </h1>

        <Table style={{ marginTop: "20px", border: "2px solid black" }}>
          <TableHead>
            <TableRow >
              <TableCell>Applicant Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>PAN Card</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Purpose of Loan</TableCell>
              <TableCell>View Document</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.map((applicant) => (
              <TableRow
                key={applicant.id}
                style={{
                  backgroundColor: getStatusColor(applicant.status),
                  height: "80px",
                  transition: "background-color 0.3s",
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                }}
              >
                <TableCell>{applicant.name}</TableCell>
                <TableCell>{applicant.phoneNumber}</TableCell>
                <TableCell>{applicant.address}</TableCell>
                <TableCell>{applicant.panCard}</TableCell>
                <TableCell>{applicant.salary}</TableCell>
                <TableCell>{applicant.purposeOfLoan}</TableCell>
                <TableCell><Button  variant="contained">View</Button></TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleApprove(applicant.id)}
                    variant="contained"
                    color="success"
                    style={{ marginRight: "10px" }}
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleReject(applicant.id)}
                    variant="contained"
                    color="error"
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Approved":
      return "#8eff8e";
    case "Rejected":
      return "#FF474D"; 
    default:
      return "";
  }
};

export default AdminDashBoard;
