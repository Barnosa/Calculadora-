body, html{
    background-color: #DCDCDC;
}
div#calculator{
    margin:auto;
    width: 550px;
    height: 700px;
    border: none;
    background-color:#363636;
    border-radius: 32px;
    font-family: 'Orbitron', sans-serif;
    box-shadow: 10px 10px 15px 3px;
}
#screen{
    font-family: inherit;
    font-size: 60px;
    width: 510px;
    height: 130px;
    margin: 40px 20px;
    border:none;
    border-radius: 24px;
    box-shadow: inset 5px 5px 30px gray;

#buttonContainer{
    margin-left: 20px;
    display: grid;
    grid-template-columns: 95px 95px 95px 95px 95px;
    grid-gap: 8px;
    grid-template-rows: 100px 100px 100px 100px;

}
button{
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    background-color: dimgray ;
    color: whitesmoke;
    font: inherit;
    font-size: 25px;
    box-shadow: 5px 3px 5px black;
}
button:hover{
    box-shadow: inset 5px 3px 15px black;
    background-color: rgb(94, 94, 94);
}
#cleaner{
    font-size: 30px;
}
#equal{
    height: 206px;
    font-size: 60px;
    background-color: rgb(48, 250, 48);
}