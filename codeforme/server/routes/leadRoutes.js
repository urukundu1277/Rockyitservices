const express = require("express");
const router = express.Router();

const Lead = (() => {
  try {
    return require("../models/Lead");
  } catch (err) {
    console.warn("Lead model not found, /api/lead will not persist to DB");
    return null;
  }
})();

const { sendTelegramMessage, formatTelegramMessage } = require("../services/telegram");

// POST /api/lead - create lead and notify admin
router.post("/", async (req, res) => {
  try {
    console.debug("[lead] Incoming body:", req.body);
    let saved = null;
    if (Lead) saved = await Lead.create(req.body);

    const payload = saved || req.body;

    const text = formatTelegramMessage({
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      service: payload.service,
      message: payload.message,
      source: "New Lead",
    });

    try {
      await sendTelegramMessage(text);
    } catch (tgErr) {
      console.error("Telegram notification failed for /api/lead:", tgErr.message || tgErr);
    }

    return res.status(201).json({ success: true, data: saved || req.body });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
