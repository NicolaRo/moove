# Moove - Partial 🚧  
Micromobility webapp  

**📸 MOOVE Screenshot:**
<img width="2880" height="1800" alt="Screenshot 2025-09-14 alle 17 39 41" src="https://github.com/user-attachments/assets/29a5b429-31e9-441d-911b-26537a1d3a44" />

---

## 📖 About

**Moove** is a simple **micromobility management webapp** built in TypeScript.  
It simulates the booking of shared vehicles (🚲 bikes, 🛵 scooters, 🛴 e-scooters) across multiple cities.  

The project is structured around three core entities:  
- **Mezzo** → represents a transport vehicle.  
- **Utente** → represents a user who can book a vehicle.  
- **Città** → represents a city with its available vehicles.  

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/moove.git
cd moove
2️⃣ Install dependencies
npm install
3️⃣ Build the project
npm run build
4️⃣ Run locally
Simply open the index.html file in your browser
```



**🧪 Instructions: How to test the webapp logic**

👉 Open your browser’s Developer Tools and head to the Console tab.

🖥️ With your code editor running, you can trigger a booking by calling:

utente2.prenotaMezzo(ferraraBici);

utente 👤 is any user picked from the pool — just change the number (utente1, utente2, utente3).

ferraraBici refers to the city transport pool.

In this example:
Ferrara is the city
Bici = “Bicicletta” in Italian 🇮🇹 → Bike in English 🇬🇧

🔧 **What happens when you call .prenotaMezzo
**
.prenotaMezzo 🛠️ is the method that:

✅ Books the selected vehicle if it’s available

⚠️ Displays an unavailability warning if the vehicle is already in use

If the chosen vehicle is free, it will be automatically set to "in uso" 🚴 — meaning it’s no longer available for others.

**🛠️ Tech Stack**
TypeScript
Vite (or your bundler)
HTML / CSS

**👨‍💻 Developed by**
 Nicola Rossi ✨
