const accordion = [
  {
    id: 1,
    head: "What is Frontend Mentor, and how will it help me?",
    btn: "./assets/images/icon-plus.svg",
    detail_show: false,
    detail: `Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.`,
  },
  {
    id: 2,
    head: "Is Frontend Mentor free?",
    btn: "./assets/images/icon-plus.svg",
    detail_show: false,
    detail: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.
`,
  },
  {
    id: 3,
    head: "Can I use Frontend Mentor projects in my portfolio?",
    btn: "./assets/images/icon-plus.svg",
    detail_show: false,
    detail: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!`,
  },
  {
    id: 4,
    head: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    btn: "./assets/images/icon-plus.svg",
    detail_show: false,
    detail: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.`,
  },
];

const faq_render = () => {
  const container = document.querySelector(".questions");
  container.innerHTML = "";

  const parsed_accordion = localStorage.getItem("accordion")
    ? JSON.parse(localStorage.getItem("accordion"))
    : accordion;

  parsed_accordion.forEach((item) => {
    const parent_div = document.createElement("div");
    const span = document.createElement("span");
    const h3 = document.createElement("h3");
    const btn = document.createElement("button");
    const btn_img = document.createElement("img");
    const child_div = document.createElement("div");
    const p = document.createElement("p");
    const hr = document.createElement("hr");

    // innerHTML
    h3.innerHTML = item.head;
    btn_img.setAttribute("src", item.btn);
    p.innerHTML = item.detail;

    child_div.classList.add("child");
    child_div.appendChild(p);

    btn_img.classList.add("btn_img");

    btn.classList.add("btn");
    btn.appendChild(btn_img);

    // stored state
    if (item.detail_show) {
      btn_img.setAttribute("src", "./assets/images/icon-minus.svg");
      child_div.removeAttribute("hidden");
    } else {
      btn_img.setAttribute("src", "./assets/images/icon-plus.svg");
      child_div.setAttribute("hidden", "");
    }

    // click event handling
    const toggle = () => {
      item.detail_show = !item.detail_show;
      localStorage.setItem("accordion", JSON.stringify(parsed_accordion));
      faq_render();
    };

    // event listners
    btn.addEventListener("click", toggle);
    h3.addEventListener("click", toggle);

    span.appendChild(h3);
    span.appendChild(btn);

    parent_div.appendChild(span);
    parent_div.appendChild(child_div);

    container.appendChild(parent_div);

    if (item.id < parsed_accordion.length) {
      container.appendChild(hr);
    }
  });
};

faq_render();
