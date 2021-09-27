function validateForm(){
    var tagline = document.forms["myForm"]["tagline"].value;
    var color = document.forms["myForm"]["color"].value;
    var size = document.forms["myForm"]["size"].value;
    var quantity = document.forms["myForm"]["quantity"].value;

    var odate = new Date();
    var day = odate.getDate();
    var month = odate.getMonth();
    var year = odate.getFullYear();

    var date = document.forms["myForm"]["date"].value;
    var name = document.forms["myForm"]["name"].value;

    var email = document.forms["myForm"]["email"].value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  

    var address = document.forms["myForm"]["address"].value;


 
    if(tagline == ""){
        alert("TAGLINE MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(color == ""){
        alert("COLOR MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(size == ""){
        alert("SIZE MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(quantity == ""){
        alert("QUANTITY MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(date == ""){
        alert("DATE OF DELIVERY MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(name == ""){
        alert("NAME MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(email == ""){
        alert("EMAIL-ID MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(address == ""){
        alert("SHIPPING ADDRESS MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    
    else{

        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
            alert("PLEASE ENTER CORRECT EMAIL-ID");  
            return false;  
            
        } else {
            document.write("YOUR RECEIPT<br><br><br>");
            document.write("SPECIAL REQUEST : "+tagline+"<br><br>");
            document.write("COLOR : "+color+"<br><br>");
            document.write("SIZE : "+size+"<br><br>");
            document.write("QUANTITY : "+quantity+"<br><br>");
            document.write("DATE : "+year+"-"+month+"-"+day+"<br><br>");
            document.write("DELIVERY DATE : "+date+"<br><br>");
            document.write("NAME : "+name+"<br><br>");
            document.write("EMAIL-ID: "+email+"<br><br>");
            document.write("ADDRESS : "+address+"<br><br>");       
        }
        
    }
}