document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll("article, section");

  elementos.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease-out";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  elementos.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("article, #contacto");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyANQJz8F4mZcivSLEoMNx_clHQcws1Knac",
    authDomain: "blog-de-alfredo.firebaseapp.com",
    projectId: "blog-de-alfredo",
    storageBucket: "blog-de-alfredo.firebasestorage.app",
    messagingSenderId: "682940841797",
    appId: "1:682940841797:web:cae9f58d444c3bf6c2082c",
    measurementId: "G-H1NQZGFJ9H"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const postText = document.getElementById("postText");
  const feed = document.getElementById("feed");

  // Función para publicar en Firestore
  window.publicar = async () => {
    const texto = postText.value.trim();
    if (texto === "") return;

    await addDoc(collection(db, "publicaciones"), {
      texto,
      fecha: serverTimestamp()
    });

    postText.value = "";
  };

  // Escuchar publicaciones en tiempo real
  const q = query(collection(db, "publicaciones"), orderBy("fecha", "desc"));
  onSnapshot(q, (snapshot) => {
    feed.innerHTML = "";
    snapshot.forEach(doc => {
      const post = doc.data();
      const div = document.createElement("div");
      div.className = "post";
      const fecha = post.fecha?.toDate().toLocaleString() || "Fecha desconocida";
      div.innerHTML = `<p>${post.texto}</p><small>${fecha}</small><hr>`;
      feed.appendChild(div);
    });
  });

div.innerHTML = `<p>${post.texto}</p><small>${fecha}</small><hr>`;
