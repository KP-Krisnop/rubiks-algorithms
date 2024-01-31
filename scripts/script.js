function createAlgorithm(permutationName, permutation) {
  const newPermContent = `
        <div class="algorithm">
            <img src="pll/${permutationName}.svg" alt="">
            <div class="permutation-container">
            <h2 class="algorithm_name">${permutationName}</h2>
            <p class="permutation">${permutation}</p>
        </div>
    `;
  algorithmContainer.innerHTML += newPermContent;
}

pll.forEach((element) => {
  createAlgorithm(element[0], element[1]);
});
