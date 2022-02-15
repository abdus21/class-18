
const product_list = document.querySelector('.product_list')

fetch('https://fakestoreapi.com/products').then(data => data.json()).then(data =>{


    let produ = '';

    data.map(data =>{
        produ += `
        <div class="col-md-4 text-center shadow my-3">
        <div class="p-item">
        <a onclick="show(${data.id})" href="#"><img src="${data.image}" alt=""></a>
        <h3>${data.title}</h3>
        <p> price${data.price}</p>
        </div>
      </div>
        
        `
    })
    product_list.innerHTML = produ
console.log(data)
});

//const student_moda = document.querySelector('.student-moda');


function show(id,){
    const samad_modal = document.querySelector('.samad-modal');
const data_show = document.querySelector('.data_show');
//const animatoin = document.querySelector('.animatoin');
    // modal
    samad_modal.style.display = 'flex';
    //animatoin.classList.add('active');
  
    samad_modal.addEventListener('click', function(e){
        if(e.target == this){
            samad_modal.style.display = 'none';
        }else{
            samad_modal.style.display = 'flex';
        }
    });
    data_show.innerHTML = '';
fetch('https://fakestoreapi.com/products/'+id).then(data => data.json()).then(data =>{


        data_show.innerHTML = `
        <div class="row">
            <div class="col-md-6">
              <img src="${data.image}" alt="">
            </div>
            <div class="col-md-6">
              <h3>${data.title}</h3>
              <p>price :${data.price}</p>
              <p>${data.description}</p>
              
              <a class="btn btn-primary w-50" href="#">Add to cart</a>
            </div>
          </div>
        
        `
     console.log(data)

})
  

  
}