const albums = {
  maldives: {
    title: "Maldives",
    meta: "Indian Ocean diary / diving / Kandooma",
    src: "./assets/travel/maldives.jpg",
    alt: "Maldives travel album poster"
  },
  malaysia: {
    title: "Malaysia",
    meta: "Kuala Lumpur / skyline / cultural heritage",
    src: "./assets/travel/malaysia.jpg",
    alt: "Malaysia travel album poster"
  },
  thailand: {
    title: "Thailand",
    meta: "Temples / street food / neon nights",
    src: "./assets/travel/thailand.jpg",
    alt: "Thailand travel album poster"
  },
  bali: {
    title: "Bali",
    meta: "Island of Gods / temples / sunsets",
    src: "./assets/travel/bali.jpg",
    alt: "Bali travel album poster"
  },
  singapore: {
    title: "Singapore",
    meta: "Urban escape / Marina Bay / city lights",
    src: "./assets/travel/singapore.jpg",
    alt: "Singapore travel album poster"
  }
};

const cases = {
  yz: {
    title: "Y&Z Grow, Owner / Operations Manager",
    summary:
      "An ongoing small-business operations role combining customer communication, order records, inventory coordination, and administrative follow-through.",
    points: [
      "Manage customer-facing communication and day-to-day operational priorities.",
      "Maintain order information and coordinate operational follow-ups.",
      "Use digital systems and organized records to support operations.",
      "Owner / Operations Manager title confirmed by site owner; specific dates and achievements should be checked before publishing."
    ]
  },
  msu: {
    title: "Michigan State University",
    summary:
      "Education is used as the credibility anchor for the site, connecting the visual graduation image with the professional story.",
    points: [
      "Bachelor of Arts in Supply Chain Management.",
      "Major GPA 4.00 and cumulative GPA 4.00.",
      "Dean's List for six semesters.",
      "Broad College of Business, East Lansing, Michigan."
    ]
  },
  jd: {
    title: "JD.com, TikTok Supply Chain + Campus Recruitment Analysis",
    summary:
      "A market and operations intelligence project focused on TikTok's North America fashion category and 2025 campus hiring strategy.",
    points: [
      "Conducted supply chain analysis for the North America fashion category.",
      "Analyzed e-commerce growth data and market expansion signals.",
      "Researched North American universities for a data-driven campus recruitment strategy.",
      "Presented actionable recommendations aligned with growth objectives."
    ]
  },
  bak: {
    title: "BAK Battery, Remote Operations Analyst Intern",
    summary:
      "An operations analytics story around procurement inefficiency, production monitoring, and cross-functional execution.",
    points: [
      "Identified inefficiencies in material procurement processes.",
      "Contributed to a 15% reduction in delivery time.",
      "Enhanced data collection and analysis for production monitoring.",
      "Supported a 12% increase in production efficiency."
    ]
  },
  taobao: {
    title: "Taobao Marketplace, E-commerce Toy Seller",
    summary:
      "An owner-operator story that combines sourcing, analytics, marketing, logistics, and customer experience.",
    points: [
      "Launched and operated an online toy store on Taobao.",
      "Achieved a 5-star seller rating within the first three months.",
      "Used trend analysis to drive a 30% monthly sales increase.",
      "Managed sourcing, logistics, ads, influencer collaboration, returns, and customer feedback."
    ]
  }
};

function setAlbum(albumKey) {
  const album = albums[albumKey];
  if (!album) return;

  document.getElementById("album-title").textContent = album.title;
  document.getElementById("album-meta").textContent = album.meta;

  const image = document.getElementById("album-image");
  image.src = album.src;
  image.alt = album.alt;

  document.querySelectorAll("[data-album]").forEach((button) => {
    button.classList.toggle("active", button.dataset.album === albumKey);
  });
}

function openCase(caseKey) {
  const item = cases[caseKey];
  if (!item) return;

  document.getElementById("case-title").textContent = item.title;
  document.getElementById("case-summary").textContent = item.summary;

  const list = document.getElementById("case-points");
  list.innerHTML = "";
  item.points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    list.appendChild(li);
  });

  document.getElementById("case-dialog").showModal();
}

document.querySelectorAll("[data-album]").forEach((button) => {
  button.addEventListener("click", () => setAlbum(button.dataset.album));
});

document.querySelectorAll("[data-case]").forEach((button) => {
  button.addEventListener("click", () => openCase(button.dataset.case));
});

document.getElementById("close-dialog").addEventListener("click", () => {
  document.getElementById("case-dialog").close();
});

document.getElementById("case-dialog").addEventListener("click", (event) => {
  if (event.target.id === "case-dialog") {
    event.currentTarget.close();
  }
});
