import React,{useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RegisteredInfluencersList from './RegisteredInfluencersList';
import AddIcon from '@mui/icons-material/Add';
import "../../../Style/BrandManagerPanel/AllCampaigns/AllCampaigns.css"
import { ArrowBack, Search, FilterList, ArrowDropDown } from '@material-ui/icons';
import Card from 'react-bootstrap/Card';
import LaunchIcon from '@mui/icons-material/Launch';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Accordion from 'react-bootstrap/Accordion';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import InputRange from 'react-input-range';


const AllCampaigns = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i); //number of pages i.e 3
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href={currentPage} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Pagintation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');
  const [filteredResults, setFilteredResults] = useState(RegisteredInfluencersList);
 
    const handleSearch = (event) => {
      const searchText = event.target.value;
      setSearchValue(searchText);
      let results = RegisteredInfluencersList;
      if (searchText) {
        results = RegisteredInfluencersList.filter((campaign) => campaign.name.toLowerCase().includes(searchText.toLowerCase()));
      }
      setFilteredResults(results);
    }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container >
      <Row>
         <Col xs={8} sm={8} md={12} lg={2}>
            <div style={{border:'2px solid red'}}>
              <h6>Filters</h6>
              <AllCollapseExample/>
            </div>
          </Col>
          <Col xs={8} sm={8} md={12} lg={10}>
          <div style={{display:"flex"}}><ArrowBack/>
          <h5 className='campaignHeaderAC' >CAMPAIGNS</h5></div>

                <div className="ms-4 d-lg-flex d-xs-block" >
                  <div className="align-item-center"><h6>All Campaigns({RegisteredInfluencersList.length})</h6></div>
                  <div className="d-flex">
                      <input  style={{height:"25px"}} placeholder="Search by name &#x1F50D;"/>
                      <Button style={{backgroundColor:'#452c63',fontSize:"12px",height:"25px", marginLeft:'5px'}}>
                        <div style={{marginTop:"-6px"}}>
                          <a href="/BMCompare" className="mx-3" style={{display: 'block', textDecoration:'none'}}>
                            <p>Compare<CompareArrowsIcon style={{fontSize:"15px",height:"25px"}}/></p>
                          </a>
                        </div>
                      </Button>
                    </div>
                    <div className="d-flex d-xs-justify-center d-xs-align-center">
                      <button type="button" className="btn btn-outline-dark d-flex align-items-center" data-mdb-ripple-color="dark" style={{fontSize:"12px",height:"25px"}}><FilterList style={{fontSize:"12px",height:"25px"}} />Filter</button>
                      <button type="button" className="btn btn-outline-dark d-flex align-items-center" data-mdb-ripple-color="dark" style={{fontSize:"12px",height:"25px"}}><ArrowDropDown style={{fontSize:"12px",height:"25px"}} />To</button>
                      <button type="button" className="btn btn-outline-dark d-flex align-items-center" data-mdb-ripple-color="dark" style={{fontSize:"12px",height:"25px"}}><ArrowDropDown style={{fontSize:"12px",height:"25px"}} />From</button>
                    </div>
                </div>

                <Row className="mainContainerARI ms-4">
    {currentItems.map(item => {
    return (
      <Col xs={8} sm={8} md={2} lg={2} className="subContainerARI mx-3 my-3">
      <Card style={{ height: "100%", width:"200px"}}>
        <Card.Img style={{height:"150px", width:"100%", objectFit:"cover"}} className="CardImg" src={item.image} />
        <Card.Body className="d-flex flex-column">
          <Card.Text className="d-flex flex-column align-items-center justify-content-center text-center flex-grow-1" style={{ fontFamily: 'Oswald' }}>
            <h6 style={{ fontWeight: "bolder", fontSize: "20px" }}>{item.name}</h6>
            <p style={{fontSize: '13px'}}>@{item.userName}</p>
            <p style={{ fontSize: "15px", marginTop:"-10px" }}>{item.followers}K</p>
            <button type="button" className="btn btn-dark d-flex align-items-center justify-content-center" data-mdb-ripple-color="dark" style={{ marginTop:"-10px", fontSize: "12px", height: "35px", width: '100%' }}>
              <p style={{ fontSize: '12px', margin: '0px' }}>Instagram Link</p>
              <LaunchIcon style={{ fontSize: "12px", height: "25px" }} />
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    )})}
    
    <AllCampaigns
        itemsPerPage={itemsPerPage}
        totalItems={filteredResults.length}
        paginate={paginate}
      />
        </Row>
         </Col> 
      </Row>
  </Container>     
  );
};

export default Pagintation;


function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Select Gender</Accordion.Header>
        <Accordion.Body>
          <GenderCheckbox/>  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Parents?</Accordion.Header>
        <Accordion.Body>
          <ParentCheckbox/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


function GenderCheckbox() {
  const [gender, setGender] = useState('');

  const handleGenderCheckbox = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="male"
          checked={gender === 'male'}
          onChange={handleGenderCheckbox}
        />
        Male
      </label><br/>
      <label>
        <input
          type="checkbox"
          value="female"
          checked={gender === 'female'}
          onChange={handleGenderCheckbox}
        />
        Female
      </label>
    </div>
  );
}

function ParentCheckbox() {
  const [isParent, setIsParent] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
   const [childAge, setChildAge] = useState("");
   const [values, setValues] = useState({ min: 0, max: 100 });


  const handleParentCheckbox = (e) => {
    setIsParent(e.target.checked);
  }

  const handleChildrenCountAdd = () => {
    setChildrenCount(childrenCount + 1);
  }

  const handleChildrenCountMinus = () => {
    if (childrenCount == 0)
      childrenCount = 0;
    setChildrenCount(childrenCount - 1);
  }

   function handleChildAge(event) {
    setChildAge(event.target.value);
  }

  const handleChange = (values) => {
    setValues(values);
  };


  return (
    <div>
      <div>
        <label> 
          <input type='checkbox' onChange={handleParentCheckbox} />
          Are you a parent?
        </label>
      </div>

      <div>
        <div>How many children do you have?</div>
        <div>
          <AddCircleOutlineRoundedIcon onClick={handleChildrenCountAdd}/>
          {childrenCount}
          <RemoveCircleOutlineRoundedIcon onClick={handleChildrenCountMinus}/>
        </div>
      </div>
      <div>
        <div>Children age group?</div>
        <div>
           <select value={childAge} onChange={handleChildAge}>
              <option value=''></option>
              <option value=''>0-12 months old</option>
              <option value=''>1-2 years old</option>
              <option value=''>3-6 years old</option>
              <option value=''>7-12 years old</option>
              <option value=''>13-18 years old</option>
              <option value=''>Adult years old</option>
           </select>
           <p>selected is {childAge} </p>
        </div>
      </div>
      <div>
      <InputRange
        minValue={0}
        maxValue={100}
        value={values}
        onChange={handleChange}
        draggableTrack
        allowSameValues
      />
      <p>Min: {values.min}</p>
      <p>Max: {values.max}</p>
      </div>


    </div>
  )
}



//bootstrap card componentn
{/* <Card >
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Text className="align-items-center justify-content-center text-center" style={{fontFamily: 'Oswald'}}>
            <h6 style={{fontWeight:"bolder", fontSize:"20px"}}>{item.name}</h6>
            <p>{item.userName}</p>
            <p style={{fontSize:"15px"}}>{item.followers}K</p>
          </Card.Text>
            <button type="button" className="btn btn-dark d-flex align-items-center justify-content-center" data-mdb-ripple-color="dark" style={{fontSize: "12px", height: "35px", width: '100%'}}>
              <p style={{fontSize: '12px', margin: '0px'}}>Instagram Link</p>
              <LaunchIcon style={{fontSize:"12px",height:"25px"}}/>
            </button>
        </Card.Body>
      </Card>

       */}






















       // import React,{useState} from 'react';
// import RegisteredInfluencersList from "../../components/brandManagerDashboard/RegisteredInfluencers/RegisteredInfluencersList";
// import { Container, Row, Col } from 'react-grid-system';
// import "../../Style/AllRegisteredInfluencers/AllRegisteredInfluencers.css";


// const AllRegisteredInfluencers = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i); //number of pages i.e 3
//   }
//   return (
//     <nav>
//       <ul className='pagination'>
//         {pageNumbers.map(number => (
//           <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
//             <a onClick={() => paginate(number)} href={currentPage} className='page-link'>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };


// const Pagintation = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);
//   const [searchValue, setSearchValue] = useState('');
//   const [filteredResults, setFilteredResults] = useState(RegisteredInfluencersList);
  
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);

//   const handleSearch = (event) => {
//       const searchText = event.target.value;
//       setSearchValue(searchText);
//       let results = RegisteredInfluencersList;
//       if (searchText) {
//         results = RegisteredInfluencersList.filter((campaign) => campaign.name.toLowerCase().includes(searchText.toLowerCase()));
//       }
//       setFilteredResults(results);
//     }
//   const paginate = pageNumber => setCurrentPage(pageNumber);
 
//   return (
//     <Container className="">
//       {/* row and container same occupt */}
//       <Row className="mt-1">
//         <Col xs={7} sm={7} md={12} lg={12} >
//             <div style={{display: "flex", justifyContent: "space-between"}}>
//               <div>
//                 <h6>Registred Inflencers ({RegisteredInfluencersList.length})</h6>
//               </div>
//               <div style={{display:"flex"}}>
//                 <input style={{height:"25px"}} placeholder="Search by name" type="text" value={searchValue} onChange={handleSearch}></input>
//                 <p style={{fontSize:"13px"}}>Filters</p>
//               </div>
//             </div>
      
//         </Col>
//         {currentItems.map(item => {
//               return (
//                 // cards below
//           <Col xs={12} sm={12} md={5} lg={2} className="subContainerARI mx-2">
//               <div className='subContainer2ARI'>
//                 <div className='subContainer3ARI'><img className="imageARI" src={item.image}/></div>
//                   <div className='' style={{textAlign:"center"}}>
//                     <h3 className='nameARI'>{item.name}</h3>
//                     <p className='usernameARI'>{item.userName}</p>
//                     <p className="followersARI">{item.followers}K</p>
//                  </div>
//               </div>
//           </Col>
//         )})}
//     </Row>
//     <AllRegisteredInfluencers
//         itemsPerPage={itemsPerPage}
//         totalItems={filteredResults.length}
//         paginate={paginate}
//       />
//     </Container>
//   );
// }

// export default Pagintation;