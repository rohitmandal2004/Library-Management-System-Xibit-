function addBook() {
    const input = document.getElementById("bookInput").value;
    const list = document.getElementById("bookList");
    const item = document.createElement("li");
    item.textContent = input;
    list.appendChild(item);
  }
  
  function lendBook() {
    const input = document.getElementById("lendInput").value;
    const list = document.getElementById("lentBooks");
    const item = document.createElement("li");
    item.textContent = input;
    list.appendChild(item);
  }
  
  function reserveSeat() {
    document.getElementById("seatStatus").textContent = "Seat successfully reserved!";
  }
  
  function sendOverdueNotification() {
    document.getElementById("notification").textContent = "Overdue alert: Return your book ASAP!";
  }
  
  function recommendBook() {
    const genre = document.getElementById("genreInput").value.toLowerCase();
    const output = document.getElementById("recommendResult");
  
    const recommendations = {
      "sci-fi": ["Dune", "Ender's Game", "Neuromancer"],
      "romance": ["Pride and Prejudice", "Funny Story", "This Summer Will Be Different"],
      "historical": ["Judges", "1 Maccabees", "Ruth"]
    };
  
    if (recommendations[genre]) {
      output.textContent = `Recommended: ${recommendations[genre].join(", ")}`;
    } else {
      output.textContent = "Genre not found. Try romance, sci-fi, or historical.";
    }
  }
  
  function chatbotRespond() {
    const chatInput = document.getElementById("chatInput").value.toLowerCase();
    const chatLog = document.getElementById("chatLog");
    let response = "";
  
    const genres = {
      "romance": [
        "Lost and Lassoed by Lyla Sage",
        "This Summer Will Be Different by Carley Fortune",
        "Funny Story by Emily Henry",
        "Pride and Prejudice by Jane Austen"
      ],
      "historical christian": [
        "Joshua", "Judges", "Ruth", "I Samuel", "II Samuel", "I Kings", "II Kings",
        "I Chronicles", "II Chronicles", "Ezra", "Nehemiah", "Tobit", "Judith",
        "Esther", "1 Maccabees", "2 Maccabees", "3 Maccabees", "4 Maccabees", "3 Esdras"
      ]
    };
  
    if (chatInput.includes("recommend") || chatInput.includes("genre")) {
      if (chatInput.includes("romance")) {
        response = `Romance: ${genres.romance.join(", ")}`;
      } else if (chatInput.includes("historical") || chatInput.includes("bible")) {
        response = `Historical Christian: ${genres["historical christian"].join(", ")}`;
      } else {
        response = "Please specify a valid genre (e.g., romance, historical).";
      }
    } else {
      response = "Try asking: 'Recommend romance books' or 'What is Judges about?'.";
    }
  
    chatLog.innerHTML += `<p><strong>You:</strong> ${chatInput}</p>`;
    chatLog.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("chatInput").value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  function recommendVersatileBook() {
    const genre = document.getElementById("versatileGenreInput").value.toLowerCase();
    const list = document.getElementById("versatileRecommendList");
    const recommendations = {
      romance: [
        "Lost and Lassoed by Lyla Sage",
        "Pride and Prejudice by Jane Austen",
        "Funny Story by Emily Henry"
      ],
      "sci-fi": [
        "Dune by Frank Herbert",
        "Ender's Game by Orson Scott Card",
        "Neuromancer by William Gibson"
      ],
      fantasy: [
        "Harry Potter by J.K. Rowling",
        "The Hobbit by J.R.R. Tolkien",
        "Mistborn by Brandon Sanderson"
      ],
      mystery: [
        "Sherlock Holmes by Arthur Conan Doyle",
        "Gone Girl by Gillian Flynn",
        "The Girl with the Dragon Tattoo by Stieg Larsson"
      ],
      historical: [
        "Judges (Biblical)", "Ruth", "1 Maccabees"
      ]
    };
  
    list.innerHTML = "";
  
    if (recommendations[genre]) {
      recommendations[genre].forEach(book => {
        const li = document.createElement("li");
        li.textContent = book;
        list.appendChild(li);
      });
    } else {
      list.innerHTML = `<li>No recommendations found for "${genre}".</li>`;
    }
  }

  function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    // Toggle the dark-mode class on the body
    body.classList.toggle('dark-mode');
  
    // Update the button text
    if (body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = "Disable Dark Mode";
    } else {
      darkModeToggle.textContent = "Enable Dark Mode";
    }
  
    // Apply dark mode to all cards and header
    document.querySelectorAll('.card').forEach(card => {
      card.classList.toggle('dark-mode');
    });
    document.querySelector('header').classList.toggle('dark-mode');
  }
