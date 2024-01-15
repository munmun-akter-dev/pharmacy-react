import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './style.css';

function SignupForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  
  const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(`Name ${name}`)
      console.log(`Email ${email}`)
      console.log(`City ${city}`)
      console.log(`Address ${address}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
         Name<br/>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
     
      <div>
        Email<br/>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        City<br/>
        <select onChange={(e)=>setCity(e.target.value)}>
          <option value="1">Dhaka</option>
          <option value="2">Khulna</option>
        </select>
      </div>
      <div>
        Address<br/>
        <textarea
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
     
      <input type="submit" value="Submit" />
    </form>
  );
}


function TestForm() {

  const [inputField , setInputField] = useState({
      first_name: '',
      last_name: '',
      gmail: ''
  })
  
  const inputsHandler = (e) =>{

    /*
      const { name, value } = e.target;
     setInputField((prevState) => ({
       ...prevState,[name]: value
     }));
  */

     setInputField((inputField) => ({
      ...inputField, [e.target.name]: e.target.value,
    }));
  }
  
  const submitButton = () =>{
      console.log(inputField.first_name);
      console.log(inputField.last_name);
      console.log(inputField.gmail);
  }
  
  return (
      <div>
          <input 
          type="text" 
          name="first_name" 
          onChange={inputsHandler} 
          placeholder="First Name" 
          value={inputField.first_name}/>
  
          <br/>
  
          <input 
          type="text" 
          name="last_name" 
          onChange={inputsHandler} 
          placeholder="First Name" 
          value={inputField.last_name}/>
  
          <br/>
  
          <input 
          type="gmail" 
          name="gmail" 
          onChange={inputsHandler} 
          placeholder="Gmail" 
          value={inputField.gmail}/>
  
          <br/>
  
          <button onClick={submitButton}>Submit Now</button>
      </div>
  )
  }

function Blog(props){
  const sidebar=(
   <ul>
     {props.posts.map(post=>
       <li key={post.id}>{post.title}</li>
     )
     }
   </ul>
  );
  return(<>
    {sidebar}
  </>);
}


function Header(){
    return(
        <div className="logo" style={{backgroundColor:'lightgray'}}>
            Haat Bazzar 
        </div>
    );
}

function Footer(props){
    return(
        <div style={{backgroundColor:'lightgray',padding:'20px'}}>
            Copyright&copy;{props.year}
        </div>
    );
}

function Welcome(props){
    return(<>
       <h1>Welcome {props.name}!</h1>    
    </>);
}

function Item(props) {
    return (
      <div title={props.title}>
        {props.children}
      </div>
    );
}

function MyForm() {

    function deleteRow(id,e){
      console.log(id);
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button onClick={(e) =>deleteRow(10, e)}>Delete Row</button>
        <button type="submit">Submit</button>
      </form>
    );
}

function IMayGo(props){
  return(<>
  {!props.isRaining && <h1>I'm Coming...</h1> }
  </>);
}

function MyColor(props){
   
    if(props.color=="red"){
     return(<div style={{color:"red"}}>
       <h1>My Color</h1>
     </div>);
    }else{
        return(<div style={{color:"gray"}}>
            <h1>My Color</h1>
        </div>);
    }
}

function Service({value,children}){

  return(<>
     <div value={value}>{children}</div>  
  </>);

}

function MyList(props){
   const numbers=props.numbers;
   const output=numbers.map((number,i)=>
     <li key={i.toString()}>{number*2}</li>
   );
   
   let str="";
   for(let i=1;i<=10;i++){
       str+=i+","
   }
  
   
   return(
    <ul>
     {output}
    </ul>
   );

}

function Root(){
   const numbers=[3,5,7,8,3,4,12]

   const posts=[
    {id:1,title:"Hello World"},
    {id:2,title:"installation"}
   ]

    return(
        <>
        <Button variant="contained">Hello World</Button>
          <Header/>
          <SignupForm/>
           <TestForm />
            <Blog posts={posts}/>
           <Welcome name="Jahid" />
           <IMayGo isRaining={false} />
           <MyForm/>
           <MyColor color="red" />
           <MyList numbers={numbers} />
           <Item title="this is a mobile phone">Mobile</Item>
           <Service value="test">Service Item 1</Service>
          <Footer year="2023" />
        </>
    );
}

export default Root;