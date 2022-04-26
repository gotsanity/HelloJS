function collapseBlock(num) {
    // take the block
    // apply display: hidden
    console.log("Collapsing the block");

    let block = document.getElementById("block" + num);

    block.classList.toggle("hidden");

}