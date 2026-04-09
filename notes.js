const subjects = {
  Academic: ["DBMS", "OS", "CN", "DSA", "Software Engineering"],
  Programming: ["Java", "C++", "C", "Python", "HTML/CSS/JS"]
};

const category = document.getElementById("category");
const subject = document.getElementById("subject");

category.addEventListener("change", () => {
  subject.innerHTML = "<option>Select Subject</option>";

  subjects[category.value].forEach(sub => {
    let option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subject.appendChild(option);
  });
});


function addNote() {
  let cat = category.value;
  let sub = subject.value;
  let topic = document.getElementById("topic").value;
  let content = document.getElementById("content").value;

  if (!cat || !sub || !topic || !content) {
    alert("Please fill all fields");
    return;
  }

  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  noteDiv.innerHTML = `
  <h3>${topic}</h3>
  <p><b>${cat} - ${sub}</b></p>
  <p>${content}</p>
  
  <button onclick="this.parentElement.remove()">Delete</button>
  <button onclick="downloadNote('${topic}', '${content}')">Download</button>
  <button onclick="shareNote('${topic}', '${content}')">Share</button>
`;


  document.getElementById("notesContainer").appendChild(noteDiv);

  document.getElementById("topic").value = "";
  document.getElementById("content").value = "";
}


function downloadNote(title, content) {
  const text = `Title: ${title}\n\n${content}`;
  const blob = new Blob([text], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = title + ".txt";
  link.click();
}

function shareNote(title, content) {
  const text = `Title: ${title}\n\n${content}`;

  
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Note copied! Opening WhatsApp...");

      
      const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    })
    .catch(() => {
      alert("Copy failed, but opening WhatsApp...");
      const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    });
}