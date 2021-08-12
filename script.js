const menu = [
    {
        id: 1,
        title: "Iddli",
        category: "breakfast",
        price: 30,
        img: "https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7351/16381790937_c66e43bcf8_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 2,
        title: "Medhu Vada",
        category: "breakfast",
        price: 15,
        img: "https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7667/17097712982_719bb3704d_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 3,
        title: "Ven Pongal",
        category: "breakfast",
        price: 50,
        img: "https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7722/16912925309_3ed9255357_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 4,
        title: "Full Meals",
        category: "lunch",
        price: 120,
        img: "https://i.pinimg.com/originals/ba/68/55/ba68555ae362879a9b4c5b8ffafcd599.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 5,
        title: "Mini Meals",
        category: "lunch",
        price: 90,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/11/fd/d6/mini-meals.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 6,
        title: "Parotta",
        category: "dinner",
        price: 60,
        img: "https://static.toiimg.com/thumb/msid-76344801,imgsize-81967,width-800,height-600,resizemode-75/76344801.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 7,
        title: "Dosa",
        category: "dinner",
        price: 80,
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/10/9/DV3016_masala-dosa_s4x3.jpg.rend.hgtvcom.616.462.suffix/1570635680579.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 8,
        title: "Chappati",
        category: "dinner",
        price: 60,
        img: "https://prods3.imgix.net/images/articles/2015_11/Hero-Aarti-Sequeria-Chef-Chapati-Flatbread-Recipe1.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 9,
        title: "Chocolate Milkshake",
        category: "beverages",
        price: 150,
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/10/9/DV3016_masala-dosa_s4x3.jpg.rend.hgtvcom.616.462.suffix/1570635680579.jpeg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
    {
        id: 10,
        title: "Pepsi",
        category: "beverages",
        price: 40,
        img: "https://5.imimg.com/data5/HX/BN/FG/SELLER-78937821/750ml-pepsi-cold-drink-500x500.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reprehenderit ipsam commodi maiores dolorum pariatur maxime voluptatibus,`,
    },
];
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});
function displayMenuItems(menuItems) 
{
    let displayMenu = menuItems.map(function (item) {
        return `
            <article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">₹${item.price}</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}  
function displayMenuButtons() 
{
    const categories = menu.reduce(
        function (values, item) 
        {
            if (!values.includes(item.category)) 
            {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    )
    const categoryBtns = categories.map(function (category) {
        return `
            <button class="filter-btn" type="button" data-id=${category}>
                ${category}
            </button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) 
                {
                    return menuItem;
                }
            });
            if (category === "all") 
            {
                displayMenuItems(menu);
            } 
            else 
            {
                displayMenuItems(menuCategory);
            }
      });
    });
}