document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("wavt").forEach(el => {
    const text = el.textContent;
    const color = el.getAttribute("color") || "black";
    const font = el.getAttribute("font") || "sans-serif";
    const size = el.getAttribute("size") || "24px";
    const speed = el.getAttribute("speed") || "1.5s";
    const wave = el.getAttribute("wave") || "updown";

    const spanHTML = [...text].map((char, i) =>
      <span style="--i:${i}; animation-duration:${speed}; animation-name:wave${capitalize(wave)}">${char}</span>
    ).join('');

    const wrapper = document.createElement("div");
    wrapper.className = "wavt";
    wrapper.style.color = color;
    wrapper.style.fontFamily = font;
    wrapper.style.fontSize = size;
    wrapper.innerHTML = spanHTML;
    el.replaceWith(wrapper);
  });

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
