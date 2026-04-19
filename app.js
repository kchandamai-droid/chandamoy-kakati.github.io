const titleInput = document.getElementById("titleInput");
const updateButton = document.getElementById("updateButton");
const previewTitle = document.getElementById("previewTitle");

const updatePreview = () => {
  const nextTitle = titleInput.value.trim() || "My product landing page";
  previewTitle.textContent = nextTitle;
};

updateButton.addEventListener("click", updatePreview);
titleInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    updatePreview();
  }
});
