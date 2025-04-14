<template>
    <div class="resetpassword">
        <h1>Rest Password</h1>
         
        <table>
        <h3>Current password</h3>
        
          <input type="text" id="current password" placeholder="Current password" >
        
    </table>

       <h3>New password
            <input type="text" id="new password"  placeholder="New passwords"  >
        </h3>
       
       <h3>Confirm new password
            <input type="text" id="password" placeholder="Confirm new password">
        </h3>
    
        
       <button>Resetpassword</button>
    </div>
</template>

<style>
.resetpassword {
    border: 1px solid blue }

    input {
        height: 6%;
        border: 5%;

    }

    button{
        background-color: blue;
        border: 0%;
        
    }
</style>
