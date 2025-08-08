import express from "express";

const app = express();
app.use(express.json());

// শেখার জন্য ডেমো রেসপন্স (সরকারি সাইট না হিট করেও টেস্ট হবে)
app.post("/api/check-nid", (req, res) => {
  const { nid, dob } = req.body || {};
  if (!nid || !dob) return res.status(400).json({ error: "nid এবং dob দিন" });
  return res.json({
    ok: true,
    received: { nid, dob },
    demo: "https://lsg-land-owner.land.gov.bd/check/user/nid/verification"
  });
});

// স্ট্যাটিক ফ্রন্টএন্ড সার্ভ করা (index.html)
app.use(express.static("public"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Running on http://localhost:" + port));
