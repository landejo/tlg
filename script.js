<script>
  (function () {
    const key = "tlg_theme";
    const btn = document.getElementById("themeToggle");
    const saved = localStorage.getItem(key);

    function apply(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(key, theme);
    }

    // Auto default: use OS preference unless user already chose
    if (!saved) {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      document.documentElement.setAttribute("data-theme", saved);
    }

    if (btn) {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        apply(current === "dark" ? "light" : "dark");
      });
    }
  })();
</script>
