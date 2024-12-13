(() => {
    // Utility functions
    const utils = {
        ready: (callback) => {
            if (["interactive", "complete"].includes(document.readyState)) {
                callback();
            } else {
                document.addEventListener("DOMContentLoaded", callback);
            }
        },
        parseQueryParams: (queryString) => {
            return queryString
                ? Object.fromEntries(
                      queryString
                          .substr(1)
                          .split("&")
                          .map((pair) => pair.split("=").map(decodeURIComponent))
                  )
                : {};
        },
    };

    // Widget base class
    class Widget {
        constructor(options) {
            this.options = options;
            this.parent = options.parentElement;

            if (!this.parent) {
                throw new Error("Parent element not set");
            }

            this.inlineStyles = options.inlineStyles || false;
            this.url = (options.url || this.getUrlFromParent()).split("#")[0];

            if (!this.url) {
                throw new Error("Widget URL not set");
            }

            this.build();
        }

        getUrlFromParent() {
            return this.parent.getAttribute("data-url");
        }

        build() {
            this.node = document.createElement("iframe");
            this.node.src = this.url;
            this.node.width = "100%";
            this.node.height = "100%";
            this.node.frameBorder = "0";
            this.node.title = "Select a Date & Time - Calendly";
        }

        inject() {
            this.parent.appendChild(this.node);
        }
    }

    // Popup widget class
    class PopupWidget {
        constructor(url, options) {
            this.url = url;
            this.options = options;
        }

        show() {
            const overlay = document.createElement("div");
            overlay.className = "calendly-overlay";

            const iframe = document.createElement("iframe");
            iframe.src = this.url;
            iframe.className = "calendly-popup";

            overlay.appendChild(iframe);
            document.body.appendChild(overlay);
        }

        close() {
            const overlay = document.querySelector(".calendly-overlay");
            if (overlay) {
                overlay.remove();
            }
        }
    }

    // Badge widget class
    class BadgeWidget {
        constructor(options) {
            this.options = options;
        }

        build() {
            const badge = document.createElement("div");
            badge.className = "calendly-badge-widget";

            const content = document.createElement("div");
            content.className = "calendly-badge-content";
            content.style.background = this.options.color;
            content.style.color = this.options.textColor;
            content.innerHTML = this.options.text;

            if (this.options.branding) {
                const branding = document.createElement("span");
                branding.textContent = "Powered by Calendly";
                content.appendChild(branding);
            }

            badge.appendChild(content);
            document.body.appendChild(badge);
        }
    }

    // Exported functions
    const Calendly = {
        initInlineWidget: (options) => {
            utils.ready(() => {
                new Widget(options).inject();
            });
        },

        initPopupWidget: (url, options = {}) => {
            const widget = new PopupWidget(url, options);
            widget.show();
        },

        initBadgeWidget: (options) => {
            utils.ready(() => {
                new BadgeWidget(options).build();
            });
        },
    };

    // Automatically initialize widgets with "calendly-inline-widget" class
    utils.ready(() => {
        const inlineWidgets = document.querySelectorAll(".calendly-inline-widget");
        inlineWidgets.forEach((element) => {
            const url = element.getAttribute("data-url");
            if (url) {
                new Widget({
                    parentElement: element,
                    url,
                }).inject();
            }
        });
    });

    // Expose Calendly globally
    window.Calendly = Calendly;
})();
