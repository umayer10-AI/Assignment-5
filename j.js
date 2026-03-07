let pri = (v) => {
    const s = document.querySelector(".s");
    console.log(s)
    if(v === "high"){
        s.classList = "text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[12px]";
    }
    else if(v === "medium"){
        s.classList = "text-[#D97706] bg-[#FDE68A] px-4 rounded-full text-[12px]";
    }
    else if(v === "low"){
        s.classList = "text-[#9CA3AF] bg-[#EEEFF2] px-4 rounded-full text-[12px]";
    }
}


const allBtncard = (v) => {
    const parentCard = document.querySelector(".card");
    parentCard.innerHTML = "";

     v.forEach(x => {
        if(x.status === "open"){
            const div = document.createElement("div");
            div.innerHTML = `<div class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-green-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Open-Status.png" alt="">
                        <button class="text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[12px]">${x.priority}</button>
                    </div>
                    <p class="font-semibold">${x.title}</p>
                    <p class="line-clamp-2 text-neutral/50 text-[12px]">${x.description}</p>
                    <div>${add(x.labels)}</div>
                    <hr class="text-gray-300">
                    <p class="text-neutral/50 text-[12px]">${x.author}</p>
                    <p class="text-neutral/50 text-[12px]">${x.createdAt}</p>
                </div>`;

            parentCard.appendChild(div);
        }
        else if(x.status === "closed"){
            const div = document.createElement("div");
            div.innerHTML = `<div class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-purple-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Closed- Status .png" alt="">
                        <button class="text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[12px]">${x.priority}</button>
                    </div>
                    <p class="font-semibold">${x.title}</p>
                    <p class="line-clamp-2 text-neutral/50 text-[12px]">${x.description}</p>
                    <div>${add(x.labels)}</div>
                    <hr class="text-gray-300">
                    <p class="text-neutral/50 text-[12px]">${x.author}</p>
                    <p class="text-neutral/50 text-[12px]">${x.createdAt}</p>
                </div>`;

            parentCard.appendChild(div);
        }
        kk();
    })
}
const openBtnCard = (v) => {
    const parentCard = document.querySelector(".card");
    parentCard.innerHTML = "";

     v.forEach(x => {
        if(x.status === "open"){
            const div = document.createElement("div");
            div.innerHTML = `<div class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-green-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Open-Status.png" alt="">
                        <button class="text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[12px]">${x.priority}</button>
                    </div>
                    <p class="font-semibold">${x.title}</p>
                    <p class="line-clamp-2 text-neutral/50 text-[12px]">${x.description}</p>
                    <div>${add(x.labels)}</div>
                    <hr class="text-gray-300">
                    <p class="text-neutral/50 text-[12px]">${x.author}</p>
                    <p class="text-neutral/50 text-[12px]">${x.createdAt}</p>
                </div>`;

            parentCard.appendChild(div);
        }
       kk();
    })

}
const closeBtnCard = (v) => {
    const parentCard = document.querySelector(".card");
    parentCard.innerHTML = "";

     v.forEach(x => {
        if(x.status === "closed"){
            const div = document.createElement("div");
            div.innerHTML = `<div class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-purple-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Closed- Status .png" alt="">
                        <button class="text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[12px]">${x.priority}</button>
                    </div>
                    <p class="font-semibold">${x.title}</p>
                    <p class="line-clamp-2 text-neutral/50 text-[12px]">${x.description}</p>
                    <div>${add(x.labels)}</div>
                    <hr class="text-gray-300">
                    <p class="text-neutral/50 text-[12px]">${x.author}</p>
                    <p class="text-neutral/50 text-[12px]">${x.createdAt}</p>
                </div>`;

            parentCard.appendChild(div);
        }
       kk();
    })

}

const btnColor = async (id) => {
    const clickBtn = document.getElementById(id);
    const btns = document.querySelectorAll(".btn-container button");
    btns.forEach(v => {
        v.classList.remove("btn-primary");
    })
    clickBtn.classList.add("btn-primary");

    if(id === "all-btn"){
        const a = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const b = await a.json();
        allBtncard(b.data);
    }
    else if(id === "open"){
        const a = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const b = await a.json();
        openBtnCard(b.data);
    }
    else if(id === "close"){
        const a = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const b = await a.json();
        closeBtnCard(b.data);
    }

}

const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click",(e) => {
    const button = e.target.closest("button"); 
    if(button){
        const btnID = button.id;
        // console.log(btnID);
        btnColor(btnID);
    }
})

const add = (v) => {
    let m = v.map(x => `<button class="text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[12px]"><i class="fa-solid fa-bug"></i>${x}</button>`);
    return m.join(" ");
}

const parmanentcards = (v) => {
    // console.log(v);
    const parentCard = document.querySelector(".card");
    parentCard.innerHTML = "";

    v.forEach(x => {
        if(x.status === "open"){
            const div = document.createElement("div");
            div.innerHTML = `<div class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-green-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Open-Status.png" alt="">
                        <button class="text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[12px] s">${pri(x.priority)}</button>
                    </div>
                    <p class="font-semibold">${x.title}</p>
                    <p class="line-clamp-2 text-neutral/50 text-[12px]">${x.description}</p>
                    <div>${add(x.labels)}</div>
                    <hr class="text-gray-300">
                    <p class="text-neutral/50 text-[12px]">${x.author}</p>
                    <p class="text-neutral/50 text-[12px]">${x.createdAt}</p>
                </div>`;

            parentCard.appendChild(div);
        }
        else if(x.status === "closed"){
            const div = document.createElement("div");
            div.innerHTML = `<div class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-purple-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Closed- Status .png" alt="">
                        <button class="text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[12px] s">${pri(x.priority)}</button>
                    </div>
                    <p class="font-semibold">${x.title}</p>
                    <p class="line-clamp-2 text-neutral/50 text-[12px]">${x.description}</p>
                    <div>${add(x.labels)}</div>
                    <hr class="text-gray-300">
                    <p class="text-neutral/50 text-[12px]">${x.author}</p>
                    <p class="text-neutral/50 text-[12px]">${x.createdAt}</p>
                </div>`;

            parentCard.appendChild(div);
        }
    });
    kk();
}

const g = async () => {
    const a = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const b = await a.json();
    
    parmanentcards(b.data);
}
g();


function kk(){
    const parentCard = document.querySelector(".card");
    const total = document.querySelector(".total");

    total.innerText = parentCard.children.length;
    // console.log(total)
}
kk();