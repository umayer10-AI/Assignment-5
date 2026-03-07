let detailModal = (v) => {

    const div = document.querySelector(".modal-box");
    div.innerHTML = "";

    const d = document.createElement("div");
    const p = pri(v.status);
    d.innerHTML = `<div class="space-y-4">
            <h3 class="text-xl font-bold">${v.title}</h3>
            <div class="flex gap-3 items-center">
                <p class="text-[#ffffff] ${p.bg} rounded-full text-[14px] font-bold p-2">${p.name}</p>
                <p class="text-neutral/50">● Opened by ${v.assignee}</p>
                <p class="text-neutral/50">● ${v.createdAt}</p>
            </div>
            <div>${add(v.labels)}</div>
            <p>${v.description}</p>
            <div class="grid grid-cols-2 bg-gray-100 p-3 rounded-xl">
                <div class="space-y-1">
                    <p class="text-neutral/50">Assignee:</p>
                    <p class="font-semibold">${v.assignee}</p>
                </div>
                <div class="space-y-1">
                    <p class="text-neutral/50">Priority:</p>
                    <button class="font-semibold text-white bg-[#EF4444] rounded-full px-4 py-1">${v.priority}</button>
                </div>
            </div>
            <div class="modal-action">
            <form method="dialog">
                <button class="btn btn-primary">Close</button>
            </form>
            </div>
        </div>`;

    div.appendChild(d);
    document.querySelector("#my_modal").showModal();
}

let details = async (id) => {
    const a = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const b = await a.json();
    detailModal(b.data)
}


let pri = (v) => {
    if(v === "high"){
        return {
            text: "text-[#EF4444]",
            bg: "bg-[#FEECEC]"
        };
    }
    else if(v === "medium"){
        return {
            text: "text-[#F59E0B]",
            bg: "bg-[#FFF6D1]"
        };;
    }
    else if(v === "low"){
        return {
            text: "text-[#9CA3AF]",
            bg: "bg-[#EEEFF2]"
        };
    }
    else if(v === "open"){
        return {
            name: "Opened",
            bg: "bg-[#00A96E]"
        }
    }
    else if(v === "closed"){
        return {
            name: "Closed",
            bg: "bg-[#EF4444]"
        }
    }
}


const allBtncard = (v) => {
    const parentCard = document.querySelector(".card");
    parentCard.innerHTML = "";

     v.forEach(x => {
        if(x.status === "open"){
            const p = pri(x.priority);
            const div = document.createElement("div");
            div.innerHTML = `<div onclick="details(${x.id})" class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-green-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Open-Status.png" alt="">
                        <button class="${p.text} ${p.bg} px-4 rounded-full text-[12px]">${x.priority}</button>
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
            const p = pri(x.priority);
            const div = document.createElement("div");
            div.innerHTML = `<div onclick="details(${x.id})" class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-purple-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Closed- Status .png" alt="">
                        <button class="${p.text} ${p.bg} px-4 rounded-full text-[12px]">${x.priority}</button>
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
            const p = pri(x.priority);
            const div = document.createElement("div");
            div.innerHTML = `<div onclick="details(${x.id})" class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-green-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Open-Status.png" alt="">
                        <button class="${p.text} ${p.bg} px-4 rounded-full text-[12px]">${x.priority}</button>
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
        const p = pri(x.priority);
        if(x.status === "closed"){
            const div = document.createElement("div");
            div.innerHTML = `<div onclick="details(${x.id})" class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-purple-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Closed- Status .png" alt="">
                        <button class="${p.text} ${p.bg} px-4 rounded-full text-[12px]">${x.priority}</button>
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
    let m = v.map(x => `<button class="text-[#EF4444] bg-[#FEECEC] px-4 rounded-full text-[14px]"><i class="fa-solid fa-bug"></i><span class="font-semibold"> ${x}</span></button>`);
    return m.join(" ");
}

const parmanentcards = (v) => {
    // console.log(v);
    const parentCard = document.querySelector(".card");
    parentCard.innerHTML = "";

    v.forEach(x => {
        if(x.status === "open"){
            const p = pri(x.priority);
            const div = document.createElement("div");
            div.innerHTML = `<div onclick="details(${x.id})" class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-green-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Open-Status.png" alt="">
                        <button class="${p.text} ${p.bg} px-4 rounded-full text-[12px] s">${x.priority}</button>
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
            const p = pri(x.priority);
            const div = document.createElement("div");
            div.innerHTML = `<div onclick="details(${x.id})" class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg border-2 border-purple-500 border-t-5">
                    <div class="flex justify-between items-center">
                        <img src="assets/Closed- Status .png" alt="">
                        <button class="${p.text} ${p.bg} px-4 rounded-full text-[12px] s">${x.priority}</button>
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
}
kk();


