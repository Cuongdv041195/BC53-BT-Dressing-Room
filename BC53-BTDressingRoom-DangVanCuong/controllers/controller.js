const renderList = (phoneList) => {
  
    let content = '';
    phoneList.forEach((ele) => {
      
      content += ` <div class="col-lg-3 col-md-4 mb-3">
      <div class="card border border-secondary text-black h-100 ">
      <div class="content-overlay"  ></div>
        <img src=${ele.imgSrc_jpg} class="card-img" alt="Phone Image" />
        <div class="text-center">
            <h5 class="card-title ">${ele.type}</h5>
          </div>
          <button onclick="handleClickClothes()" class="clothes-button btn btn-block btn-danger" value="${ele.imgSrc_png}">Thử Đồ</button>
        </div>
      </div>
    </div>`;
    });
    document.querySelector('.tab-content').innerHTML = content;
  };
  
  //NavPill
  const renderNavPill = (phoneList) => {
    let content = '';
    phoneList.forEach((ele) => {
      
      content += ` 
      <li type="button" onclick="handleClick()" class="navpill btn border border-secondary mr-3 p-2" value="${ele.type}">${ele.showName}</li>
      `;
    });
    document.querySelector('.nav-pills').innerHTML = content;
  };