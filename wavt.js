class WAVT extends HTMLElement {
  connectedCallback() {
    const text = this.innerText;
    const speed = this.getAttribute("speed") || "1.5s";
    const size = this.getAttribute("size") || "20px";
    const font = this.getAttribute("font") || "Arial";
    const wave = this.getAttribute("wave") || "updown";

    this.innerHTML = "";

    const style = document.createElement("style");
    style.textContent = 
      @keyframes wave {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
      .wavt-letter {
        display: inline-block;
        animation: wave ${speed} infinite;
      }
    ;
    document.head.appendChild(style);

    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = "wavt-letter";
      span.style.animationDelay = ${i * 0.1}s;
      span.style.fontSize = size;
      span.style.fontFamily = font;
      this.appendChild(span);
    });
  }
}

customElements.define("wavt", WAVT);
