document.addEventListener("DOMContentLoaded", function () {
    let contactButton = document.querySelector(".contact-btn");
    if (contactButton) {
        contactButton.addEventListener("click", function () {
            alert("Thank you for reaching out! Please check the FAQ before contacting us.");
        });
    }
    let subscribeButton = document.querySelector(".subscribe-to-our-Newsletter button");
    let emailInput = document.querySelector(".subscribe-to-our-Newsletter input");

    if (subscribeButton && emailInput) {
        subscribeButton.addEventListener("click", function () {
            let email = emailInput.value.trim();
            if (email === "") {
                alert("Please enter a valid email address.");
            } else {
                alert(`Thank you for subscribing with: ${email}`);
                emailInput.value = ""; 
            }
        });
    }

    
    let darkMode = false;
    let toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.style.cssText = "position: fixed; bottom: 20px; right: 20px; padding: 10px 15px; background: grey; color: white; border: none; cursor: pointer; border-radius: 5px;";
    
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        darkMode = !darkMode;

        if (darkMode) {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "white";

            
            document.querySelectorAll("header, main, footer, .faq-section, .customization, .footer-container").forEach(section => {
                if (!section.classList.contains("contact-section")) { 
                    section.style.backgroundColor = "#333";
                    section.style.color = "white";
                }
            });

            
            document.querySelectorAll("a").forEach(link => {
                link.style.color = "#bbb";
            });

            
            document.querySelectorAll("input, button").forEach(el => {
                if (!el.closest(".subscribe-to-our-Newsletter") && !el.classList.contains("contact-btn")) {
                    el.style.backgroundColor = "#444";
                    el.style.color = "white";
                    el.style.border = "1px solid #666";
                }
            });

            toggleButton.style.background = "white";
            toggleButton.style.color = "black";
        } else {
            document.body.style.backgroundColor = "";
            document.body.style.color = "";

            
            document.querySelectorAll("header, main, footer, .faq-section, .customization, .footer-container").forEach(section => {
                section.style.backgroundColor = "";
                section.style.color = "";
            });

        
            document.querySelectorAll("a").forEach(link => {
                link.style.color = "";
            });

            
            document.querySelectorAll("input, button").forEach(el => {
                if (!el.closest(".subscribe-to-our-Newsletter") && !el.classList.contains("contact-btn")) {
                    el.style.backgroundColor = "";
                    el.style.color = "";
                    el.style.border = "";
                }
            });

            toggleButton.style.background = "black";
            toggleButton.style.color = "white";
        }
    });
});
