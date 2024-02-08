import React from 'react';
import './App.css';
function App() {

  const menuItems = ['Dashboard', 'Timesheet', 'Leave','Work From Home','Feedback','Survey','Service Desk','Forms','Travel','Expenses','Resourcing'];
  const tableHeaders = ['Project Type', 'Project Name', 'Task', 'Mon 29', 'Tue 30', 'Wed 31', 'Thu 01', 'Fri 02', 'Sat 03','Total'];
  
  const tablehead = ['Project Name','Project Type', 'Project End Date', 'Allocation End Date','Allocation Extension'];

  const tableData = [
    ['BAU Activity', 
    <select name="Project" className="p-hidden"style={{padding: '5px', color: 'gray', width:'130px'}}id="cars">
<option value="BAU0">Project</option>
<option value="BAU1">BAU_Training</option>
<option value="BAU2">BAU_People</option>
<option value="BAU3">BAU_Delivery</option>
<option value="BAU4">BAU_Sales</option>
</select>, 
<select name="Task" className="p-hidden"style={{padding: '5px', color: 'gray', width:'130px'}}id="cars">
<option value="U0">Task</option>
<option value="U1">Build and Run</option>
<option value="U2">Company Calls</option>
<option value="U3">Complete Training</option>
</select>, <input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,''],
    
    ['Sales Activity', <select name="Project" style={{padding: '5px', color: 'gray', width:'130px'}}id="cars">
    <option value="AU0">Project</option>
    <option value="AU1">Management</option>
    <option value="AU2">Lead Gen</option>
    <option value="AU3">Oppurtunity</option>
    </select>,
    <select name="Task" className="p-hidden"style={{padding: '5px', color: 'gray', width:'130px'}}id="cars">
    <option value="1">Task</option>
    <option value="2"></option>
    </select>, <input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,
<input type='text' style={{width: '35px', height:'20px'}}/>,''],
    
    ['Total Hours', '', '', <div className="value" style={{tabSize: '30px', marginLeft: '20px'}}>0</div>, 
    <div className="value" style={{tabSize: '30px', marginLeft: '20px'}}>0</div>,
    <div className="value" style={{tabSize: '30px', marginLeft: '20px'}}>0</div>,
    <div className="value" style={{tabSize: '30px', marginLeft: '20px'}}>0</div>, 
    <div className="value" style={{tabSize: '30px', marginLeft: '20px'}}>0</div>,
    <div className="value" style={{tabSize: '30px', marginLeft: '20px'}}>0</div>,''],
    ['Machine Hours', '', '', '', '' , '', '', '', '',''],
    ['Break Hours', '', '', '', '' , '', '', '', '',''],
  ];
    
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <div className='left-column'>
        {/* Content for the 30% width div */}
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAiCAYAAACqVHINAAAABHNCSVQICAgIfAhkiAAAAjZJREFUSEu1lj1IHFEUhR2wEIloYSGCsChEJAYTAoqCGDAoBCL+BBLSWRqEVBY2Foq9naWVkDpCGlEECy0UTGxcjPiDxSYkFlkhFsL6HXm7mHVn3nV298Jlduedc7+5b97Mm6CixJHJZBKUHCL7yA4yEZSKQfE6ak2Tk/k1SwIB8JTCK2RtoYsuGgKgh8JLYQBBi4IAeEKNz1GAUkCWKdLpu6+xO6GLYYrP+wBFdQJE0/S4bBAANRRftQBidwLkOeaFckNGAUyUG/IBgNIUsVYX0/WO6kpTxIW8pfqYiRD3iaeTEbx6TkwRt5M3VFeaIi7kNdWVpgho/Z9TnnL8Qi4HQfAtyo1nkPEBE0H3BMOvAuKvnJsBdlaoEJ5XnO9/COQoRPyX8xOAtvPHgbzknNIU6mTPo1RHmsZc4Onlj9IUgmx6lGnGPwE6zOrwdPNbO6IpBNH8++InkPE7EG1UXT5TdlwQ7c/VBsMioA3p8LzgoLREWpAplK0G9RmQWQd5xlFpiZQgej3oQ8wSc4Au8LQj1meQJZKCNKD8aFGjWQJyjKeN30pLrN2+VjC959BkcKwD2UWvvd2yv/9Bv5WFNGLS96svdjDtAGlG2OITM76NPp17QTqj1n9UfMe0jzaBSBkVB2hTEvz3FnY3VFcZFkmMSQPkHN2PbJF7r3q3EMJu6jHmEw8k10EoxC2EKjcdWnl34yQCoqnR+FX+NERuWlxxJYZ68pHLlObZdasLuHT5m/PXYXN8A0QF5eZCS3rAAAAAAElFTkSuQmCC' alt='J'/>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} style={{fontSize: '13px', fontWeight:'400', padding: '2px', cursor:'pointer'}}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='right-column'>
        {/* Content for the 70% width div */}
        <div style={{color:'#19105B',fontSize:'33px',fontWeight: 640,margin:'10px 0px', paddingBottom:'12px'}}>Timesheet</div>
        <p>{!data ? "Loading..." : data}</p>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{color:'#19105B',fontSize:'13px',fontWeight: 500, paddingBottom:'12px'}}>Total Hours: 0.0</div>
        <div style={{color: '#6d6d6d',fontSize:'14px',fontWeight: 600, paddingBottom:'12px'}}>&lt; 29 Jan 2024 - 04 Feb 2024 &gt;</div>
        
        </div>
        <div style={{padding:"11px",background:'#19105B',fontSize:'13px',color:'white',margin:'10px 0px',fontWeight: 600}}>Allocation Extension </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0px', paddingTop:'0px' }}>
          <thead style={{ background: '#c61a54' }}>
            <tr>
              {tablehead.map((header, index) => (
                <th key={index} style={{ color:'#19105B', fontSize:'13px', fontWeight:'640', padding: '11px', textAlign: 'left', background:'#fef4f7'}}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <td style={{ padding: '10px', justifyContent:'center', color:'#6d6d6d', fontWeight:'500', fontSize:'14px' }}>No Options Available</td>                
          </tbody>
        </table>
        <div style={{padding:"11px",background:'#19105B',fontSize:'13px',color:'white',margin:'10px 0px',fontWeight: 600}}>Timesheet </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0px', paddingTop:'0px' }}>
          <thead style={{ background: '#c61a54' }}>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} style={{ color:'#19105B', fontSize:'13px', fontWeight:'640', padding: '11px', textAlign: 'left', background:'#fef4f7'}}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} style={{ borderBottom: '0.5px solid gray' }}>
                {row.map((data, dataIndex) => (
                  <td key={dataIndex} style={{ padding: '10px', textAlign: 'left', color:'#6d6d6d', fontWeight:'500', fontSize:'14px' }}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button style={{ padding: '10px', background: '#19105B', color: 'white', borderRadius: '5px', border: 'none',margin:'0px 10px', cursor: 'pointer' }}>Save</button>
          <button style={{ display: 'flex', alignItems: 'center', padding: '10px', background: '#FF6196', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
            Submit <span style={{ marginLeft: '5px' }}>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;