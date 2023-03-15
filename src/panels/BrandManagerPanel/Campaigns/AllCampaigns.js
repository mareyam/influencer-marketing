import React,{useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CampaignsList from '../../BrandManagerPanel/Campaigns/CampaignsList';
import AddIcon from '@mui/icons-material/Add';
import '../../../Style/BrandManagerPanel/AllCampaigns/AllCampaigns.css';
import { ArrowBack, Search, FilterList, ArrowDropDown } from '@material-ui/icons';


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
  const [filteredResults, setFilteredResults] = useState(CampaignsList);
  
    const handleSearch = (event) => {
      const searchText = event.target.value;
      setSearchValue(searchText);
      let results = CampaignsList;
      if (searchText) {
        results = CampaignsList.filter((campaign) => campaign.name.toLowerCase().includes(searchText.toLowerCase()));
      }
      setFilteredResults(results);
    }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row>
          <Col xs={8} sm={8} md={12} lg={12}>
          <div style={{display:"flex"}}><ArrowBack/>
          <h5 className='campaignHeaderAC' >CAMPAIGNS</h5></div>

                <div className="ms-4 d-lg-flex d-xs-block">
                  <div className="align-item-center"><h6>All Campaigns({CampaignsList.length})</h6></div>
                  <div className="d-flex">
                      {/* <input  style={{height:"25px"}} placeholder="Search by name &#x1F50D;"/> */}
                       <input style={{height:"25px"}}  type="text" placeholder="search for name &#x1F50D;" value={searchValue} onChange={handleSearch} />
                        <a href='/BMNewCampaign'>
                        <Button style={{backgroundColor:'#452c63', height:'30px', marginLeft:'5px'}}>
                          <div style={{marginTop:"-6px"}}>
                            Create<AddIcon style={{fontSize:"12px",height:"25px"}}/>
                          </div>
                        </Button></a>
                         <a href='/BMInactiveCampaigns'>
                         <Button style={{backgroundColor:'#452c63', height:'30px', marginLeft:'5px'}}>
                          <div style={{marginTop:"-6px"}}>
                            <p>Inactive campaigns</p>
                          </div>
                        </Button></a>
                  </div>
                    <div className="d-flex d-xs-justify-center d-xs-align-center">
                      <button type="button" className="btn btn-outline-dark d-flex align-items-center" data-mdb-ripple-color="dark" style={{fontSize:"12px",height:"25px"}}><FilterList style={{fontSize:"12px",height:"25px"}} />Filter</button>
                      <button type="button" className="btn btn-outline-dark d-flex align-items-center" data-mdb-ripple-color="dark" style={{fontSize:"12px",height:"25px"}}><ArrowDropDown style={{fontSize:"12px",height:"25px"}} />To</button>
                      <button type="button" className="btn btn-outline-dark d-flex align-items-center" data-mdb-ripple-color="dark" style={{fontSize:"12px",height:"25px"}}><ArrowDropDown style={{fontSize:"12px",height:"25px"}} />From</button>
                    </div>
                </div>
        </Col> 

    <Row className="mainContainerAC">
    {currentItems.map(item => {
    return (
      <Col xs={8} sm={8} md={2} lg={2} className="subContainerAC mx-1">
        <div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><img className="imageAC" src={item.image}/></div>
        <div style={{display: 'flex',justifyContent:'space-between'}}>
        <p className='typeAC'>{item.type}</p>
        <p className="hashtagAC">{item.hashtag}</p>
        </div>
        <h3 className='nameAC'>{item.name}</h3>
        <p className='influencersAC'>{item.influencers}</p>
        <p className='dateAC'>{item.startDate}</p>
        </div>
      </Col>
    )})}
    
    <AllCampaigns
        itemsPerPage={itemsPerPage}
        totalItems={filteredResults.length}
        paginate={paginate}
      />
      </Row></Row>
  </Container>     
  );
};

export default Pagintation;



// import React,{useState} from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import CampaignsList from "./CampaignsList";
// import Search from '@material-ui/icons/Search';
// import AddIcon from '@material-ui/icons/Add';
// import "../../Style/AllCampaigns/AllCampaigns.css"

// const AllCampaigns = () => {
// const [searchValue, setSearchValue] = useState('');
// const [filteredResults, setFilteredResults] = useState(CampaignsList);

// const handleSearch = (event) => {
// setSearchValue(event.target.value);
// let results;
// if (searchValue === '') {
// results = CampaignsList;
// } else {
// results = CampaignsList.filter((campaign) => campaign.name.includes(searchValue));
// }
// setFilteredResults(results);
// }

// return (
//   <Container style={{border:"2px solid green"}} >
//   <h5>DashBoard</h5>
//   <Row style={{border:"2px solid orange"}} >
    {/* <h6 style={{}}>Active Campaigns</h6>
    <input style={{height:"25px"}} className="" type="text" value={searchValue} onChange={handleSearch} />
      <Button style={{height:"25px"}} >
        <div style={{border:"2px solid purple"}} >
         <AddIcon style={{fontSize:"15px"}}/>Create
        </div>
      </Button> */}
      {/* <Col xs={12} sm={12} md={6} lg={6} style={{display:"flex"}}>
          <div className="d-flex">
            <h6 className="my-1">Active Campaigns</h6><input type="text" placeholder="search for campaign" value={searchValue} onChange={handleSearch} />
            <Button>
              <div style={{marginTop:"-6px"}}>
                <AddIcon style={{fontSize:"15px"}}/>
              </div>
            </Button>
          </div>
          <div>
            <p>filter</p>
          </div>
        </Col>
    </Row>
    <Row className="mainContainerAC" style={{border:"2px solid blue"}} >
    {filteredResults.map(item => {
    return (
      <Col xs={8} sm={8} md={2} lg={2} className="subContainerAC mx-1 my-1" style={{border:"2px solid red"}}>
      <div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><img className="imageAC" src={item.image}/></div>
      <div style={{display: 'flex',justifyContent:'space-between'}}>
      <p className='typeAC'>{item.type}</p>
      <p className="hashtagAC">{item.hashtag}</p>
      </div>
      <h3 className='nameAC'>{item.name}</h3>
      <p className='influencersAC'>{item.influencers}</p>
      <p className='dateAC'>{item.startDate}</p>
      </div>
      </Col>
    )})}
    </Row>
  </Container>
);
}

export default AllCampaigns; */}









// import React,{useState} from 'react';
// import { isCompositeComponentWithType } from 'react-dom/test-utils';
// import CampaignsList from "./CampaignsList";
// import { Button } from 'react-bootstrap';
// import { Search } from '@material-ui/icons';
// import AddIcon from '@material-ui/icons/Add';
// import "../../Style/AllCampaigns/AllCampaigns.css"
// import { Grid } from '@material-ui/core';
// const AllCampaigns = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const [filteredResults, setFilteredResults] = useState(CampaignsList);
  
//   const handleSearch = (event) => {
//   setSearchValue(event.target.value);
//   let results;
//   if (searchValue === '') {
//     results = CampaignsList;
//   } else {
//     results = CampaignsList.filter((campaign) => campaign.name.includes(searchValue));
//   }
//   setFilteredResults(results);
//   }

//   return (
//     <div style={{margin: '1%'}}>
//       <h5>DashBoard</h5>
//       <div style={{display: "flex"}}>
//         <h6 style={{marginRight:"10px"}}>Active Campaigns</h6>
//         {/* <input style={{height:"25px"}} type="text"></input><Search className="mx-3"/>\ */}
//         <input style={{height:"25px"}} className="mx-3" type="text" value={searchValue} onChange={handleSearch} />
//         <Button style={{height:"25px"}} >
//           <div style={{marginTop:"-6px"}}>
//              <AddIcon style={{fontSize:"15px"}}/>Create
//           </div>
//         </Button>
//       </div>
//     {/* <div className="mainContainerAC" style={{display: 'flex', flexWrap: "nowrap"}}> */}

//      <Grid item xs={12} container spacing={2} className="mainContainerAC mx-4">
//       {filteredResults.map(item => {
//         return (
//           <Grid className="subContainerAC mx-3 my-3" item lg={2} xs={12}>
//                 <div>
//                 <div><img className="imageAC" src={item.image}/></div>
//                 <div style={{display: 'flex',justifyContent:'space-between'}}>
//                 <p className='typeAC'>{item.type}</p>
//                     <p className="hashtagAC">{item.hashtag}</p>
//                 </div>
//                 <h3 className='nameAC'>{item.name}</h3>
//                 <p className='influencersAC'>{item.influencers}</p>
//                 <p className='dateAC'>{item.startDate}</p>
//                 </div>
//           </Grid>
//         )})}
//       </Grid>
//     </div>    
//     // </div> 
//     );
// }

// export default AllCampaigns;