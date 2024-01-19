function createSpinner() {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;

  document.head.appendChild(styleElement);
  const spinner = document.createElement("div");
  spinner.id = "mySpinner";
  spinner.style.position = "fixed";
  spinner.style.zIndex = "99999";
  spinner.style.height = "50px";
  spinner.style.width = "50px";
  spinner.style.overflow = "show";
  spinner.style.margin = "auto";
  spinner.style.top = "0";
  spinner.style.left = "0";
  spinner.style.bottom = "0";
  spinner.style.right = "0";
  spinner.style.border = "5px solid #f3f3f3";
  spinner.style.borderRadius = "50%";
  spinner.style.borderTop = "5px solid #3498db";
  spinner.style.animation = "spin 1s linear infinite";
  document.body.appendChild(spinner);
  document.body.style.overflow = "hidden";
}

export {createSpinner};
