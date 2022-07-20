import './App.css';
import ReceivedMessage from './ReceivedMessage/ReceivedMessage';
import SendMessage from './SendMessage/SendMessage';
import React,{useEffect, useState} from 'react';
import axios from 'axios';


// const data = [
//   {
//     user: 'Anand',
//     message: 'kuch bhi nhi samaj aara kya kare...?',
//     time: '12:00'
//   },
//   {
//     user: 'Prajakta',
//     message: 'mujhe bhi thoda thoda smj aa raha hai',
//     time: '12:01'
//   },
//   {
//     user: 'vaibhavi',
//     message: 'tum dono mujhe batao..',
//     time: '12:02'
//   },
//   {
//     user: 'Anand',
//     message: 'prajakta...vaibhavi batao mujhe app...',
//     time: '12:02'
//   },
//   {
//     user: 'Anand',
//     message: 'tum dono ko ata hai n ... smja n',
//     time: '12:02'
//   }
// ]

function App() {
  //const currentUser = "Anand";

  const [data, setData] = useState([]);

  const [currentUser, setCurrentUser] = useState("");

  const [currentMessage, setCurrentMessage] = useState("");

  const [fetchTrigger, setFetchTrigger] = useState(false);


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/message');
      setData(response.data);
    }
    fetchData();
  }, [fetchTrigger]);

  function sendMessage() {
    axios.post('/message', {
      user: currentUser,
      messageType: "text",
      messageBody: currentMessage
    })
    setCurrentMessage("");
    setFetchTrigger(!fetchTrigger);

  }
 
  return (
  
    <div className="container">
      <div className='chatter'>
      <h1 className='text-center'>CHATTER-APP</h1>
      </div>
      <div className='app_card'>
       {
          data.map((item, index) => {
            if(item.user === currentUser){
              return <SendMessage key={index} user={item.user} message={item.messageBody} time={item.time} />
              
            }
            else{
              return <ReceivedMessage key={index} user={item.user} message={item.messageBody} time={item.time} />
            }
          })
       }
       
       <input type="text" className="form-control mt-3" placeholder="Enter Username..."
       onChange={(e)=>{setCurrentUser(e.target.value)}} />

       <input type="text" className="form-control mt-3" placeholder="Enter Message..."
        value={currentMessage}
       onChange={(e)=>{setCurrentMessage(e.target.value)}} />
       
       <button className="btn btn-primary mt-3"
       onClick={sendMessage}>Send</button>
     {/* <SendMessage/>
     <ReceivedMessage/> */}
     </div>
    </div>
  );
}

export default App;
