!function(){"use strict";document.getElementById("contactForm").addEventListener("submit",(function(e){e.preventDefault();const t=document.getElementById("name").value,n=document.getElementById("email").value,o=document.getElementById("message").value;localStorage.setItem("contactFormData",JSON.stringify({name:t,email:n,message:o})),document.getElementById("result").innerHTML="Thank you for contacting us! Your message has been saved locally.",document.getElementById("contactForm").reset()})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".btn--bounce-left, .btn--bounce-right"),t=document.querySelectorAll(".works__card"),n=new IntersectionObserver((e=>{e.forEach((e=>{1===e.intersectionRatio&&(e.target.classList.add("visible"),n.unobserve(e.target))}))}),{threshold:1}),o=new IntersectionObserver((e=>{e.forEach((e=>{e.intersectionRatio>0&&(e.target.classList.add("visible"),o.unobserve(e.target))}))}),{threshold:.5});e.forEach((e=>{n.observe(e)})),t.forEach((e=>{o.observe(e)}))})),function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon"),o=()=>{const o=t.classList.toggle("mobile-nav--open");n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",o)};e.addEventListener("click",(e=>{o()})),t.addEventListener("click",(e=>{t.classList.contains("mobile-nav--open")&&o()}))}()}();