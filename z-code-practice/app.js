
function walkDog() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const dogWalked = true;

        if(dogWalked) {
          resolve("You walked the dog 🐕");
        }
  
        else {
          reject("You didn't walk the dog 🐕");
        }
        
      }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const kitchenCleaned = true;

        if(kitchenCleaned) {
          resolve("You cleaned the kitchen 🧹");
        }
  
        else {
          reject("You didn't clean the kitchen 🧹");
        }

      }, 2500);
    });
}

function takeTrash() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const trashTaken = true;

        if(trashTaken) {
          resolve("You taked out the trash ♻");
        }
  
        else {
          reject("You didn't take out the trash ♻");
        }

      }, 700);
    });
}


async function doChores() {
    try {
      const walkDogResult = await walkDog();
      console.log(walkDogResult);
  
      const cleanKitchenResult = await cleanKitchen();
      console.log(cleanKitchenResult);
  
      const takeTrashResult = await takeTrash();
      console.log(takeTrashResult);
  
      console.log("You've finished all task");
    }

    catch(error) {
      console.error(error);
    }
}

doChores();

async function fetchData() {

    try {
      const response = await fetch("names.json");

      if(!response.ok) {
        throw new Error("Can't fetch data");
      }
  
      else {
        const datas = await response.json();
        console.log(datas);
        datas.forEach(data => console.log(data));
      }
      
    }

    catch(error) {
        console.error(error);
    }
}

fetchData();