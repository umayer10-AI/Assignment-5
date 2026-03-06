const btnContainer = document.querySelector(".btn-container");

const btnColor = (id) => {
    const clickBtn = document.getElementById(id);
    const btns = document.querySelectorAll(".btn-container button");
    btns.forEach(v => {
        v.classList.remove("btn-primary");
    })
    clickBtn.classList.add("btn-primary");

}

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
            div.innerHTML = `<div class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg">
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
            div.innerHTML = `<div class="space-y-2 bg-[#FFFFFF] p-3 shadow-lg rounded-lg">
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
    })
}

const g = async () => {
    const a = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const b = await a.json();
    

    parmanentcards(b.data);
}
g();