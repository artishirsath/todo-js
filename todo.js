function addtask(){
    document.getElementById('popup').style.display='block';
    document.getElementById('mainContainer').style.filter= 'blur(8px)';
}
function CloseCountry(){
  document.getElementById('popUpForCountry').style.display='none';
  document.getElementById('mainContainer').style.filter= 'blur(0px)';
}

function ClosePopUpScreen(){
    document.getElementById('popup').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';
}

function AddNewTask(){

    let parentForFlexItem = document.getElementById('addnewtask');
    let newCardInParent  = document.createElement('div');
    let horizonatllineForEachCard = document.createElement('hr');
    let valueofCardCreated = document.getElementById('input').value;
    let cardHeading = document.createElement('h3');
    let foootertag = document.createElement('center');
    
    let deleteButtonInsideTask = document.createElement('button');
    let plusButtonInsideTask  =document.createElement('button');
    
    deleteButtonInsideTask.innerText="x";
    plusButtonInsideTask.innerHTML="+";


    deleteButtonInsideTask.addEventListener('click',removeCardFunction);



    plusButtonInsideTask.addEventListener('click', AddNewTaskForCountry)

    cardHeading.textContent= valueofCardCreated;
    parentForFlexItem.appendChild(newCardInParent);
    newCardInParent.appendChild(cardHeading);
    newCardInParent.appendChild(horizonatllineForEachCard);
    newCardInParent.appendChild(foootertag)
    foootertag.appendChild(deleteButtonInsideTask);
    foootertag.appendChild(plusButtonInsideTask);



  newCardInParent.style.minHeight='50vh';
  newCardInParent.style.height='auto';
  newCardInParent.style.width='18vw';
  newCardInParent.style.backgroundImage="url('images (1).png')";
  newCardInParent.style.backgroundRepeat='no-repeat';
  newCardInParent.style.backgroundSize='cover';
  newCardInParent.className='DynamicallyAddedFlexItems';
  newCardInParent.style.borderRadius = "6px"

  newCardInParent.style.position='relative';

  // realted to heading that is added 
  cardHeading.style.textAlign='center';
  cardHeading.style.color="red";
  cardHeading.style.font="Monospace";
  cardHeading.style.fontSize="1.5em";
  cardHeading.style.textShadow="2px 2px grey";


  // related to delete and plus buton 

  deleteButtonInsideTask.style.width='15%';
  deleteButtonInsideTask.style.height='10%';
  deleteButtonInsideTask.style.borderRadius='50%';
  deleteButtonInsideTask.style.left='10px';
  deleteButtonInsideTask.style.position='absolute';
  deleteButtonInsideTask.style.bottom='10px';
 // deleteButtonInsideTask.style.backgroundImage="url('unnamed.png')";
  deleteButtonInsideTask.style.color='aqua';
  deleteButtonInsideTask.style.fontWeight='bolder';
  deleteButtonInsideTask.style.fontSize='25px';
  deleteButtonInsideTask.style.borderRadius='5px';
  deleteButtonInsideTask.style.borderStyle='none';
  deleteButtonInsideTask.style.backgroundColor='brown';


  plusButtonInsideTask.style.width='15%';
  plusButtonInsideTask.style.height='10%';
  plusButtonInsideTask.style.borderRadius='50%';
  plusButtonInsideTask.style.position='absolute';
  plusButtonInsideTask.style.bottom='10px';
  plusButtonInsideTask.style.right='10px';
  //plusButtonInsideTask.style.textAlign='center';
  //plusButtonInsideTask.style.backgroundImage="url('pngtree-add-icon-image_1197573.jpg')";
  plusButtonInsideTask.style.color='aqua';
  plusButtonInsideTask.style.backgroundColor='brown';
  plusButtonInsideTask.style.borderRadius='5px';
  plusButtonInsideTask.style.fontWeight='bolder';
  plusButtonInsideTask.style.borderStyle='none';
  plusButtonInsideTask.style.fontSize='30px';
  plusButtonInsideTask.style.paddingTop='0px';
  
  

  document.getElementById('popup').style.display='none';
  document.getElementById('mainContainer').style.filter= 'blur(0px)';
}


function removeCardFunction(){
  
  this.parentElement.parentElement.remove();
}

function addActivitesInsideCard(){

  document.getElementById('popUpForCountry').style.display='none';
  document.getElementById('mainContainer').style.filter= 'blur(0px)';    
  console.log("Hello this is adding actitvity inside card");
   //console.log(ele);
}


// added task for placing activities inside a card.


function AddNewTaskForCountry(){

  document.getElementById('popUpForCountry').style.display='block';
  document.getElementById('mainContainer').style.filter= 'blur(8px)'; 
  
  
  // var hrel = this.parentElement.previousElementSibling;
  document.getElementById('closeButtonForCountry').addEventListener('click', closeButtonForCountry);


  ouetr:
  var hrel = this.parentElement.parentElement;
  console.log("add button for country invoked ", hrel);

  document.getElementById('AddPopupScreenForCountry').addEventListener('click',()=>{

      document.getElementById('popUpForCountry').style.display='none';
      document.getElementById('mainContainer').style.filter= 'blur(0px)';
      
      let break1 = document.createElement('br');
      let divActivityCard = document.createElement('div');
      let activitybox = document.createElement('p');
      let markDoneButton = document.createElement('button');
      let activityValue = document.getElementById('inputForCountry').value; 

      activitybox.textContent = activityValue;
      activitybox.style.textAlign='center';
      activitybox.style.verticalAlign='middle';

      divActivityCard.style.display='flex';
      divActivityCard.textAlign='center';
      divActivityCard.style.justifyContent='spaceBetween';
      divActivityCard.style.paddingLeft='2%';
      divActivityCard.style.alignContent ='center'
      divActivityCard.alignItems='center';
      
          
      divActivityCard.appendChild(activitybox);
      divActivityCard.appendChild(markDoneButton);
      
      hrel.appendChild(divActivityCard);
      hrel.appendChild(break1);

      activitybox.style.width='20%';
      activitybox.style.color='red';
      activitybox.style.fontWeight='bolder';
      activitybox.style.fontSize='20px';
     
      
      
      
    


      markDoneButton.style.background='orange';
      //markDoneButton.style.position='absolute';
      //markDoneButton.style.top='53px';
      markDoneButton.style.fontSize='15px';
      markDoneButton.style.color='white';
      markDoneButton.style.borderStyle='none';
      markDoneButton.style.height='20px';
      markDoneButton.style.width = '20%';
      markDoneButton.style.borderRadius='5px';
      markDoneButton.textContent='mark'  ;
      //markDoneButton.style.right='-3%';
      //markDoneButton.style.left='60px';
      //markDoneButton.style.paddingBottom='5px';
      markDoneButton.style.marginBottom='5px';   

      console.log("input value for country is : ", activityValue);

      console.log('inside anonymous function : ', hrel);
      hrel ='';



      markDoneButton.addEventListener('click', () => {
          markDoneButton.style.display='none';
          activitybox.style.textDecorationLine = 'line-through ';
          activitybox.style.color = 'brown';
          activitybox.style.fontSize='1.5em';
          activitybox.style.paddingLeft = '38%';
          console.log('this is for marking function value : ');
      })
  
  })

  


  }


  

