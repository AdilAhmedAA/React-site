import React, { useState, useEffect } from 'react';
import './Projects.css';
import Projects__Card from './Projects__Card';
import Select from 'react-select';
import { Button } from './Button';
import db from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import Modal from 'react-bootstrap/Modal';

const options = [
  { value: 'Category', label: 'Category', disabled: true },
  { value: 'Consultance', label: 'Consultance' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'Web Design', label: 'Web Design' },
  { value: 'status', label: 'Status', disabled: true },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Completed', label: 'Completed' }
];

function replaceAt(string, index, char) {
  return string.substring(0, index) + char + string.substring(index + 1);
}

function src(e) {
  const string = 'images/project0.png';
  const newString = replaceAt(string, 14, e);
  return newString;
}

function Projectsapp() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);

  useEffect(() => {
    onSnapshot(collection(db, 'Projects'), (snapshot) => {
      setProjects(snapshot.docs.map((doc) => doc.data()));
      console.log(projects);
    });
  }, []);

  useEffect(() => {
    const filteredProjects = projects.filter((project) => {
      if (selectedCriteria.length === 0) {
        return true;
      }

      return (
        selectedCriteria.includes(project.type) ||
        selectedCriteria.includes(project.status)
      );
    });

    setFilteredProjects(filteredProjects);
    setCurrentPage(1);
  }, [selectedCriteria, projects]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProjects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleCriteriaChange(selectedOptions) {
    const newSelectedCriteria = selectedOptions.map((option) => option.value);
    setSelectedCriteria(newSelectedCriteria);
    setSelectedOptions(selectedOptions);
  }

  function handleSelectAll() {
    setSelectedCriteria([]);
    setSelectedOptions([]);
  }

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='Projects'>
      <div className="container">
        <div className="inner">
          <div className="head">
            <h3>Portfolio</h3>
            <h2>Our Projects</h2>
          </div>
          <div className="Projects__Filter">
            <Select
              isMulti
              value={selectedOptions}
              onChange={handleCriteriaChange}
              options={options}
              isOptionDisabled={(option) => option.disabled}
            />
            <Button onClick={handleSelectAll} buttonStyle='btn--primary' buttonSize='btn--medium' text='Show All' />
          </div>

          <div className="Projects__Cards">
            {currentProjects.map((item, index) => (
              <Projects__Card
                key={item.id}
                // image={src(index)}
                image={item.src}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
          <div className="pagination">
            <button className='Prev' onClick={prevPage}>&lt;</button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={number === currentPage ? 'current-page' : ''}
              >
                {number}
              </button>
            ))}
            <button className='Next' onClick={nextPage}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectsapp;





// import React, { useState, useEffect } from 'react';
// import './Projects.css';
// import Projects__Card from './Projects__Card';
// import Select from 'react-select'
// import { Button } from './Button'
// import db from '../firebase'
// import { onSnapshot , collection } from 'firebase/firestore';
// /*--------------------------------------------------------------------------------------------------------------*/
// /*--------------------------------------------------------------------------------------------------------------*/

// import Modal from 'react-bootstrap/Modal';



// const options = [
//   { value: 'Category', label: 'Category', disabled: true },
//   { value: 'Consultance', label: 'Consultance' },
//   { value: 'Web Development', label: 'Web Development' },
//   { value: 'Web Design', label: 'Web Design' },
//   { value: 'status', label: 'Status' , disabled: true  },
//   { value: 'In Progress', label: 'In Progress' },
//   { value: 'Completed', label: 'Completed' }
// ];

// // const Projects = [
// //   {
// //     id: '0',
// //     title: 'Rocket Science',
// //     desc: 'Web Development',
// //     type: 'Web Development',
// //     status: 'In Progress',
// //   },
// //   {
// //     id: '1',
// //     title: 'Sketch',
// //     desc: 'Consultance',
// //     type: 'Consultance',
// //     status: 'Completed',
// //   },
// //   {
// //     id: '2',
// //     title: 'Mr Robot',
// //     desc: 'Web Design',
// //     type: 'Web Design',
// //     status: 'In Progress',
// //   },
// //   {
// //     id: '3',
// //     title: 'To-Do-List',
// //     desc: 'Web Design',
// //     type: 'Web Design',
// //     status: 'Completed',
// //   },
// //   {
// //     id: '4',
// //     title: 'Good Workplace',
// //     desc: 'Consultance',
// //     type: 'Consultance',
// //     status: 'In Progress',
// //   },
// //   {
// //     id: '5',
// //     title: 'Single Person',
// //     desc: 'Web Development',
// //     type: 'Web Development',
// //     status: 'Completed',
// //   },
// //   {
// //     id: '6',
// //     title: 'Rocket Science',
// //     desc: 'Web Development',
// //     type: 'Web Development',
// //     status: 'In Progress',
// //   },
// //   {
// //     id: '7',
// //     title: 'Sketch',
// //     desc: 'Consultance',
// //     type: 'Consultance',
// //     status: 'Completed',
// //   },
// //   {
// //     id: '8',
// //     title: 'Mr Robot',
// //     desc: 'Web Design',
// //     type: 'Web Design',
// //     status: 'In Progress',
// //   },
// //   {
// //     id: '9',
// //     title: 'To-Do-List',
// //     desc: 'Web Design',
// //     type: 'Web Design',
// //     status: 'Completed',
// //   },
// //   {
// //     id: '10',
// //     title: 'Good Workplace',
// //     desc: 'Consultance',
// //     type: 'Consultance',
// //     status: 'In Progress',
// //   },
// //   {
// //     id: '11',
// //     title: 'Single Person',
// //     desc: 'Web Development',
// //     type: 'Web Development',
// //     status: 'Completed',
// //   },
// // ];

// // function ProjectForm({ addProject }) {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     desc: '',
// //     type: '',
// //     status: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Create a new project object with the form data.
// //     const newProject = {
// //       id: String(Projects.length), // Generate a unique ID for the new project
// //       ...formData,
// //     };

// //     // Call the addProject function to add the new project to the projects array.
// //     addProject(newProject);

// //     // Clear the form inputs.
// //     setFormData({
// //       title: '',
// //       desc: '',
// //       type: '',
// //       status: '',
// //     });
// //   };
// //   return (
// //     <div className="ProjectForm">
// //       <h2>Add a New Project</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="title">Title:</label>
// //           <input
// //             type="text"
// //             id="title"
// //             name="title"
// //             value={formData.title}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="desc">Description:</label>
// //           <input
// //             type="text"
// //             id="desc"
// //             name="desc"
// //             value={formData.desc}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="type">Type:</label>
// //           <input
// //             type="text"
// //             id="type"
// //             name="type"
// //             value={formData.type}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="status">Status:</label>
// //           <input
// //             type="text"
// //             id="status"
// //             name="status"
// //             value={formData.status}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button className='btn--primary btn--medium' type="submit">Add Project</button>
// //       </form>
// //     </div>
// //   );
// // }

// function replaceAt(string, index, char) {
//     return string.substring(0, index) + char + string.substring(index + 1);
//   }
  
//   function src(e) {
//     const string = 'images/project0.png';
//     const newString = replaceAt(string, 14, e);
//     return newString;
//   }
  
//   function Projectsapp() {
//     const [projects, setProjects] = useState([]);
//      // Use the Projects array directly
//     const [filteredProjects, setFilteredProjects] = useState([]);
//     const [selectedCriteria, setSelectedCriteria] = useState([]);
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [projectsPerPage] = useState(6); // Number of projects per page
  
//     useEffect(() => {
//       // Filter the projects based on the selected criteria.
//       onSnapshot(collection(db, 'Projects'),(snapshot)=> {
//         setProjects(snapshot.docs.map(doc => doc.data()));
//       });
//       const filteredProjects = projects.filter((project) => {
//         // If no criteria selected, show all projects.
//         if (selectedCriteria.length === 0) {
//           return true;
//         }
  
//         // Check if the project type or status is included in the selected criteria.
//         return (
//           selectedCriteria.includes(project.type) ||
//           selectedCriteria.includes(project.status)
//         );
//       });
  
//       // Set the filteredProjects state variable.
//       setFilteredProjects(filteredProjects);
//       setCurrentPage(1); // Reset to the first page when criteria change.
//     }, [selectedCriteria, projects]);
//     // Calculate the index of the last project on the current page.
//     const indexOfLastProject = currentPage * projectsPerPage;
//     // Calculate the index of the first project on the current page.
//     const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//     // Slice the array of projects to display only the ones on the current page.
//     const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
//     // Function to change the current page.
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
//     // Array to hold the page numbers.
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(filteredProjects.length / projectsPerPage); i++) {
//       pageNumbers.push(i);
//     }
  
//     function handleCriteriaChange(selectedOptions) {
//       const newSelectedCriteria = selectedOptions.map((option) => option.value);
//       setSelectedCriteria(newSelectedCriteria);
//       setSelectedOptions(selectedOptions);
//     }
  
//     function handleSelectAll() {
//       // Clear all selected criteria and selected options.
//       setSelectedCriteria([]);
//       setSelectedOptions([]);
//     }
  
//     // Function to go to the next page.
//     const nextPage = () => {
//       if (currentPage < pageNumbers.length) {
//         setCurrentPage(currentPage + 1);
//       }
//     };
  
//     // Function to go to the previous page.
//     const prevPage = () => {
//       if (currentPage > 1) {
//         setCurrentPage(currentPage - 1);
//       }
//     };
    
//   // Function to add a new project to the projects array and update localStorage
//     // const addProject = (newProject) => {
//     //   const updatedProjects = [...projects, newProject];
//     //   setProjects(updatedProjects);
//     //   localStorage.setItem('projects', JSON.stringify(updatedProjects));
//     // };

//     // function Modalform() {
//     //   const [show, setShow] = useState(false);
    
//     //   const handleClose = () => setShow(false);
//     //   const handleShow = () => setShow(true);
    
//     //   return (
//     //     <div className='Project-form'>
//     //       <Button onClick={handleShow} buttonStyle='btn--primary' buttonSize='btn--medium' text='Add Project' />
    
//     //       <Modal  show={show} onHide={handleClose}>
//     //         <Modal.Header closeButton>
//     //           <Modal.Title><a onClick={handleClose} /></Modal.Title>
//     //         </Modal.Header>
//     //         <Modal.Body><ProjectForm addProject={addProject} /></Modal.Body>
//     //       </Modal>
//     //     </div>
//     //   );
//     // }
//     console.log(projects);
//     return (

//       <div className='Projects'>
//       <div className="container">
//         <div className="inner">
//           <div className="head">
//             <h3>Portfolio</h3>
//             <h2>Our Projects</h2>
//           </div>
//           <div className="Projects__Filter">
//             <Select
//               isMulti
//               value={selectedOptions}
//               onChange={handleCriteriaChange}
//               options={options}
//               isOptionDisabled={(option) => option.disabled}
//             />
//             <Button onClick={handleSelectAll} buttonStyle='btn--primary' buttonSize='btn--medium' text='Show All' />
//             {/* <Modalform /> */}
//           </div>

//           <div className="Projects__Cards">
//             {currentProjects.map((item, index) => (
//               <Projects__Card
//                 key={item.id}
//                 image={src(index)}
//                 title={item.title}
//                 desc={item.desc}
//               />
//             ))}
//           </div>
//             {/* Pagination */}
//             <div className="pagination">
//               <button className='Prev' onClick={prevPage}>&lt;</button>
//               {pageNumbers.map((number) => (
//                 <button
//                   key={number}
//                   onClick={() => paginate(number)}
//                   className={number === currentPage ? 'current-page' : ''}
//                 >
//                   {number}
//                 </button>
//               ))}
//               <button className='Next' onClick={nextPage}>&gt;</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Projectsapp;

