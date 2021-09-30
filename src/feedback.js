import "./feedback.css"
const Feedback = () => {
    return (
     <div class = "A">
<br></br><br></br><br></br>
<div class = "main">
      <div class="wrapper">
       <form>
         <div class="field">
           <input type="text" id="name" name="name" placeholder="Who are you?" autofocus/>
           <label for="name">Name</label>
         </div>
         <div class="field">
           <input type="text" id="email" name="email" placeholder="xyz@hotmail.com" />
           <label for="email">EMAIL</label>
         </div>
         <div class="field">
           <textarea id="msg" rows="4" name="msg" placeholder="You message..."></textarea>
           <label for="msg">DETAIL</label>
           
         </div>
            <button class ="btn1">SUBMIT</button>
     
       </form>
      
     </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     </div> 
</div>

   
        );
}
 
export default Feedback;
