const search = document.getElementById('search').value.toUpperCase();
const bookname = document.getElementById('book_name');
const product_item = document.querySelectorAll("#product-item");

let product =[{
    id:1,
    img:'IMG/book_popular_1.jpg',
    product_name:'The Comfort Book',
    type:'psychology',
    publisher:'1',
    price:'1',
    trends:''
},{
    id:2,
    img:'IMG/book_popular_2.jpg',
    product_name:'The Midnight Library',
    type:'novel',
    publisher:'1',
    price:'1',
    trends:''
},
{
    id:3,
    img:'IMG/book_popular_3.jpg',
    product_name:'Reason to Stay Alive',
    type:'psychology',
    publisher:'',
    price:'1',
    trends:''
},
];

$(document).ready(()=>{
    let html='';
    for(let i=0;i<product.length;i++){
        html+=
        `<div class="product-item ${product[i].type}">
        <img src="${product[i].img}" alt="">
        <div class="text">
            <h3 id="book_name">${product[i].product_name}</h3>
            <h4>${product[i].type}</h4>
            <p>${product[i].publisher}</p>
            <p>ราคา ฿${product[i].price}</p>
        </div>
    </div>`
    }
    $(".product").html(html);
});


function search_Book(e){
   let input_search = $('#'+e.id).val().toUpperCase();
   let html='';
   for(let i=0;i<product.length;i++){
    if(product[i].product_name.toLocaleUpperCase().includes(input_search)){
        html+=
       `<div class="product-item" ${product[i].type}>
       <img src="${product[i].img}" alt="">
       <div class="text">
           <h3 id="book_name">${product[i].product_name}</h3>
           <h4>${product[i].type}</h4>
           <p>${product[i].publisher}</p>
           <p>ราคา ฿${product[i].price}</p>
       </div>
   </div>`
    }
       
   }
  if(html==""){
    $(".product").html(`<h1>ไม่พบสินค้า</h1>`)
  }
  else{
    $(".product").html(html);
  }
}

function search_product(param){
    console.log(param);
    $(".product-item").css('display','none');
    
    if(param=='all'){
        $(".product-item").css('display','block');
    }
    else {
        $("."+param).css('display','block');
    }

}

/* 
 }
   if(html==''){
    $(".product").html(`<h1>ไม่พบสินค้า</h1>`)
   }
   else{
    $(".product").html(html);
   }
*/