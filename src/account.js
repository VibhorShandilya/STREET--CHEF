import Foot from "./footer";
const account = () => {
    return (
      
<div class = "B">
            <br></br><br></br>
<div class = "main">
 <div class="wrapper">
  <form >
    <div class="field1">
      <input type="text" id="name" name=" name" placeholder="ENTER YOUR NAME" autofocus/>
      <label for="name"> Name</label>
    </div>
    <div class="field1">
      <input type="text" id="email" name=" email" placeholder="EMAIL ADDRESS" />
      <label for="email">EMAIL </label>
    </div>
    <div class="field1">
      <textarea id="msg1" rows="4" name="number" placeholder="NUMBER" maxLength="10"></textarea>
      <label for="msg">PHONE NUMBER</label>
    </div>
    <div class="field1">
      <textarea id="msg1" rows="4" name="number" placeholder="ENTER YOUR ADDRESS"></textarea>
      <label for="msg">ADDRESS</label>
    </div>
    
    <a href ="./t.js"><button class ="btn">SUBMIT</button></a>
  </form>
 
</div>
</div> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   </div>


     );
}
 
export default account;  




