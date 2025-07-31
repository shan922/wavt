(function () {
  const style = document.createElement('style');
  style.innerHTML = 
    .wavt span {
      display: inline-block;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    @keyframes waveupdown {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes wavebounce {
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(-15px); }
      75% { transform: translateY(5px); }
    }
  ;
  document.head.appendChild(style);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function processWAVT() {
    const elements = document.querySelectorAll("wavt");
    elements.forEach((el) => {
      const text = el.textContent.trim();
      const speed = el.getAttribute("speed") || "1s";
      const size = el.getAttribute("size") || "20px";
      const font = el.getAttribute("font") || "sans-serif";
      const color = el.style.color || "black";
      const wave = el.getAttribute("wave") || "updown";

      const spanHTML = [...text].map((char, i) =>
        <span style="--i:${i}; animation-duration:${speed}; animation-name:wave${wave}; animation-delay:${i * 0.1}s">${char}</span>
      ).join('');

      const wrapper = document.createElement("div");
      wrapper.className = "wavt";
      wrapper.style.color = color;
      wrapper.style.fontFamily = font;
      wrapper.style.fontSize = size;
      wrapper.innerHTML = spanHTML;

      el.replaceWith(wrapper);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", processWAVT);
  } else {
    processWAVT();
  }
})();

(function () {
  const style = document.createElement('style');
  style.innerHTML = 
    .wavt span {
      display: inline-block;
      animation-iteration-count: infinite;
      animation-delay: calc(var(--i) * 0.1s);
    }

    @keyframes waveUpdown {
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(-10px); }
      75% { transform: translateY(10px); }
    }

    @keyframes waveBounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.4); }
    }

    @keyframes waveReverse {
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(10px); }
      75% { transform: translateY(-10px); }
    }

    @keyframes waveCrazy {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(10deg) translateY(-10px); }
      50% { transform: rotate(-10deg) translateY(10px); }
      75% { transform: rotate(10deg); }
      100% { transform: rotate(0deg); }
    }
  ;
  document.head.appendChild(style);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function processWAVT() {
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
  }

  // Run on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", processWAVT);
  } else {
    processWAVT();
  }
})();
