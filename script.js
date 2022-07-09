function ourService() {
  const tabs = document.querySelectorAll(".nav-menu-tittle");
  const tabsItems = document.querySelectorAll(".changing-list");

  const onTabClick = (item) => {
    item.addEventListener("click", () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
        tabs.forEach((item) => {
          item.classList.remove("active");
        });
        tabsItems.forEach((item) => {
          item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  };

  tabs.forEach(onTabClick);
}
ourService();

function ourAmazingWork() {
  const images = [
    [
      {
        data: "graphic_design",
        src: "./img/img-Our Amazing Work/third.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/third.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/third.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/third.png",
      },
      {
        data: "graphic_design",
        src: "./img/img-Our Amazing Work/seventh.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/seventh.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/eight.png",
      },
      {
        data: "wordpress",
        src: "./img/img-Our Amazing Work/eight.png",
      },
      {
        data: "graphic_design",
        src: "./img/img-Our Amazing Work/eleventh.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/eleventh.png",
      },
      {
        data: "wordpress",
        src: "./img/img-Our Amazing Work/second.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/eight.png",
      },
    ],
    [
      {
        data: "web_design",
        src: "./img/img-Our Amazing Work/tenth.png",
      },
      {
        data: "graphic_design",
        src: "./img/img-Our Amazing Work/eight.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/eight.png",
      },
      {
        data: "wordpress",
        src: "/img/img-Our Amazing Work/fourth.png",
      },
      {
        data: "web_design",
        src: "/img/img-Our Amazing Work/fourth.png",
      },
      {
        data: "landing_pages",
        src: "/img/img-Our Amazing Work/fourth.png",
      },
      {
        data: "web_design",
        src: "./img/img-Our Amazing Work/tenth.png",
      },
      {
        data: "graphic_design",
        src: "./img/img-Our Amazing Work/eight.png",
      },
      {
        data: "landing_pages",
        src: "./img/img-Our Amazing Work/eight.png",
      },
      {
        data: "wordpress",
        src: "/img/img-Our Amazing Work/fourth.png",
      },
      {
        data: "web_design",
        src: "/img/img-Our Amazing Work/fourth.png",
      },
      {
        data: "landing_pages",
        src: "/img/img-Our Amazing Work/fourth.png",
      },
    ],
  ];
  const set_timeout = 3000;
  function Gallery() {
    let cout = 0;
    const galleryMenuWrapper = document.querySelector(".nav-menu-our-amazing");
    const galleryContent = document.querySelector(".parent");
    const loadMore = document.querySelector(".load_more");

    galleryMenuWrapper.addEventListener("click", (event) => {
      let dataMemu = null;
      const dataGallery = document.querySelectorAll(".size");

      if (event.target.nodeName === "BUTTON") {
        dataMemu = event.target.getAttribute("data-menu");
      }

      let menuItems = document.querySelectorAll("[data-menu]");

      menuItems.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });

      if (!event.target.classList.contains("active")) {
        event.target.classList.add("active");
      }

      dataGallery.forEach((item) => {
        if (
          dataMemu !== item.getAttribute("data-gallery") &&
          dataMemu !== "all"
        ) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
    });

    loadMore.addEventListener("click", () => {
      loadMore.classList.add("loader");

      setTimeout(() => {
        images[cout].forEach((image, id) => {
          galleryContent.insertAdjacentHTML(
            "beforeend",
            `
			 <div class="size" data-gallery="${image.data}">
				 <img class="img${id + 13}" src="${image.src}" alt="image">
			 </div>`
          );
        });

        cout++;

        if (cout === images.length) {
          loadMore.remove();
        }
      }, set_timeout);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    Gallery();
  });
}
ourAmazingWork();

function swiper() {
  const test = new Swiper(".thumbs-slider", {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
  });

  const swiperMain = new Swiper(".slider", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next ",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: test,
    },
  });
}
swiper();
function btnLoadMore() {
  const delet = document.querySelector(".delet");
  const btnClick = document.querySelector(".click");
  const timeout = 3000;
  setTimeout(() => {
    btnClick.addEventListener("click", () => {
      if (delet.classList.contains("delet")) {
        delet.classList.remove("delet");
      } else {
        delet.classList.add("delet");
      }
    });
  }, timeout);
}
btnLoadMore();
