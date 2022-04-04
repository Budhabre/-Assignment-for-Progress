function Change(e) {
    e.preventDefault();

    let aElement = e.target;
    let ulElement = aElement.parentNode.parentNode;
    let liElements = ulElement.getElementsByTagName("li");

    let liItemsArray = Array.from(liElements);

    liItemsArray.forEach(item => {
        let currentAElement = item.childNodes[0];

        if (currentAElement.classList.contains("active")) {
            currentAElement.classList.remove("active");
        }
    })

    aElement.classList.add("active");

}