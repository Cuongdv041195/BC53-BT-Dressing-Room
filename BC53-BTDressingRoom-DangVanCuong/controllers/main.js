const getElement = (selector) => document.querySelector(selector);
let responseData;
let typeClothes = "topclothes";

// Lấy danh sách món ăn từ API
const getProductList = () => {
  const promise = axios({
    method: "GET",
    url: "https://65113dfe829fa0248e3fb9c1.mockapi.io/tabPanes",
  });

  promise
    // get data thành công
    .then((result) => {
      responseData = result.data;
      renderNavPill(result.data[0].navPills);
      const find = responseData[0].tabPanes.filter(
        (item) => item.type === "topclothes"
      );
      // renderList(result.data[0].tabPanes)
      renderList(find);
    })
    // get data thất bại
    .catch((err) => {
      console.log(err);
    })
    // Luôn luôn chạy dù thành công, thất bại
    .finally(() => {
      // console.log("finally");
    });
};
getProductList();

const handleClick = () => {
  const type = event.target.getAttribute("value");
  const find = responseData[0].tabPanes.filter((item) => item.type === type);
  typeClothes = type;
  renderList(find);
}

const handleClickClothes = () => {
  const type = event.target.getAttribute("value");
  // const aa = responseData[0].tabPanes.filter((item => item.type === type))
  // renderList(aa)

  changeOutfit(type, typeClothes);
}

// Thử Đồ
const topclothes = getElement("#topclothes");
const botclothes = getElement("#botclothes");
const hairstyle = getElement("#hairstyle");
const shoes = getElement("#shoes");
const handbags = getElement("#handbags");
const necklaces = getElement("#necklaces");
const background = getElement("#background");
// const clothesButtons = document.querySelectorAll(".clothes-button");
// clothesButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const outfit = button.dataset.outfit;
//     changeOutfit(outfit);
//   });
// });

const changeOutfit = (outfit, typeClothes) => {
  // Thay đổi hình ảnh của người mẫu theo outfit được chọn
  switch (typeClothes) {
    case "topclothes":
      topclothes.src = `${outfit}`;
      break;
    case "botclothes":
      botclothes.src = `${outfit}`;
      break;
    case "hairstyle":
      hairstyle.src = `${outfit}`;
      break;
    case "shoes":
      shoes.src = `${outfit}`;
      break;
    case "handbags":
      handbags.src = `${outfit}`;
      break;
    case "necklaces":
      necklaces.src = `${outfit}`;
      break;
    case "background":
      background.src = `${outfit}`;
      break;
    default:
      break;
  }
};


